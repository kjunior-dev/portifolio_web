import { Education } from "@/components/features/education/Education";
import {FormacaoCertificacoesApi} from "@/types/paginaInicial.interface";

export interface IEducationTemplate{
    formacao: FormacaoCertificacoesApi | null | undefined
}
export function EducationTemplate({
    formacao
}: IEducationTemplate){
  return(
      <>
        <Education formacao={formacao}/>
      </>
  )
}