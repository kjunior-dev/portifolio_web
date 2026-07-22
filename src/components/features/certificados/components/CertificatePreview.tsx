import {CertificadoDetailsApi} from "@/types/certificado.interface";

type CertificatePreviewProps = {
  certificado: CertificadoDetailsApi | undefined
};

function getPdfPreviewUrl(url: string) {
  const [baseUrl] = url.split("#");

  return `${baseUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`;
}

export function CertificatePreview({ certificado }: CertificatePreviewProps) {
  const certificadoUrl = certificado?.certificadoURL?.url?.trim();
  const previewUrl = certificadoUrl ? getPdfPreviewUrl(certificadoUrl) : "";
  const certificadoNome = certificado?.certificadoURL?.name ?? certificado?.titulo ?? "Certificado";

  return (
    <div className="relative aspect-[1.414/1] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-950/10
    dark:border-slate-800 dark:bg-slate-950"
    >
      {certificadoUrl ? (
        <iframe
          src={previewUrl}
          title={`Preview do certificado ${certificadoNome}`}
          className="certificado-preview-frame h-full w-full bg-white"
          loading="lazy"
        />
      ) : (
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden p-6 text-center">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100" />
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100" />
          </div>
          <p className="relative text-sm font-semibold text-slate-600 dark:text-slate-300">
            Preview do certificado indisponível.
          </p>
        </div>
      )}
    </div>
  );
}
