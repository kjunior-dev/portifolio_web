export interface ConfiguracoesDoSiteResponse {
    configuracoesDoSite: ConfiguracoesDoSiteApi | null;
}

export interface ConfiguracoesDoSiteApi {
    documentId: string;
    curriculo: CurriculoApi | null;
    menuPrincipal: MenuPrincipalApi[];
}

export interface CurriculoApi {
    formats: Record<string, FormatoArquivoApi> | null;
}

export interface FormatoArquivoApi {
    url: string;
    name?: string;
    width?: number;
    height?: number;
    size?: number;
    mime?: string;
}

export interface MenuPrincipalApi {
    id: string;
    ativo: boolean;
    ordem: number;
    texto: string;
    url: string;
}