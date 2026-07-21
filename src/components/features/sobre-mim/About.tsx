import { Section } from "@/components/shared/Section";
import {IAboutProps} from "@/components/template/SobreMimTemplate/AboutTemplate";
import {AboutProfile} from "@/components/features/sobre-mim/components/aboutProfile";
import {getSocialIcon} from "@/lib/social-icons";

export function About({
  about
}: IAboutProps) {

  return (
    <Section
      id="sobre"
      eyebrow={about?.etiqueta || ""}
      title={about?.titulo || ""}
      description={about?.introducao || ""}
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
       {/* About Profile */}
        <AboutProfile about={about}/>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {about?.destaque.map((card, idx: number) => {
            const Icon = getSocialIcon(card?.icone || "");
            return(
                <article
                    key={idx}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20"
                >
                  {
                    Icon && (
                        <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300">
                          <Icon
                              className="size-5"
                              aria-hidden="true"
                          />
                        </div>
                      )
                  }
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{card?.titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{card?.descricao}</p>
                </article>
            )
          })}
        </div>
      </div>
    </Section>
  );
}
