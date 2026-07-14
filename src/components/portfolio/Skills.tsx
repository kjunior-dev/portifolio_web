import { skillCategories } from "./portfolio-data";
import { Section, TechBadge } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Competências técnicas"
      title="Tecnologias organizadas por contexto de utilização."
      description="Em vez de percentagens abstratas, estas são as áreas e ferramentas que utilizo para construir interfaces, APIs, integrações e sistemas de gestão."
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.category}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/5"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-slate-950 text-white">
                <category.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{category.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <TechBadge key={skill}>{skill}</TechBadge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
