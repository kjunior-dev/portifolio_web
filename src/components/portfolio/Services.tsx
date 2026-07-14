import { services } from "./portfolio-data";
import { Section } from "./Section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Serviços"
      title="Como posso ajudar empresas, equipas e projetos."
      description="Serviços focados em transformar necessidades técnicas em aplicações utilizáveis, organizadas e fáceis de manter."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/5"
          >
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
              <service.icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
