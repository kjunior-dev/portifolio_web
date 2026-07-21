"use client";

import { LuDownload as Download, LuMenu as Menu, LuX as X } from "react-icons/lu";
import { useState } from "react";
import { ConfiguracoesDoSiteApi } from "@/types/confSite";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export interface IHeader{
  menu: ConfiguracoesDoSiteApi | null | undefined
}
export function Header({
    menu
}: IHeader) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const curriculoUrl = menu?.curriculo ?? "";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <a
          href="#hero"
          onClick={closeMenu}
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
          aria-label="Ir para o início"
        >
          <span className="grid size-10 place-items-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-sm transition-transform group-hover:-translate-y-0.5">
            KS
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-slate-950 dark:text-white">{'Kevin Sousa'}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">Software Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {menu?.menuPrincipal.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.texto}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={curriculoUrl}
            target={'_blank'}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            <Download className="size-4" />
            CV
          </a>
          <a
            href="#contato"
            className="inline-flex h-10 items-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 active:translate-y-0 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
          >
            Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {menu?.menuPrincipal.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.texto}
              </a>
            ))}
            <div className="mt-2 flex justify-end">
              <ThemeToggle />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a
                href={curriculoUrl}
                target="_blank"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:border-slate-700 dark:text-slate-200"
              >
                <Download className="size-4" />
                CV
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 dark:bg-white dark:text-slate-950"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
