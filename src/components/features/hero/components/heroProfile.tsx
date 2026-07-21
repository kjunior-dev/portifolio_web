import {SocialLinks} from "@/components/features/hero/components/socialLinks";
import {HeroApi} from "@/types/paginaInicial.interface";
import {getSocialIcon} from "@/lib/social-icons";

interface IheroProfile{
    hero: HeroApi | null | undefined
}
export function HeroProfile({
    hero
}: IheroProfile){

    return(
        <div>
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-cyan-900 dark:bg-slate-900/80 dark:text-slate-200">
                <span className={`size-2 rounded-full ${hero?.disponivel ? 'bg-emerald-500' : 'bg-red-500'}`} aria-hidden="true" />
                <span className="truncate">
                    {hero?.disponivel ? hero?.textoDisponibilidade : "Indisponível para novos projetos no momento."}
                </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                {hero?.subtitulo}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                {hero?.titulo}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {hero?.descricao}
            </p>

            {
                hero?.acoes && (
                    <div className="mt-8 flex flex-wrap gap-4">
                        {
                            hero?.acoes.map((item, idx) => {
                                const Icon = getSocialIcon(item?.icone || "");

                                if (!item?.ativo) {
                                    return null;
                                }

                                return(
                                    <a
                                        key={idx}
                                        href={item?.url || ""}
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white
                                         shadow-lg shadow-slate-950/10 transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2
                                         focus-visible:ring-cyan-600 focus-visible:ring-offset-2 active:translate-y-0 dark:bg-white dark:text-slate-950 dark:shadow-black/30 dark:hover:bg-cyan-200"
                                    >
                                        {item?.texto}

                                        {Icon && (
                                            <Icon
                                                className="size-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </a>
                                )
                            })
                        }
                    </div>
                )
            }

            {/* Social Links */}
            <SocialLinks redesSociais={hero?.redesSociais}/>
        </div>
    )
}
