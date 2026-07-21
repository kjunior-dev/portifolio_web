import { Services } from "@/components/features/servico/Services";
import {ServicosApi} from "@/types/paginaInicial.interface";

export interface IServicesTemplate{
    servicos: ServicosApi | null | undefined
}
export function ServicesTemplate({
    servicos
}: IServicesTemplate){
  return(
      <>
        <Services servicos={servicos}/>
      </>
  )
}