export interface PageCertificadoResponse {
    pageCertificado: PageCertificadoApi | null;
}

export interface PageCertificadoApi {
    ativo: boolean;
    documentId: string;
    etiqueta: string;
    titulo: string;
    descricao: string;
    certificadoDetails: CertificadoDetailsApi[];
}

export interface CertificadoDetailsApi {
    id: number;
    validate: boolean;
    icon: string;
    iconValidacao: string;
    titulo: string;
    entidadeFormadora: string;
    cargaHoraria: string;
    certificadoURL: MediaApi | null;
    cards: CertificadoCardApi[];
    tecnologias: CertificadoTecnologiaApi[];
}

export interface CertificadoCardApi {
    ativo: boolean;
    id: number;
    ordem: number;
    icone: string;
    titulo: string;
    descricao: string;
}

export interface CertificadoTecnologiaApi {
    id: number;
    ordem: number;
    ativo: boolean;
    nome: string;
}

/**
 * Estrutura dos formatos de uma mídia do Strapi.
 */
export interface MediaApi {
    name: string;
    url: string;
    formats: Record<string, MediaFormatApi> | null;
}

export interface MediaFormatApi {
    name?: string;
    hash?: string;
    ext?: string;
    mime?: string;
    path?: string | null;
    width?: number;
    height?: number;
    size?: number;
    sizeInBytes?: number;
    url: string;
}
