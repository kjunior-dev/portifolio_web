import { Section, TechBadge } from "@/components/shared/Section";
import {ISkillsProps} from "@/components/template/SkillsTemplate/SkillsTemplate";
import {getSocialIcon} from "@/lib/social-icons";

export function Skills({
 compTecnica
}: ISkillsProps){
  return (
    <Section
      id="skills"
      eyebrow={compTecnica?.etiqueta || ''}
      title={compTecnica?.titulo || ''}
      description={compTecnica?.descricao || ''}
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {compTecnica?.categorias.map((category) => {
          const Icon = getSocialIcon(category?.icon || "")
          return(
              <article
                  key={category.ordem}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/5"
              >
                <div className="mb-5 flex items-center gap-3">
                  {
                    Icon && (
                          <div className="grid size-11 place-items-center rounded-2xl bg-slate-950 text-white">
                            <Icon
                                className="size-5"
                                aria-hidden="true"
                            />
                          </div>
                      )
                  }
                  <h3 className="text-lg font-semibold text-slate-950">{category.titulo}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tecnologias.map((skill) => (
                      <TechBadge key={skill.ordem}>{skill?.nome}</TechBadge>
                  ))}
                </div>
              </article>
          )
        })}
      </div>
    </Section>
  );
}
