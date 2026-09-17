import {NextResponse} from "next/server";
import {neonExecute} from "@/lib/neonDb";

const CMS_URL = process.env.CMS_URL;
const COLLECTION_PATH = process.env.STRAPI_EMAIL_COLLECTION_PATH || "/api/emails";

async function parseResponse(response: Response) {
    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
        return response.json();
    }

    return response.text();
}

export async function POST(req: Request) {
    const token = process.env.STRAPI_API_TOKEN;

    try {
        if (!CMS_URL) {
            return NextResponse.json(
                {error: "CMS_URL não foi configurada."},
                {status: 500}
            );
        }

        if (!token) {
            return NextResponse.json(
                {error: "STRAPI_API_TOKEN não foi configurado."},
                {status: 500}
            );
        }

        const body = await req.json();

        if (!body.email) {
            return NextResponse.json(
                {error: "Email é obrigatório."},
                {status: 400}
            );
        }

        const cmsUrl = new URL(COLLECTION_PATH, CMS_URL);

        const response = await fetch(cmsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                data: {
                    nome: body.name || '',
                    email: body.email || '',
                    assunto: body.subject || '',
                    mensagem: body.message || '',
                },
            }),
        });

        const data = await parseResponse(response);

        if (!response.ok) {
            const message = typeof data === "string"
                ? data
                : data?.error?.message || data?.error || "Erro ao registrar log";

            console.warn(
                `[SEND EMAIL]: Strapi respondeu ${response.status}, a tentar salvar no NEO Console: ${message}`
            );

            const savedOnNeon = await saveEmailOnNeon(body);

            if (savedOnNeon) {
                return NextResponse.json({
                    ok: true,
                    message: "Mensagem registada no NEO Console.",
                });
            }

            return NextResponse.json(
                {error: `Strapi respondeu ${response.status}: ${message}`},
                {status: response.status}
            );
        }

        return NextResponse.json(data);

    } catch (error) {
        console.warn("[SEND EMAIL]: Railway indisponível, a tentar salvar no NEO Console.");

        try {
            const body = await req.clone().json();
            const savedOnNeon = await saveEmailOnNeon(body);

            if (savedOnNeon) {
                return NextResponse.json({
                    ok: true,
                    message: "Mensagem registada no NEO Console.",
                });
            }
        } catch (neonError) {
            console.error("[SEND EMAIL]: Erro ao salvar no NEO Console.", neonError);
        }

        console.error("route.ts → catch geral:", error);

        return NextResponse.json(
            {error: "Erro interno"},
            {status: 500}
        );
    }
}

async function saveEmailOnNeon(body: Record<string, unknown>): Promise<boolean> {
    if (!process.env.NEO_CONSOLE_BD) {
        return false;
    }

    try {
        await neonExecute(
            `INSERT INTO emails (nome, email, assunto, mensagem, published_at, locale)
             VALUES ($1, $2, $3, $4, NOW(), NULL)`,
            [
                body.nome || "",
                body.email || "",
                body.assunto || "",
                body.mensagem || "",
            ]
        );

        return true;
    } catch (error) {
        console.error("[SEND EMAIL]: Falha ao inserir no NEO Console.", error);
        return false;
    }
}
