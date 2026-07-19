"use client";

import { FaGithub as Github } from "react-icons/fa6";
import { LuExternalLink as ExternalLink } from "react-icons/lu";
import { useMemo, useState } from "react";
import { Pagination, Section, TechBadge } from "@/components/shared";
import {IProjetoProps} from "@/components/template/ProjectoTemplate/ProjectsTemplate";
import {ProjectModal} from "@/components/template/ProjectoTemplate/components/ProjectModal";
import {ProjectPreview} from "@/components/template/ProjectoTemplate/components/ProjectPreview";
import {EmpetyStatus} from "@/components/template/ProjectoTemplate/components/EmpetyStatus";
import {Projeto} from "@/types/projetos.interface";

export type Project = Projeto;
const ALL_PROJECTS_FILTER = "Todos";
const ALL_PROJECTS_FILTER_SLUG = "todos";

type ProjectFilter = {
  slug: string;
  nome: string;
};

export function Projects({
    categoria,
    projetoHeader,
    projetos,
    todosProjetos,
    pagination
}: IProjetoProps){

  const [activeFilter, setActiveFilter] = useState<string>(ALL_PROJECTS_FILTER_SLUG);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filters = useMemo<ProjectFilter[]>(
    () => [
      { slug: ALL_PROJECTS_FILTER_SLUG, nome: ALL_PROJECTS_FILTER },
      ...(categoria?.filter((filter) => filter.ativo).map((filter) => ({
        slug: filter.slug,
        nome: filter.nome,
      })) ?? []),
    ],
    [categoria],
  );
  const activeFilterLabel = filters.find((filter) => filter.slug === activeFilter)?.nome ?? ALL_PROJECTS_FILTER;
  const categoryNamesBySlug = useMemo(() => {
    return new Map(categoria?.map((filter) => [filter.slug, filter.nome]) ?? []);
  }, [categoria]);
  const categoriesByProjectSlug = useMemo(() => {
    const categoriesMap = new Map<string, ProjectFilter[]>();

    categoria?.forEach((category) => {
      const categoryProjects = Array.isArray(category.projeto) ? category.projeto : [];

      categoryProjects.forEach((project) => {
        const projectCategories = categoriesMap.get(project.slug) ?? [];

        categoriesMap.set(project.slug, [
          ...projectCategories,
          {
            slug: category.slug,
            nome: category.nome,
          },
        ]);
      });
    });

    return categoriesMap;
  }, [categoria]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_PROJECTS_FILTER_SLUG) {
      return projetos ?? [];
    }

    return (todosProjetos ?? []).filter(
      (project) => project.categorias_de_projetos.some((categoria) => categoria.slug === activeFilter)
        || project.categoriaPrincipal_connection?.nodes.some((categoria) => categoria.slug === activeFilter)
        || categoriesByProjectSlug.get(project.slug)?.some((categoria) => categoria.slug === activeFilter),
    );
  }, [activeFilter, categoriesByProjectSlug, projetos, todosProjetos]);

  return (
    <Section
      id="projects"
      eyebrow={projetoHeader?.etiqueta || ''}
      title={projetoHeader?.titulo || ''}
      description={projetoHeader?.descricao || ''}
      className="bg-slate-50"
    >

      {/* Categorias */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar projetos por categoria">
        {filters.map((filter) => {
          const isActive = filter.slug === activeFilter;

          return (
            <button
              key={filter.slug}
              type="button"
              onClick={() => setActiveFilter(filter.slug)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 ${
                isActive
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
              }`}
              aria-pressed={isActive}
            >
              {filter.nome}
            </button>
          );
        })}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => {
            const projectCategories = [
              ...project.categorias_de_projetos.map((category) => ({
                slug: category.slug,
                nome: categoryNamesBySlug.get(category.slug) ?? category.slug,
              })),
              ...(categoriesByProjectSlug.get(project.slug) ?? []),
            ].filter((category, index, categories) => (
              categories.findIndex((item) => item.slug === category.slug) === index
            ));

            return (
              <article
                key={project.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/8"
              >
                <ProjectPreview project={project} />

                <div className="p-6 sm:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {project.categoriaPrincipal_connection?.nodes[0] ? (
                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                        {project.categoriaPrincipal_connection.nodes[0].nome}
                      </span>
                    ) : null}
                    {projectCategories.map((category) => (
                      <span
                        key={category.slug}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {category.nome}
                      </span>
                    ))}
                  </div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{project.titulo}</h3>
                {project.resumo ? (
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.resumo}</p>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tecnologias.slice(0, 5).map((technology) => (
                    <TechBadge key={technology.id}>{technology.nome}</TechBadge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 active:translate-y-0"
                  >
                    {project.labelButton ?? "Ver detalhes"}
                  </button>
                  {project.urlDemo ? (
                    <a
                      href={project.urlDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-300 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                    >
                      <ExternalLink className="size-4" />
                      Demo
                    </a>
                  ) : null}
                  {project.urlCodigo ? (
                    <a
                      href={project.urlCodigo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                    >
                      <Github className="size-4" />
                      Código
                    </a>
                  ) : null}
                </div>
              </div>
              </article>
            );
          })}
        </div>
      ) : (
        <EmpetyStatus categoria={activeFilterLabel} />
      )}

      {activeFilter === ALL_PROJECTS_FILTER_SLUG && pagination ? (
        <Pagination
          currentPage={pagination.page}
          pageCount={pagination.pageCount}
          searchParamName="projectsPage"
        />
      ) : null}

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </Section>
  );
}
