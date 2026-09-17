import {neonQuery, NeonRow} from "@/lib/neonDb";

export interface ComponentLink {
    id: number;
    entity_id: number;
    cmp_id: number;
    component_type: string;
    field: string;
    order: number | null;
}

/**
 * Tabelas de componentes do Strapi, indexadas pelo `component_type`
 * que aparece nas tabelas de junção `*_cmps`.
 */
const COMPONENT_TABLES: Record<string, string> = {
    "shared.tecnologia": "components_shared_tecnologias",
    "shared.competencias": "components_shared_competencias",
    "shared.acoes": "components_shared_acoes",
    "shared.rede-social": "components_shared_rede_socials",
    "shared.destaque-profissional": "components_shared_destaque_profissionals",
    "shared.card-informativo": "components_shared_card_informativos",
    "shared.categoria-de-competencia": "components_shared_categoria_de_competencias",
    "shared.experiencia": "components_shared_experiencias",
    "shared.responsabilidade": "components_shared_responsabilidades",
    "shared.informacao-de-contacto": "components_shared_informacao_de_contactos",
    "shared.link-de-navegacao": "components_shared_link_de_navegacaos",
    "shared.funcionalidade-do-projeto": "components_shared_funcionalidade_do_projetos",
    "sections.hero-principal": "components_sections_hero_principals",
    "sections.sobre-mim": "components_sections_sobre_mims",
    "sections.competencias-tecnicas": "components_sections_competencias_tecnicas",
    "sections.experiencia-profissional": "components_sections_experiencia_profissionals",
    "sections.projetos": "components_sections_projetos",
    "sections.seccao-de-cards": "components_sections_seccao_de_cards",
    "sections.contacto": "components_sections_contactos",
    "layout.footer": "components_layout_footers",
    "sections.certificado-detalhe": "components_sections_certificado_detalhes",
};

/**
 * Tabelas de junção `*_cmps` de cada componente que possui
 * componentes aninhados.
 */
const COMPONENT_CMPS_TABLES: Record<string, string> = {
    "sections.hero-principal": "components_sections_hero_principals_cmps",
    "sections.sobre-mim": "components_sections_sobre_mims_cmps",
    "sections.competencias-tecnicas": "components_sections_competencias_tecnicas_cmps",
    "sections.experiencia-profissional": "components_sections_experiencia_profissionals_cmps",
    "sections.contacto": "components_sections_contactos_cmps",
    "layout.footer": "components_layout_footers_cmps",
    "sections.seccao-de-cards": "components_sections_seccao_de_cards_cmps",
    "sections.certificado-detalhe": "components_sections_certificado_detalhes_cmps",
    "shared.experiencia": "components_shared_experiencias_cmps",
    "shared.categoria-de-competencia": "components_shared_categoria_de_competencias_cmps",
};

export async function getComponentLinks(
    cmpsTable: string,
    entityId: number
): Promise<ComponentLink[]> {
    return neonQuery<ComponentLink>(
        `SELECT id, entity_id, cmp_id, component_type, field, "order"
         FROM "${cmpsTable}"
         WHERE entity_id = $1
         ORDER BY "order" ASC NULLS LAST, id ASC`,
        [entityId]
    );
}

export async function fetchFirstComponent(
    componentType: string,
    cmpId: number
): Promise<Record<string, unknown> | null> {
    const table = COMPONENT_TABLES[componentType];
    if (!table) {
        return null;
    }

    const rows = await neonQuery<NeonRow>(
        `SELECT * FROM "${table}" WHERE id = $1 LIMIT 1`,
        [cmpId]
    );

    const row = rows[0];
    if (!row) {
        return null;
    }

    return hydrateComponent(componentType, row);
}

export interface FieldComponent {
    componentType: string;
    cmpId: number;
}

export async function getFieldComponents(
    parentComponentType: string,
    parentId: number,
    field: string
): Promise<FieldComponent[]> {
    const cmpsTable = COMPONENT_CMPS_TABLES[parentComponentType];
    if (!cmpsTable) {
        return [];
    }

    const links = await getComponentLinks(cmpsTable, parentId);

    return links
        .filter((link) => link.field === field)
        .map((link) => ({
            componentType: link.component_type,
            cmpId: link.cmp_id,
        }));
}

