import {client} from "@/lib/ApolloClient";
import query from "@/services/getConfSite/query";
import {configuracoesDoSiteMapper} from "@/services/getConfSite/mapper";
import {ConfiguracoesDoSiteResponse} from "@/types/confSite";

export async function getConfSite(){
   try {
       const { data } = await client.query<ConfiguracoesDoSiteResponse>({
           query
       });

       return configuracoesDoSiteMapper(data)
   }catch (e) {
       console.error(e)
   }
}