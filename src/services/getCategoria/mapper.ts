import {CategoriaDeProjetoApi, CategoriasDeProjetosResponse} from "@/types/categoriaTipo.interface";

export function categoriasDeProjetosMapper(
    data?: CategoriasDeProjetosResponse | null | undefined
): CategoriaDeProjetoApi[] | null {
    if (!data){
        return null;
    }

    return (
        data?.categoriasDeProjetos.map((categoria) => ({
            ativo: categoria.ativo,
            slug: categoria.slug,
            nome: categoria.nome,
            ordem: categoria.ordem,
            projeto: categoria.projeto ?? [],
        })) ?? []
    );
}