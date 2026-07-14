import { CalendarDays } from "lucide-react";
import { experience } from "./portfolio-data";
import { Section, TechBadge } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experiência profissional"
      title="Experiência orientada a aplicações reais e resolução técnica."
      description="Uma visão clara das responsabilidades, tecnologias e resultados que caracterizam o meu trabalho."
    >
      <div className="relative grid gap-6">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.company}`}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-700">{item.company}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.role}
                </h3>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                <CalendarDays className="size-4" aria-hidden="true" />
                {item.period}
              </div>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-600">{item.description}</p>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <ul className="space-y-3">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-600" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap content-start gap-2">
                {item.technologies.map((technology) => (
                  <TechBadge key={technology}>{technology}</TechBadge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
