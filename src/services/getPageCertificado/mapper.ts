import {PageCertificadoApi, PageCertificadoResponse} from "@/types/certificado.interface";

export function pageCertificadoMapper(
    data: PageCertificadoResponse | undefined
): PageCertificadoApi | null {
    const page = data?.pageCertificado;

    if (!page) {
        return null;
    }

    return {
        ...page,

        certificadoDetails: (page.certificadoDetails ?? []).map(
            (certificado) => ({
                ...certificado,
                cards: certificado.cards ?? [],
                tecnologias: certificado.tecnologias ?? [],
            })
        ),
    };
}
