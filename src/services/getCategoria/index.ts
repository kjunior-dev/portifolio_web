import {client} from "@/lib/ApolloClient";
import query from "@/services/getCategoria/query";
import {categoriasDeProjetosMapper} from "@/services/getCategoria/mapper";
import {CategoriasDeProjetosResponse} from "@/types/categoriaTipo.interface";
import {CombinedGraphQLErrors} from "@apollo/client";

export async function getCategorial(){

    try {
        const { data } = await client.query<CategoriasDeProjetosResponse>({
            query,
        })

        return categoriasDeProjetosMapper(data);
    }catch (e: unknown) {
        if (CombinedGraphQLErrors.is(e)) {
            const forbiddenError = e.errors.find(
                (error) => error.message === "Forbidden access"
            );

            if (forbiddenError) {
                console.error(
                    `[COLLETYON TYPES CATEGORIA]: Não tens permissão para aceder a estes dados.`
                );
            }

            return;
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
