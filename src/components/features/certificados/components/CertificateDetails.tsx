import type { IconType } from "react-icons";
import {CertificadoDetailsApi} from "@/types/certificado.interface";
import {getSocialIcon} from "@/lib/social-icons";

type CertificateDetailsProps = {
    certificado: CertificadoDetailsApi | undefined
};

type DetailItemProps = {
  icon:  IconType | null;
  label: string;
  value: string;
};

function DetailItem({ icon: Icon, label, value }: DetailItemProps) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-300">
        {
            Icon && (
                <Icon className="size-5" aria-hidden="true" />
            )
        }
      </span>
      <span>
        <span className="block text-sm text-slate-400">{label}</span>
        <span className="mt-1 block break-words text-base font-medium text-slate-100">{value}</span>
      </span>
    </li>
  );
}

export function CertificateDetails({ certificado }: CertificateDetailsProps) {
    const Icon = getSocialIcon(certificado?.iconValidacao || "")
  return (
    <aside className="rounded-lg border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 lg:p-8">
        {
            certificado?.validate && (
                <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/15 px-3 py-1.5 text-xs font-bold uppercase text-emerald-300">
                    { Icon && (<Icon className="size-4" aria-hidden="true" />) }
                    Certificado válido
                </div>
            )
        }

      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {certificado?.titulo}
      </h1>

      <ul className="mt-8 space-y-6">
          {
              certificado?.cards?.map(item => {
                  const Icon = getSocialIcon(item?.icone || "")
                  return(
                      <DetailItem key={item?.id} icon={Icon} label={item?.titulo} value={item?.descricao} />
                  )
              })
          }

      </ul>
    </aside>
  );
}
