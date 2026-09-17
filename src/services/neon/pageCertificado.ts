import {neonQuery} from "@/lib/neonDb";
import {
    fetchFirstComponent,
    getComponentLinks,
} from "@/services/neon/components";
import {PageCertificadoResponse} from "@/types/certificado.interface";

export async function getPageCertificadoNeon(): Promise<PageCertificadoResponse | null> {
    const entries = await neonQuery<{
        id: number;
        document_id: string;
        ativo: boolean;
        etiqueta: string;
        titulo: string;
        descricao: string;
    }>(
        `SELECT id, document_id, ativo, etiqueta, titulo, descricao
         FROM page_certificados
         WHERE published_at IS NOT NULL
         ORDER BY id ASC
         LIMIT 1`
    );

    const entry = entries[0];
    if (!entry) {
        return null;
    }

    const links = await getComponentLinks("page_certificados_cmps", entry.id);
    const certificadoDetails = [];

    for (const link of links) {
        if (link.field !== "certificadoDetails") {
            continue;
        }

        const item = await fetchFirstComponent(link.component_type, link.cmp_id);
        if (item) {
            certificadoDetails.push(item);
        }
    }

    return {
        pageCertificado: {
            ativo: entry.ativo,
            documentId: entry.document_id,
            etiqueta: entry.etiqueta,
            titulo: entry.titulo,
            descricao: entry.descricao,
            certificadoDetails,
        },
    };
}