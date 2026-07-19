import { About } from "@/components/features/sobre-mim/About";
import {SobreMimApi} from "@/types/paginaInicial.interface";

export interface IAboutProps{
    about: SobreMimApi | null | undefined
}
export function AboutTemplate({
    about
}: IAboutProps){
  return(
      <>
        <About about={about}/>
      </>
  )
}