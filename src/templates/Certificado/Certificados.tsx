import { Certificado } from "@/components/features/certificados/Certificado";
import {PageCertificadoApi} from "@/types/certificado.interface";

type CertificadosProps = {
  data: PageCertificadoApi | null | undefined
};

export function Certificados({ data }: CertificadosProps) {
  return <Certificado data={data}/>;
}
