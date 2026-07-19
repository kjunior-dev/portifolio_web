export interface CategoriasDeProjetosResponse {
    categoriasDeProjetos: CategoriaDeProjetoApi[];
}

export interface CategoriaDeProjetoApi {
    ativo: boolean;
    slug: string;
    nome: string;
    ordem: number;
    projeto: ProjetoCategoriaApi[];
}

export interface ProjetoCategoriaApi {
    slug: string;
}