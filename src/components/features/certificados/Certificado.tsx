"use client";

import { useState } from "react";
import { CertificateCarousel } from "@/components/features/certificados/components/CertificateCarousel";
import { CertificateDetails } from "@/components/features/certificados/components/CertificateDetails";
import { CertificatePreview } from "@/components/features/certificados/components/CertificatePreview";
import {PageCertificadoApi} from "@/types/certificado.interface";

type CertificadoProps = {
  data: PageCertificadoApi | null | undefined
};

export function Certificado({ data }: CertificadoProps) {
  const certificados = data?.certificadoDetails ?? [];
  const [certificadoSelecionado, setCertificadoSelecionado] = useState(certificados[0]);

  if (!certificadoSelecionado) {
    return null;
  }

  return (
    <section className="bg-slate-100 pt-28 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            Rocketseat
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Certificados de cursos
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            Uma seleção dos cursos e formações concluídos na Rocketseat, com foco em desenvolvimento web,
            front-end, back-end e entrega de aplicações modernas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] lg:items-stretch">
          <CertificatePreview certificado={certificadoSelecionado} />
          <CertificateDetails certificado={certificadoSelecionado} />
        </div>

        <CertificateCarousel
          certificados={certificados}
          certificadoSelecionadoId={certificadoSelecionado.id}
          onSelect={setCertificadoSelecionado}
        />
      </div>
    </section>
  );
}
