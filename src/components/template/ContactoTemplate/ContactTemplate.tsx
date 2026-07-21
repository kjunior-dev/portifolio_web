import { Contact } from "@/components/features/contacto/Contact";
import {ContactoApi} from "@/types/paginaInicial.interface";

export interface IContatoProps{
    contato: ContactoApi | null | undefined
}
export function ContactTemplate({
    contato
}: IContatoProps){
  return(
      <>
        <Contact contato={contato}/>
      </>
  )
}