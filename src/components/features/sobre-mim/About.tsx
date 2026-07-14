import { aboutCards } from "@/config/portfolio";
import { Section } from "@/components/shared/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Sobre mim"
      title="Perfil técnico com foco em produto, código e resolução de problemas."
      description="Desenvolvo soluções frontend e backend com uma abordagem prática: entender o problema, organizar a experiência, estruturar o código e entregar uma interface clara para quem utiliza."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-700">
            Trabalho principalmente com Next.js, React, TypeScript, JavaScript, Node.js,
            APIs REST, PostgreSQL e Tailwind CSS. Tenho experiência na criação de
            sistemas reais, plataformas de gestão, fluxos de autenticação, formulários,
            dashboards e integrações entre serviços.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-700">
            A minha base em mecatrónica e diagnóstico automóvel ajuda-me a pensar em
            sistemas de forma analítica: observar sinais, isolar causas, testar soluções
            e documentar decisões. Essa disciplina torna-se útil no debugging, na
            arquitetura de software e na comunicação com clientes ou equipas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {aboutCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/5"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
                <card.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
