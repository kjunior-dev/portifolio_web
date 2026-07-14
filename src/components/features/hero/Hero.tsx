import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { highlights, profile, socialLinks } from "@/config/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#e0f7fa_0,#f8fafc_34%,#ffffff_72%)] pt-28 sm:pt-32"
    >
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24">
        <div>
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="truncate">{profile.location}</span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            {profile.role}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Crio aplicações web úteis, rápidas e preparadas para trabalho real.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Sou {profile.name}, desenvolvedor de software com foco em Next.js, React,
            TypeScript, Node.js, APIs REST e sistemas de gestão. Também trago uma base
            técnica em mecatrónica e diagnóstico automóvel, o que fortalece a minha
            abordagem prática para resolver problemas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 active:translate-y-0"
            >
              Ver projetos
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-300 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
            >
              <Mail className="size-4" />
              Entrar em contacto
            </a>
            <a
              href={profile.resumeHref}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
            >
              <Download className="size-4" />
              Solicitar CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                aria-label={link.label}
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>
              <div className="grid gap-6 p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={profile.avatar}
                    width={96}
                    height={96}
                    priority
                    alt="Retrato profissional de Kevin Sousa"
                    className="size-20 rounded-2xl object-cover ring-4 ring-white/10 sm:size-24"
                  />
                  <div className="min-w-0">
                    <p className="text-lg font-semibold text-white">{profile.name}</p>
                    <p className="mt-1 text-sm text-slate-300">Full Stack · Frontend · Backend</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-200">
                      <MapPin className="size-3" />
                      Remoto
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm font-medium leading-6 text-slate-100">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <p className="text-sm leading-6 text-cyan-50">
                    Objetivo: construir soluções digitais claras, fiáveis e alinhadas com
                    necessidades reais de negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
