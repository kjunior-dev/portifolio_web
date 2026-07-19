export interface PaginaInicialQueryResponse {
    paginaInicial: PaginaInicialApi | null;
}

export interface PaginaInicialApi {
    documentId: string;
    hero: HeroApi | null;
    sobreMim: SobreMimApi | null;
    competenciasTecnicas: CompetenciasTecnicasApi | null;
    experienciaProfissional: ExperienciaProfissionalApi | null;
    projetos: ProjetosSecaoApi | null;
    servicos: ServicosApi | null;
    formacaoCertificacoes: FormacaoCertificacoesApi | null;
    contacto: ContactoApi | null;
    footer: FooterApi | null;
}

export interface HeroApi {
    id: string | number;
    textoDisponibilidade: string | null;
    subtitulo: string | null;
    titulo: string | null;
    descricao: string | null;
    disponivel: boolean;
    fotoPerfil: MediaApi | null;
    nome: string | null;
    cargo: string | null;
    localizacao: string | null;
    iconn: string | null;
    objetivo: string | null;
    competencias: HeroCompetenciaApi[];
    curriculo: MediaApi | null;
    acoes: AcaoApi[];
    redesSociais: RedeSocialApi[];
}

export interface HeroCompetenciaApi {
    __typename?: string;
    titulo: string;
    ordem: number;
    icon: string | null;
    descricao: string | null;
}

export interface AcaoApi {
    texto: string;
    tipoDestino: string | null;
    variante: string | null;
    novaAba: boolean;
    ordem: number;
    icone: string | null;
    url: string | null;
    ativo: boolean;
}

export interface RedeSocialApi {
    id?: string | number;
    nome: string;
    url: string;
    ordem: number;
    novaAba: boolean;
    labelAcessibilidade: string | null;
    icon: string | null;
}

export interface SobreMimApi {
    id: string | number;
    ativo: boolean;
    etiqueta: string | null;
    titulo: string | null;
    introducao: string | null;
    conteudo: string | null;
    destaque: DestaqueApi[];
}

export interface DestaqueApi {
    id: string | number;
    icone: string | null;
    titulo: string;
    ativo: boolean;
    descricao: string | null;
}

export interface CompetenciasTecnicasApi {
    id: string | number;
    ativo: boolean;
    etiqueta: string | null;
    titulo: string | null;
    descricao: string | null;
    categorias: CategoriaTecnicaApi[];
}

export interface CategoriaTecnicaApi {
    id: string | number;
    ativo: boolean;
    icon: string | null;
    ordem: number;
    titulo: string;
    tecnologias: TecnologiaApi[];
}

export interface TecnologiaApi {
    id: string | number;
    ativo: boolean;
    nome: string;
    ordem: number;
}

export interface ExperienciaProfissionalApi {
    id: string | number;
    ativo: boolean;
    etiqueta: string | null;
    titulo: string | null;
    descricao: string | null;
    experiencias: ExperienciaApi[];
}

export interface ExperienciaApi {
    id: string | number;
    ativo: boolean;
    area: string | null;
    cargo: string;
    tipoExperiencia: string | null;
    descricao: string | null;
    empresa: string;
    localizacao: string | null;
    dataInicio: string | null;
    dataFim: string | null;
    atual: boolean;
    responsabilidades: ResponsabilidadeApi[];
    tecnologias: TecnologiaApi[];
    ordem: number;
}

export interface ResponsabilidadeApi {
    id: string | number;
    ordem: number;
    texto: string;
}

export interface ProjetosSecaoApi {
    id: string | number;
    ativo: boolean;
    etiqueta: string | null;
    titulo: string | null;
    descricao: string | null;
    mostrarFiltros: boolean;
    quantidadeInicial: number;
}

export interface ServicosApi {
    id: string | number;
    ativo: boolean;
    etiqueta: string | null;
    titulo: string | null;
    descricao: string | null;
    cards: CardApi[];
}

export interface FormacaoCertificacoesApi {
    id: string | number;
    ativo: boolean;
    etiqueta: string | null;
    titulo: string | null;
    descricao: string | null;
    cards: CardApi[];
}

export interface CardApi {
    id: string | number;
    ativo: boolean;
    icone: string | null;
    ordem: number;
    titulo: string;
    descricao: string | null;
}

export interface ContactoApi {
    id: string | number;
    ativo: boolean;
    etiqueta: string | null;
    titulo: string | null;
    descricao: string | null;
    tituloContactoDireto: string | null;
    descricaoContactoDireto: string | null;
    informacoes: InformacaoContactoApi[];
    redesSocial: RedeSocialApi[];
}

export interface InformacaoContactoApi {
    id: string | number;
    link: string | null;
    ordem: number;
    icone: string | null;
    titulo: string;
    valor: string;
}

export interface FooterApi {
    cargo: string | null;
    mostrarMenu: boolean;
    mostrarRedesSociais: boolean;
    nome: string | null;
    textoDireitos: string | null;
}

/**
 * Estrutura dos formatos de uma mídia do Strapi.
 */
export interface MediaApi {
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