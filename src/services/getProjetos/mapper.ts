import {ProjetosMappedResponse, ProjetosResponse} from "@/types/projetos.interface";

const ordenarPorOrdem = <T extends { ordem: number | null }>(
    itens: T[] | null | undefined,
): T[] => {
    return [...(itens ?? [])].sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0));
};

const filtrarAtivos = <T extends { ativo: boolean }>(
    itens: T[] | null | undefined,
): T[] => {
    return (itens ?? []).filter((item) => item.ativo);
};

export function projetosMapper(
    data?: ProjetosResponse | null | undefined,
): ProjetosMappedResponse | null {
    if (!data?.projetos_connection) {
        return null;
    }

    return {
        projetos: ordenarPorOrdem(data.projetos_connection.nodes).map((projeto) => ({
            ...projeto,
            tecnologias: ordenarPorOrdem(filtrarAtivos(projeto.tecnologias)),
            funcionalidades: ordenarPorOrdem(filtrarAtivos(projeto.funcionalidades)),
            categoriaPrincipal_connection: projeto.categoriaPrincipal_connection
                ? {
                    ...projeto.categoriaPrincipal_connection,
                    nodes: ordenarPorOrdem(projeto.categoriaPrincipal_connection.nodes),
                }
                : null,
        })),
        pagination: data.projetos_connection.pageInfo,
    };
}
