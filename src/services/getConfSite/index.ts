import {client} from "@/lib/ApolloClient";
import query from "@/services/getConfSite/query";
import {configuracoesDoSiteMapper} from "@/services/getConfSite/mapper";
import {getConfSiteNeon} from "@/services/neon";
import {ConfiguracoesDoSiteResponse} from "@/types/confSite";

export async function getConfSite(){
   try {
       const { data } = await client.query<ConfiguracoesDoSiteResponse>({
           query
       });

       return configuracoesDoSiteMapper(data)
   }catch (e) {
       console.warn(
           "[CONF SITE]: Railway indisponível, a tentar NEO Console como fonte alternativa."
       );

       try {
           const neonData = await getConfSiteNeon();

           if (neonData) {
               return configuracoesDoSiteMapper(neonData);
           }
       } catch (neonError) {
           console.error("[CONF SITE]: Erro ao carregar dados do NEO Console.", neonError);
           console.error(e);
       }
   }
}