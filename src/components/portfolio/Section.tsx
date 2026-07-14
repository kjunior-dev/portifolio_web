import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "bg-white",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl sm:mb-14">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-cyan-200 hover:bg-cyan-50">
      {children}
    </span>
  );
}
