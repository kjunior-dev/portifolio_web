import Image from "next/image";
import {HeroApi} from "@/types/paginaInicial.interface";
import {getSocialIcon} from "@/lib/social-icons";

interface IAvatarProfile{
    hero: HeroApi | null | undefined
}

export function AvatarProfile({
    hero
}: IAvatarProfile){
    const profileImageUrl = hero?.fotoPerfil?.formats?.small?.url;
    const profileImageSrc = profileImageUrl?.startsWith("/uploads/") ? `/api${profileImageUrl}` : profileImageUrl;

    const Icon = getSocialIcon(hero?.iconn || "")

    return(
        <div className="flex items-center gap-4">
            {profileImageSrc && (
                <Image
                    src={profileImageSrc || '/foto-perfil.png'}
                    width={96}
                    height={96}
                    priority
                    alt="Retrato profissional de Kevin Sousa"
                    className="size-20 rounded-2xl object-cover ring-4 ring-white/10 sm:size-24"
                />
            )}

            <div className="min-w-0">
                <p className="text-lg font-semibold text-white">{hero?.nome}</p>
                <p className="mt-1 text-sm text-slate-300">
                    {hero?.cargo}
                </p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-200">
                    {
                        Icon && (
                            <Icon
                                className="size-4"
                                aria-hidden="true"
                            />
                        )
                    }
                    {hero?.localizacao}
                </p>
            </div>
        </div>
    )
}
