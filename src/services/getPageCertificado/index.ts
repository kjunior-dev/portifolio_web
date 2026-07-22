import {client} from "@/lib/ApolloClient";
import query from "@/services/getPageCertificado/query";
import {pageCertificadoMapper} from "@/services/getPageCertificado/mapper";
import {PageCertificadoResponse} from "@/types/certificado.interface";

export async function getPageCertificado(){
   try {
       const { data } = await client.query<PageCertificadoResponse>({
           query,
       });

       return pageCertificadoMapper(data)
   }catch (e) {
       console.error(e)
   }
}
