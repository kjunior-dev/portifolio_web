import { Certificados } from "@/templates/Certificado/Certificados";
import {getPageCertificado} from "@/services/getPageCertificado";

export default async function CertificadosPage() {
  const data = await getPageCertificado();

  return (
    <main>
      <Certificados data={data}/>
    </main>
  );
}
