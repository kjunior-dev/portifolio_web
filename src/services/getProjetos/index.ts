import {CombinedGraphQLErrors} from "@apollo/client";
import {client} from "@/lib/ApolloClient";
import query from "@/services/getProjetos/query";
import {projetosMapper} from "@/services/getProjetos/mapper";
import {ProjetosPaginationArg, ProjetosResponse} from "@/types/projetos.interface";

const PROJECTS_PAGE_SIZE = 4;

export async function getProjetos(pagination: ProjetosPaginationArg = {}) {
    try {
        const {data} = await client.query<ProjetosResponse>({
            query,
            variables: {
                pagination: {
                    page: pagination.page ?? 1,
                    pageSize: pagination.pageSize ?? PROJECTS_PAGE_SIZE,
                },
            },
        });

        return projetosMapper(data);
    } catch (e: unknown) {
        if (CombinedGraphQLErrors.is(e)) {
            const forbiddenError = e.errors.find(
                (error) => error.message === "Forbidden access",
            );

            if (forbiddenError) {
                console.error(
                    "[COLLECTION TYPES PROJETOS]: Não tens permissão para aceder a estes dados.",
                );
            }

            return;
        }

        if (e instanceof Error) {
            console.error("Ocorreu um erro ao carregar os projetos. Tenta novamente.");
            return;
        }

        console.error("Ocorreu um erro desconhecido ao carregar os projetos.");
    }
}
