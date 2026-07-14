"use client";

import { ExternalLink, Github, Layers3, X } from "lucide-react";
import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/config/portfolio";
import type { ProjectCategory } from "@/config/portfolio";
import { Section, TechBadge } from "@/components/shared/Section";

type Project = (typeof projects)[number];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter || project.tags.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <Section
      id="projects"
      eyebrow="Projetos"
      title="Soluções pensadas para problemas concretos."
      description="Cada projeto destaca o contexto, o problema resolvido, as funcionalidades principais, tecnologias utilizadas e a minha participação."
      className="bg-slate-50"
    >
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar projetos por categoria">
        {projectFilters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 ${
                isActive
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
              }`}
              aria-pressed={isActive}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/8"
          >
            <ProjectPreview project={project} />
            <div className="p-6 sm:p-7">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                  {project.category}
                </span>
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((technology) => (
                  <TechBadge key={technology}>{technology}</TechBadge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 active:translate-y-0"
                >
                  Ver detalhes
                </button>
                <a
                  href={project.demo}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-300 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                >
                  <ExternalLink className="size-4" />
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                >
                  <Github className="size-4" />
                  Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </Section>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`bg-gradient-to-br ${project.accent} p-5`}>
      <div className="rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl shadow-slate-950/15">
        <div className="mb-4 flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-amber-400" />
          <span className="size-3 rounded-full bg-emerald-400" />
          <span className="ml-auto h-2 w-24 rounded-full bg-slate-200" />
        </div>
        <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            <div className="h-20 rounded-2xl bg-slate-950" />
            <div className="h-3 rounded-full bg-slate-200" />
            <div className="h-3 w-2/3 rounded-full bg-slate-200" />
          </div>
          <div className="grid gap-3">
            <div className="rounded-2xl bg-slate-100 p-3">
              <div className="mb-3 flex items-center gap-2 text-slate-600">
                <Layers3 className="size-4" />
                <span className="text-xs font-semibold">{project.category}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="h-12 rounded-xl bg-white" />
                <span className="h-12 rounded-xl bg-white" />
                <span className="h-12 rounded-xl bg-white" />
              </div>
            </div>
            <div className="h-16 rounded-2xl bg-slate-950/90" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-cyan-700">{project.category}</p>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-6 grid gap-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Problema resolvido
            </h4>
            <p className="mt-2 text-base leading-7 text-slate-700">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Funcionalidades
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Minha participação
            </h4>
            <p className="mt-2 text-base leading-7 text-slate-700">{project.role}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
