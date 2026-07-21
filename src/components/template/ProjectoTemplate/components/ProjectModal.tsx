import {LuX as X} from "react-icons/lu";
import {TechBadge} from "@/components/shared";
import {Project} from "@/components/features/projecto/Projects";

export function ProjectModal({
     project,
     onClose
}: {
    project: Project;
    onClose: () => void })
{
    const category = project.categoriaPrincipal_connection?.nodes[0]?.nome ?? "Projeto";

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
                className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl dark:bg-slate-950 sm:rounded-3xl sm:p-8"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{category}</p>
                        <h3 id="project-modal-title" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                            {project.titulo}
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        aria-label="Fechar detalhes do projeto"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <div className="mt-6 grid gap-6">
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                            Problema resolvido
                        </h4>
                        <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">{project.problemaResolvido}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                            Funcionalidades
                        </h4>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {project.funcionalidades.map((feature) => (
                                <li key={feature.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                                    {feature.texto}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                            Minha participação
                        </h4>
                        <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">{project.minhaParticipacao}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.tecnologias.map((technology) => (
                            <TechBadge key={technology.id}>{technology.nome}</TechBadge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
