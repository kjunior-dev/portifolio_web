import { Section } from "@/components/shared/Section";
import {IEducationTemplate} from "@/components/template/EducationTemplate/EducationTemplate";
import {getSocialIcon} from "@/lib/social-icons";

export function Education({
  formacao
}: IEducationTemplate){
  return (
    <Section
      id="education"
      eyebrow={formacao?.etiqueta || ""}
      title={formacao?.titulo || ""}
      description={formacao?.descricao || ""}
      className="bg-slate-50 dark:bg-slate-900"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {formacao?.cards.map((item) => {
          const Icon = getSocialIcon(item?.icone || "");
          return(
          <article key={item.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
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
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.titulo}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.descricao}</p>
          </article>
          )
        })}
      </div>
    </Section>
  );
}
