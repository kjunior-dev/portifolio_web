import {neonQuery} from "@/lib/neonDb";
import {
    fetchFirstComponent,
    getComponentLinks,
} from "@/services/neon/components";
import {ConfiguracoesDoSiteResponse} from "@/types/confSite";

export async function getConfSiteNeon(): Promise<ConfiguracoesDoSiteResponse | null> {
    const entries = await neonQuery<{ id: number; document_id: string; curriculo: string | null }>(
        `SELECT id, document_id, curriculo
         FROM configuracoes_do_sites
         WHERE published_at IS NOT NULL
         ORDER BY id ASC
         LIMIT 1`
    );

    const entry = entries[0];
    if (!entry) {
        return null;
    }

    const links = await getComponentLinks("configuracoes_do_sites_cmps", entry.id);
    const menuPrincipal = [];

    for (const link of links) {
        if (link.field !== "menuPrincipal") {
            continue;
        }

        const item = await fetchFirstComponent(link.component_type, link.cmp_id);
        if (item) {
            menuPrincipal.push(item);
        }
    }

    return {
        configuracoesDoSite: {
            documentId: entry.document_id,
            curriculo: entry.curriculo,
            menuPrincipal,
        },
    };
}