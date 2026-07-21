import {FooterApi} from "@/types/paginaInicial.interface";
import {getSocialIcon} from "@/lib/social-icons";

export interface IFooter{
  footer: FooterApi | null | undefined
}
export function Footer({
    footer
}:IFooter) {

  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-950 dark:text-white">{footer?.nome}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{footer?.cargo}</p>
          </div>
          {
            footer?.mostrarMenu && (
                  <div className="flex flex-wrap gap-2">
                    {footer?.menuPrincipal.map((item) => (
                        <a
                            key={item.url}
                            href={item.url}
                            className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                          {item.texto}
                        </a>
                    ))}
                  </div>
              )
          }
        </div>

        <div className="flex flex-col gap-5 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {footer?.textoDireitos}
          </p>
          {
            footer?.mostrarRedesSociais && (
                  <div className="flex gap-3">
                    {footer?.redesSocial.map((link) => {
                      const Icon = getSocialIcon(link.icon || "")

                      return(
                          <a
                              key={link.url}
                              href={link.url}
                              target={link.url.startsWith("http") ? "_blank" : undefined}
                              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="inline-flex size-7 items-center justify-center rounded-full text-slate-600 transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-700 dark:hover:bg-cyan-950/40 dark:hover:text-cyan-300"
                              aria-label={link.nome}
                          >
                            {
                              Icon && (
                                  <Icon size="size-5" aria-hidden="true"/>
                                )
                            }
                          </a>
                      )
                    })}
                  </div>
              )
          }
        </div>
      </div>
    </footer>
  );
}
