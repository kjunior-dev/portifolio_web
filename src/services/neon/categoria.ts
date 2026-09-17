import {neonQuery} from "@/lib/neonDb";
import {CategoriasDeProjetosResponse} from "@/types/categoriaTipo.interface";

export async function getCategoriaNeon(): Promise<CategoriasDeProjetosResponse | null> {
    const categorias = await neonQuery<{
        id: number;
        ativo: boolean;
        slug: string;
        nome: string;
        ordem: number;
    }>(
        `SELECT id, ativo, slug, nome, ordem
         FROM categorias_de_projetos
         WHERE published_at IS NOT NULL
         ORDER BY ordem ASC NULLS LAST, id ASC`
    );

    const result = [];

    for (const categoria of categorias) {
        const projetos = await neonQuery<{ slug: string }>(
            `SELECT p.slug
             FROM projetos_categorias_de_projetos_lnk lnk
             JOIN projetos p ON p.id = lnk.projeto_id
             WHERE lnk.categorias_de_projeto_id = $1
               AND p.published_at IS NOT NULL
             ORDER BY p.ordem ASC NULLS LAST, p.id ASC`,
            [categoria.id]
        );

        result.push({
            ativo: categoria.ativo,
            slug: categoria.slug,
            nome: categoria.nome,
            ordem: categoria.ordem,
            projeto: projetos,
        });
    }

    return {categoriasDeProjetos: result};
}