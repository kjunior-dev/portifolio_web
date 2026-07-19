import { Experience } from "@/components/features/experiencia/Experience";
import {ExperienciaProfissionalApi} from "@/types/paginaInicial.interface";

export interface IExperienceTemplate{
    expProf: ExperienciaProfissionalApi | null | undefined
}
export function ExperienceTemplate({
   expProf
}: IExperienceTemplate){
  return(
      <>
        <Experience expProf={expProf}/>
      </>
  )
}