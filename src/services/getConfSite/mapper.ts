import {ConfiguracoesDoSiteApi, ConfiguracoesDoSiteResponse} from "@/types/confSite";


export function configuracoesDoSiteMapper(
    response: ConfiguracoesDoSiteResponse | undefined
): ConfiguracoesDoSiteApi | null {
    const configuracoes = response?.configuracoesDoSite;

    if (!configuracoes) {
        return null;
    }

    return {
        documentId: configuracoes.documentId,
        curriculo: configuracoes.curriculo,
        menuPrincipal: configuracoes.menuPrincipal
            .filter((menu) => menu.ativo)
            .sort((a, b) => a.ordem - b.ordem),
    };
}