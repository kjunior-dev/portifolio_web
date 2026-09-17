import {neonQuery} from "@/lib/neonDb";
import {
    fetchFirstComponent,
    getComponentLinks,
} from "@/services/neon/components";
import {PaginaInicialApi, PaginaInicialQueryResponse} from "@/types/paginaInicial.interface";

export async function getPageInicialNeon(): Promise<PaginaInicialQueryResponse | null> {
    const entries = await neonQuery<{ id: number; document_id: string }>(
        `SELECT id, document_id
         FROM pagina_inicials
         WHERE published_at IS NOT NULL
         ORDER BY id ASC
         LIMIT 1`
    );

    const entry = entries[0];
    if (!entry) {
        return null;
    }

    const links = await getComponentLinks("pagina_inicials_cmps", entry.id);
    const byField = new Map<string, (typeof links)[number]>();

    for (const link of links) {
        if (!byField.has(link.field)) {
            byField.set(link.field, link);
        }
    }

    const getSection = async (field: string) => {
        const link = byField.get(field);
        if (!link) {
            return null;
        }
        return fetchFirstComponent(link.component_type, link.cmp_id);
    };

    const paginaInicial = {
        documentId: entry.document_id,
        hero: await getSection("hero"),
        sobreMim: await getSection("sobreMim"),
        competenciasTecnicas: await getSection("competenciasTecnicas"),
        experienciaProfissional: await getSection("experienciaProfissional"),
        projetos: await getSection("projetos"),
        servicos: await getSection("servicos"),
        formacaoCertificacoes: await getSection("formacaoCertificacoes"),
        contacto: await getSection("contacto"),
        footer: await getSection("footer"),
    };

    return {paginaInicial: paginaInicial as PaginaInicialApi};
}