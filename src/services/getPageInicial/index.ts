import {client} from "@/lib/ApolloClient";
import query from "@/services/getPageInicial/query";
import {paginaInicialMapper} from "@/services/getPageInicial/mapper";
import {getPageInicialNeon} from "@/services/neon";
import {PaginaInicialQueryResponse} from "@/types/paginaInicial.interface";
import {CombinedGraphQLErrors} from "@apollo/client";

export async function getPageInicial(){

    try {
        const { data } = await client.query<PaginaInicialQueryResponse>({
            query,
        })

        return paginaInicialMapper(data);
    }catch (e: unknown) {
        if (CombinedGraphQLErrors.is(e)) {
            const forbiddenError = e.errors.find(
                (error) => error.message === "Forbidden access"
            );

            if (forbiddenError) {
                console.error(
                    `[SINGLE TYPES PAGINA INICIAL]: Não tens permissão para aceder a estes dados.`
                );
            }
        }

        console.warn(
            "[PAGINA INICIAL]: Railway indisponível, a tentar NEO Console como fonte alternativa."
        );

        try {
            const neonData = await getPageInicialNeon();

            if (neonData) {
                return paginaInicialMapper(neonData);
            }
        } catch (neonError) {
            console.error("[PAGINA INICIAL]: Erro ao carregar dados do NEO Console.", neonError);
        }

        if (e instanceof Error) {
            console.error(
                "Ocorreu um erro ao carregar os dados. Tenta novamente."
            );
            return;
        }

        console.error(
            "Ocorreu um erro desconhecido ao carregar os dados."
        );
    }
}
