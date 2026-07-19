import { Project } from "@/components/features/projecto/Projects";
import Image from "next/image";

const accents = [
    "from-cyan-500 to-emerald-500",
    "from-blue-500 to-violet-500",
    "from-slate-700 to-cyan-600",
    "from-amber-500 to-red-500",
];

export function ProjectPreview({ project }: { project: Project }) {
    const accent = accents[project.ordem % accents.length];
    const imageUrl = project.imagem?.formats?.medium?.url
        ?? project.imagem?.formats?.small?.url
        ?? project.imagem?.formats?.large?.url
        ?? project.imagem?.formats?.thumbnail?.url;
    const imageSrc = imageUrl?.startsWith("/uploads/")
        ? `/api${imageUrl}`
        : imageUrl;

    return (
        <div className={`relative aspect-[2/1] overflow-hidden bg-gradient-to-br ${accent}`}>
            {imageSrc ? (
                <Image
                    src={imageSrc}
                    alt={`Imagem do projeto ${project.titulo}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                />
            ) : (
                <div className="flex h-full items-center justify-center px-6 text-center">
                    <span className="text-sm font-semibold text-white/90">{project.titulo}</span>
                </div>
            )}
        </div>
    );
}
