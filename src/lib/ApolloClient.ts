import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

    const url = process.env.URL_API_NEON
    /*const url = process.env.URL_API_RAILWAY;
    const token = process.env.STRAPI_API_TOKEN;

    if (!url) {
        throw new Error("URL_API_RAILWAY não foi configurada.");
    }

    if (!token) {
        throw new Error("STRAPI_API_TOKEN não foi configurado.");
    }*/

export const client = new ApolloClient({
    link: new HttpLink({
        uri: url,
        fetchOptions: {
            next: {
                revalidate: 60,
            }
        },
       /* headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },*/
    }),
    cache: new InMemoryCache(),
});