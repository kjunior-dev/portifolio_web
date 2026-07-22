"use client";

import { useEffect, useState } from "react";
import { LuAward, LuClock3 } from "react-icons/lu";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CertificadoDetailsApi } from "@/types/certificado.interface";

type CertificateCarouselProps = {
  certificados: CertificadoDetailsApi[];
  certificadoSelecionadoId: number;
  onSelect: (certificado: CertificadoDetailsApi) => void;
};

export function CertificateCarousel({
  certificados,
  certificadoSelecionadoId,
  onSelect,
}: CertificateCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 4200);

    return () => window.clearInterval(timer);
  }, [api]);

  if (certificados.length <= 1) {
    return null;
  }

  return (
    <div className="mt-10 overflow-hidden">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
          Outros certificados
        </h2>
        <span className="text-sm text-slate-500 dark:text-slate-400">Clique para visualizar</span>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="relative"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-100 to-transparent dark:from-slate-900" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-100 to-transparent dark:from-slate-900" />

        <CarouselContent className="py-1">
          {certificados.map((certificado) => {
            const selecionado = certificado.id === certificadoSelecionadoId;

            return (
              <CarouselItem key={certificado.id} className="basis-72 sm:basis-80">
                <button
                  type="button"
                  onClick={() => onSelect(certificado)}
                  className={`h-full w-full cursor-grab rounded-lg border p-4 text-left ml-12 shadow-sm transition-all active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 ${
                    selecionado
                      ? "border-cyan-400 bg-cyan-50 dark:border-cyan-500 dark:bg-cyan-950/40"
                      : "border-slate-200 bg-white hover:border-cyan-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-800"
                  }`}
                  aria-pressed={selecionado}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-300">
                      <LuAward className="size-5" aria-hidden="true" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                      <LuClock3 className="size-3.5" aria-hidden="true" />
                      {certificado.cargaHoraria}
                    </span>
                  </div>

                  <h3 className="mt-4 line-clamp-2 min-h-14 text-base font-semibold text-slate-950 dark:text-white">
                    {certificado.titulo}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                    {certificado.entidadeFormadora}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {certificado.tecnologias.slice(0, 2).map((tecnologia) => (
                      <span
                        key={tecnologia.id}
                        className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
                      >
                        {tecnologia.nome}
                      </span>
                    ))}
                  </div>
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-2 z-20 border-slate-200 bg-white/90 text-slate-700 shadow-sm hover:bg-white dark:border-slate-700 dark:bg-slate-950/90 dark:text-slate-200" />
        <CarouselNext className="right-2 z-20 border-slate-200 bg-white/90 text-slate-700 shadow-sm hover:bg-white dark:border-slate-700 dark:bg-slate-950/90 dark:text-slate-200" />
      </Carousel>
    </div>
  );
}
