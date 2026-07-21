import { LuSearchX as SearchX } from "react-icons/lu";

type EmpetyStatusProps = {
    categoria: string;
};

export function EmpetyStatus({ categoria }: EmpetyStatusProps) {
    return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-950">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300">
                <SearchX className="size-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Nenhum projeto encontrado
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                Ainda não há projetos cadastrados para a categoria &quot;{categoria}&quot;.
            </p>
        </div>
    );
}
