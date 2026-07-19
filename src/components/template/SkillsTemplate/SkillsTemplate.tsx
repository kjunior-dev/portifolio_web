import { Skills } from "@/components/features/skills/Skills";
import {CompetenciasTecnicasApi} from "@/types/paginaInicial.interface";

export interface ISkillsProps{
    compTecnica: CompetenciasTecnicasApi | null | undefined
}
export function SkillsTemplate({
   compTecnica
}: ISkillsProps){
  return(
      <>
        <Skills compTecnica={compTecnica}/>
      </>
  )
}