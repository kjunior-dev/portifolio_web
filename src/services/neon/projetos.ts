import {neonQuery, NeonRow} from "@/lib/neonDb";
import {
    getComponentLinks,
    fetchFirstComponent,
} from "@/services/neon/components";
import {
    Projeto,
    ProjetosResponse,
    ProjetosPaginationArg,
} from "@/types/projetos.interface";

interface ProjetoRow extends NeonRow {
    id: number;
    ordem: number;
    slug: string;
    titulo: string;
}

interface CategoriaLink {
    slug: string;
    nome: string;
    ordem: number;
}

export async function getProjetosNeon(
    pagination: ProjetosPaginationArg = {}
): Promise<ProjetosResponse | null> {
    const page = pagination.page ?? 1;
    const pageSize = pagination.pageSize ?? 4;

    const countRows = await neonQuery<{ total: string }>(
        `SELECT COUNT(*) AS total
         FROM projetos
         WHERE published_at IS NOT NULL`
    );
    const total = Number(countRows[0]?.total ?? 0);
    const offset = (page - 1) * pageSize;

    const rows = await neonQuery<ProjetoRow>(
        `SELECT * FROM projetos
         WHERE published_at IS NOT NULL
         ORDER BY ordem ASC NULLS LAST, id ASC
         LIMIT $1 OFFSET $2`,
        [pageSize, offset]
    );

    const nodes = [];

    for (const row of rows) {
        nodes.push(await hydrateProjeto(row));
    }

    return {
        projetos_connection: {
            pageInfo: {
                page,
                pageSize,
                pageCount: Math.ceil(total / pageSize),
                total,
            },
            nodes: nodes as unknown as Projeto[],
        },
    };
}

async function hydrateProjeto(row: ProjetoRow): Promise<Record<string, unknown>> {
    const tecnologiasRefs = await getComponentLinks("projetos_cmps", row.id);
    const tecnologias = [];
    const funcionalidades = [];

    for (const ref of tecnologiasRefs) {
        if (ref.field === "tecnologias") {
            const item = await fetchFirstComponent(ref.component_type, ref.cmp_id);
            if (item) {
                tecnologias.push(item);
            }
        } else if (ref.field === "funcionalidades") {
            const item = await fetchFirstComponent(ref.component_type, ref.cmp_id);
            if (item) {
                funcionalidades.push(item);
            }
        }
    }

    const categorias = await getProjetoCategorias(row.id);
    const imagem = await getProjectImage(row.id);
    const categoriaPrincipal = categorias[0] ?? null;

    return {
        ordem: row.ordem,
        slug: row.slug,
        titulo: row.titulo,
        resumo: row.resumo,
        imagem: imagem ? {formats: imagem} : null,
        categorias_de_projetos: categorias.map((categoria) => ({
            slug: categoria.slug,
        })),
        categoriaPrincipal_connection: categoriaPrincipal
            ? {nodes: [categoriaPrincipal]}
            : null,
        tecnologias,
        problemaResolvido: row.problema_resolvido,
        funcionalidades,
        minhaParticipacao: row.minha_participacao,
        urlCodigo: row.url_codigo,
        urlDemo: row.url_demo,
        destaque: row.destaque,
        labelButton: row.label_button,
    };
}

async function getProjetoCategorias(projetoId: number): Promise<CategoriaLink[]> {
    const rows = await neonQuery<{ slug: string; nome: string; ordem: number }>(
        `SELECT c.slug, c.nome, c.ordem
         FROM projetos_categorias_de_projetos_lnk lnk
         JOIN categorias_de_projetos c ON c.id = lnk.categorias_de_projeto_id
         WHERE lnk.projeto_id = $1
         ORDER BY lnk.categorias_de_projeto_ord ASC NULLS LAST, lnk.id ASC`,
        [projetoId]
    );

    return rows as CategoriaLink[];
}

async function getProjectImage(projetoId: number): Promise<Record<string, unknown> | null> {
    const rows = await neonQuery<{ formats: NeonRow | null }>(
        `SELECT f.formats
         FROM files_related_mph rel
         JOIN files f ON f.id = rel.file_id
         WHERE rel.related_type = 'api::projeto.projeto'
           AND rel.field = 'imagem'
           AND rel.related_id = $1
         ORDER BY rel."order" ASC NULLS LAST, rel.id ASC
         LIMIT 1`,
        [projetoId]
    );

    const row = rows[0];
    if (!row || !row.formats) {
        return null;
    }

    return row.formats;
}