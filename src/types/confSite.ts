export interface ConfiguracoesDoSiteResponse {
    configuracoesDoSite: ConfiguracoesDoSiteApi | null;
}

export interface ConfiguracoesDoSiteApi {
    documentId: string;
    curriculo: string | null;
    menuPrincipal: MenuPrincipalApi[];
}

export interface MenuPrincipalApi {
    id: string;
    ativo: boolean;
    ordem: number;
    texto: string;
    url: string;
}
