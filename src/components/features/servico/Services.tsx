import { Section } from "@/components/shared/Section";
import {IServicesTemplate} from "@/components/template/ServicoTemplate/ServicesTemplate";
import {getSocialIcon} from "@/lib/social-icons";

export function Services({
 servicos
}: IServicesTemplate){

  return (
    <Section
      id={"servicos"}
      eyebrow={servicos?.etiqueta || ""}
      title={servicos?.titulo || ""}
      description={servicos?.descricao || ""}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {servicos?.cards.map((service) => {
          const Icon = getSocialIcon( service?.icone || "")
          return (
              <article
                  key={service.id}
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
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{service.titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.descricao}</p>
              </article>
          )
        })}
      </div>
    </Section>
  );
}