export async function resolveFieldComponents<T>(
    parentComponentType: string,
    parentId: number,
    field: string
): Promise<T[]> {
    const refs = await getFieldComponents(parentComponentType, parentId, field);
    const resolved: T[] = [];

    for (const ref of refs) {
        const item = await fetchFirstComponent(ref.componentType, ref.cmpId);
        if (item) {
            resolved.push(item as T);
        }
    }

    return resolved;
}

function snakeToCamel(value: string): string {
    return value.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

async function hydrateComponent(
    componentType: string,
    row: NeonRow
): Promise<Record<string, unknown>> {
    const id = row.id as number;

    switch (componentType) {
        case "sections.hero-principal": {
            return {
                id,
                textoDisponibilidade: row.texto_disponibilidade,
                subtitulo: row.subtitulo,
                titulo: row.titulo,
                descricao: row.descricao,
                disponivel: row.disponivel,
                fotoPerfil: null,
                nome: row.nome,
                cargo: row.cargo,
                localizacao: row.localizacao,
                iconn: row.iconn,
                objetivo: row.objetivo,
                competencias: await resolveFieldComponents(
                    "sections.hero-principal",
                    id,
                    "competencias"
                ),
                acoes: await resolveFieldComponents("sections.hero-principal", id, "acoes"),
                redesSociais: await resolveFieldComponents(
                    "sections.hero-principal",
                    id,
                    "redesSociais"
                ),
            };
        }

        case "sections.sobre-mim": {
            return {
                id,
                ativo: row.ativo,
                etiqueta: row.etiqueta,
                titulo: row.titulo,
                introducao: row.introducao,
                conteudo: row.conteudo,
                destaque: await resolveFieldComponents("sections.sobre-mim", id, "destaque"),
            };
        }

        case "sections.competencias-tecnicas": {
            return {
                id,
                ativo: row.ativo,
                etiqueta: row.etiqueta,
                titulo: row.titulo,
                descricao: row.descricao,
                categorias: await resolveFieldComponents(
                    "sections.competencias-tecnicas",
                    id,
                    "categorias"
                ),
            };
        }

        case "sections.experiencia-profissional": {
            return {
                id,
                ativo: row.ativo,
                etiqueta: row.etiqueta,
                titulo: row.titulo,
                descricao: row.descricao,
                experiencias: await resolveFieldComponents(
                    "sections.experiencia-profissional",
                    id,
                    "experiencias"
                ),
            };
        }

        case "sections.projetos": {
            return {
                id,
                ativo: row.ativo,
                etiqueta: row.etiqueta,
                titulo: row.titulo,
                descricao: row.descricao,
                mostrarFiltros: row.mostrar_filtros,
                quantidadeInicial: row.quantidade_inicial,
            };
        }

        case "sections.seccao-de-cards": {
            return {
                id,
                ativo: row.ativo,
                etiqueta: row.etiqueta,
                titulo: row.titulo,
                descricao: row.descricao,
                cards: await resolveFieldComponents("sections.seccao-de-cards", id, "cards"),
            };
        }

        case "sections.contacto": {
            return {
                id,
                ativo: row.ativo,
                etiqueta: row.etiqueta,
                titulo: row.titulo,
                descricao: row.descricao,
                tituloContactoDireto: row.titulo_contacto_direto,
                descricaoContactoDireto: row.descricao_contacto_direto,
                informacoes: await resolveFieldComponents("sections.contacto", id, "informacoes"),
                redesSocial: await resolveFieldComponents("sections.contacto", id, "redesSocial"),
            };
        }

        case "layout.footer": {
            return {
                id,
                cargo: row.cargo,
                mostrarMenu: row.mostrar_menu,
                mostrarRedesSociais: row.mostrar_redes_sociais,
                nome: row.nome,
                textoDireitos: row.texto_direitos,
                redesSocial: await resolveFieldComponents("layout.footer", id, "redesSocial"),
                menuPrincipal: await resolveFieldComponents("layout.footer", id, "menuPrincipal"),
            };
        }

        case "sections.certificado-detalhe": {
            return {
                id,
                validate: row.validate,
                icon: row.icon,
                iconValidacao: row.icon_validacao,
                titulo: row.titulo,
                entidadeFormadora: row.entidade_formadora,
                cargaHoraria: row.carga_horaria,
                certificadoURL: await getCertificateFile(id),
                cards: await resolveFieldComponents("sections.certificado-detalhe", id, "cards"),
                tecnologias: await resolveFieldComponents(
                    "sections.certificado-detalhe",
                    id,
                    "tecnologias"
                ),
            };
        }

        case "shared.experiencia": {
            return {
                ...snakeCaseRowToCamel(row),
                responsabilidades: await resolveFieldComponents(
                    "shared.experiencia",
                    id,
                    "responsabilidades"
                ),
                tecnologias: await resolveFieldComponents("shared.experiencia", id, "tecnologias"),
            };
        }

        case "shared.categoria-de-competencia": {
            return {
                id,
                ativo: row.ativo,
                icon: row.icon,
                ordem: row.ordem,
                titulo: row.titulo,
                tecnologias: await resolveFieldComponents(
                    "shared.categoria-de-competencia",
                    id,
                    "tecnologias"
                ),
            };
        }

        case "shared.tecnologia": {
            return {
                id,
                ativo: row.ativo,
                nome: row.nome,
                ordem: row.ordem,
            };
        }

        case "shared.competencias": {
            return {
                id,
                titulo: row.titulo,
                ordem: row.ordem,
                icon: row.icon,
                descricao: row.descricao,
            };
        }

        case "shared.acoes": {
            return {
                id,
                texto: row.texto,
                tipoDestino: row.tipo_destino,
                variante: row.variante,
                novaAba: row.nova_aba,
                ordem: row.ordem,
                icone: row.icone,
                url: row.url,
                ativo: row.ativo,
            };
        }

        case "shared.rede-social": {
            return {
                id,
                nome: row.nome,
                url: row.url,
                ordem: row.ordem,
                novaAba: row.nova_aba,
                labelAcessibilidade: row.label_acessibilidade,
                icon: row.icon,
            };
        }

        case "shared.destaque-profissional": {
            return {
                id,
                icone: row.icone,
                titulo: row.titulo,
                ativo: row.ativo,
                descricao: row.descricao,
            };
        }

        case "shared.card-informativo": {
            return {
                id,
                ativo: row.ativo,
                icone: row.icone,
                ordem: row.ordem,
                titulo: row.titulo,
                descricao: row.descricao,
            };
        }

        case "shared.responsabilidade": {
            return {
                id,
                ordem: row.ordem,
                texto: row.texto,
            };
        }

        case "shared.informacao-de-contacto": {
            return {
                id,
                link: row.link,
                ordem: row.ordem,
                icone: row.icone,
                titulo: row.titulo,
                valor: row.valor,
            };
        }

        case "shared.link-de-navegacao": {
            return {
                id,
                ativo: row.ativo,
                ordem: row.ordem,
                texto: row.texto,
                url: row.url,
            };
        }

        case "shared.funcionalidade-do-projeto": {
            return {
                id,
                ativo: row.ativo,
                ordem: row.ordem,
                texto: row.texto,
            };
        }

        default:
            return snakeCaseRowToCamel(row);
    }
}

function snakeCaseRowToCamel(row: NeonRow): NeonRow {
    const result: NeonRow = {};

    for (const [key, value] of Object.entries(row)) {
        result[snakeToCamel(key)] = value;
    }

    return result;
}

interface CertificateFile {
    name: string;
    url: string;
    formats: unknown;
}

async function getCertificateFile(componentId: number): Promise<CertificateFile | null> {
    const rows = await neonQuery<NeonRow>(
        `SELECT f."name", f.url, f.formats
         FROM files_related_mph rel
         JOIN files f ON f.id = rel.file_id
         WHERE rel.related_type = 'sections.certificado-detalhe'
           AND rel.field = 'certificadoURL'
           AND rel.related_id = $1
         ORDER BY rel."order" ASC NULLS LAST, rel.id ASC
         LIMIT 1`,
        [componentId]
    );

    const row = rows[0];
    if (!row) {
        return null;
    }

    return {
        name: (row.name as string) ?? "",
        url: (row.url as string) ?? "",
        formats: row.formats ?? null,
    };
}