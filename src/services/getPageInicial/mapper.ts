import {PaginaInicialApi, PaginaInicialQueryResponse} from "@/types/paginaInicial.interface";

const ordenarPorOrdem = <T extends { ordem: number }>(
    itens: T[] | null | undefined,
): T[] => {
    return [...(itens ?? [])].sort((a, b) => a.ordem - b.ordem);
};

const filtrarAtivos = <T extends { ativo: boolean }>(
    itens: T[] | null | undefined,
): T[] => {
    return (itens ?? []).filter((item) => item.ativo);
};

const filtrarEOrdenar = <T extends { ativo: boolean; ordem: number }>(
    itens: T[] | null | undefined,
): T[] => {
    return ordenarPorOrdem(filtrarAtivos(itens));
};

export const paginaInicialMapper = (
    response: PaginaInicialQueryResponse | null | undefined,
): PaginaInicialApi | null => {

    if (!response) {
        return null;
    }

    const pagina = response.paginaInicial;

    if (!pagina) {
        return null;
    }

    return {
        ...pagina,

        hero: pagina.hero ? {
            ...pagina.hero,
            competencias: ordenarPorOrdem(pagina.hero.competencias),
            acoes: filtrarEOrdenar(pagina.hero.acoes),
            redesSociais: ordenarPorOrdem(pagina.hero.redesSociais),
        } : null,

        sobreMim: pagina.sobreMim ? {
            ...pagina.sobreMim,
            destaque: filtrarAtivos(pagina.sobreMim.destaque),
        } : null,

        competenciasTecnicas: pagina.competenciasTecnicas ? {
            ...pagina.competenciasTecnicas,
            categorias: filtrarEOrdenar(
                pagina.competenciasTecnicas.categorias,
            ).map((categoria) => ({
                ...categoria,
                tecnologias: filtrarEOrdenar(categoria.tecnologias),
            })),
        } : null,

        experienciaProfissional: pagina.experienciaProfissional ? {
            ...pagina.experienciaProfissional,
            experiencias: filtrarEOrdenar(
                pagina.experienciaProfissional.experiencias,
            ).map((experiencia) => ({
                ...experiencia,
                responsabilidades: ordenarPorOrdem(
                    experiencia.responsabilidades,
                ),
                tecnologias: filtrarEOrdenar(experiencia.tecnologias),
            })),
        } : null,

        servicos: pagina.servicos ? {
            ...pagina.servicos,
            cards: filtrarEOrdenar(pagina.servicos.cards),
        } : null,

        formacaoCertificacoes: pagina.formacaoCertificacoes ? {
            ...pagina.formacaoCertificacoes,
            cards: filtrarEOrdenar(
                pagina.formacaoCertificacoes.cards,
            ),
        } : null,

        contacto: pagina.contacto ? {
            ...pagina.contacto,
            informacoes: ordenarPorOrdem(
                pagina.contacto.informacoes,
            ),
            redesSocial: ordenarPorOrdem(
                pagina.contacto.redesSocial,
            ),
        } : null,

        footer: pagina.footer ? {
            ...pagina.footer,
        } : null,
    };
};
