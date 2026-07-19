import { RedeSocialApi } from "@/types/paginaInicial.interface";
import {getSocialIcon} from "@/lib/social-icons";

interface ISocialLinks {
    redesSociais?: RedeSocialApi[];
}

export function SocialLinks({
    redesSociais,
}: ISocialLinks) {
    if (!redesSociais?.length) {
        return null;
    }

    return (
        <div className="mt-8 flex flex-wrap items-center gap-3">
            {redesSociais.map((link) => {

                const Icon = getSocialIcon(link?.icon || "");
                const isExternalLink = link.url.startsWith("http");

                if (!Icon) {
                    console.warn(`Ícone não encontrado: ${link.icon}`);
                    return null;
                }

                return (
                    <a
                        key={link.id ?? link.url}
                        href={link.url}
                        target={
                            link.novaAba || isExternalLink
                                ? "_blank"
                                : undefined
                        }
                        rel={
                            link.novaAba || isExternalLink
                                ? "noopener noreferrer"
                                : undefined
                        }
                        className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                        aria-label={
                            link.labelAcessibilidade || link.nome
                        }
                    >
                        <Icon
                            className="size-5"
                            aria-hidden="true"
                        />
                    </a>
                );
            })}
        </div>
    );
}