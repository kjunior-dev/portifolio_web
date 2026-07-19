import {Hero} from "@/components/features/hero/Hero";
import {HeroApi} from "@/types/paginaInicial.interface";

export interface IHeroProps{
    hero: HeroApi | null | undefined
}

export function HeroTemplate({
    hero
}: IHeroProps){

  return(
      <>
          {
              hero && (
                  <Hero hero={hero}/>
              )
          }
      </>
  )
}