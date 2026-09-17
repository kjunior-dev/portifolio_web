import {client} from "@/lib/ApolloClient";
import query from "@/services/getPageCertificado/query";
import {pageCertificadoMapper} from "@/services/getPageCertificado/mapper";
import {getPageCertificadoNeon} from "@/services/neon";
import {PageCertificadoResponse} from "@/types/certificado.interface";

export async function getPageCertificado(){
   try {
       const { data } = await client.query<PageCertificadoResponse>({
           query,
       });

       return pageCertificadoMapper(data)
   }catch (e) {
       console.warn(
           "[PAGE CERTIFICADO]: Railway indisponível, a tentar NEO Console como fonte alternativa."
       );

       try {
           const neonData = await getPageCertificadoNeon();

           if (neonData) {
               return pageCertificadoMapper(neonData);
           }
       } catch (neonError) {
           console.error("[PAGE CERTIFICADO]: Erro ao carregar dados do NEO Console.", neonError);
           console.error(e);
       }
   }
}