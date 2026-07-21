import {IAboutProps} from "@/components/template/SobreMimTemplate/AboutTemplate";

export function AboutProfile({
 about
}: IAboutProps) {
    return(
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                {about?.conteudo}
            </p>
        </div>
    )
}
