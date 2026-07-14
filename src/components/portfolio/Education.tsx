import { education } from "./portfolio-data";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Formação e certificações"
      title="Aprendizagem contínua aplicada a software e tecnologia."
      description="A formação técnica combina desenvolvimento web moderno, boas práticas de engenharia e conhecimentos complementares em mecatrónica automóvel."
      className="bg-slate-50"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {education.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-slate-950 text-white">
              <item.icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.details}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
