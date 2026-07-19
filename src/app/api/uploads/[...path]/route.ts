import { NextRequest } from "next/server";

export async function GET(
    _req: NextRequest,
    context: { params: Promise<{ path: string[] }> }
) {
    const { path } = await context.params;

    const apiUrl = process.env.URL_API_RAILWAY;
    if (!apiUrl) {
        return new Response("URL_API_RAILWAY is not defined", { status: 500 });
    }

    const cmsOrigin = new URL(apiUrl).origin;
    const targetUrl = `${cmsOrigin}/uploads/${path.join("/")}`;
    const response = await fetch(targetUrl);

    if (!response.ok) {
        return new Response("Not found", { status: 404 });
    }

    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    return new Response(response.body, {
        status: response.status,
        headers,
    });
}
