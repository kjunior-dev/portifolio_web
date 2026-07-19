export interface ProjetosResponse {
    projetos_connection: ProjetosConnection;
}

export interface ProjetosConnection {
    pageInfo: ProjetosPagination;
    nodes: Projeto[];
}

export interface ProjetosPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ProjetosMappedResponse {
    projetos: Projeto[];
    pagination: ProjetosPagination;
}

export interface ProjetosPaginationArg {
    page?: number;
    pageSize?: number;
}

export interface Projeto {
    ordem: number;
    slug: string;
    titulo: string;
    resumo: string | null;

    imagem: {
        formats: ImagemFormats | null;
    } | null;

    categorias_de_projetos: {
        slug: string;
    }[];

    categoriaPrincipal_connection: {
        nodes: {
            slug: string;
            nome: string;
            ordem: number;
        }[];
    } | null;

    tecnologias: {
        id: string;
        ativo: boolean;
        nome: string;
        ordem: number | null;
    }[];

    problemaResolvido: string | null;

    funcionalidades: {
        id: string;
        ativo: boolean;
        ordem: number;
        texto: string;
    }[];

    minhaParticipacao: string | null;
    urlCodigo: string | null;
    urlDemo: string | null;
    destaque: boolean | null;
    labelButton: string | null;
}

export interface ImagemFormats {
    thumbnail?: ImagemFormat;
    small?: ImagemFormat;
    medium?: ImagemFormat;
    large?: ImagemFormat;
}

export interface ImagemFormat {
    url: string;
}
