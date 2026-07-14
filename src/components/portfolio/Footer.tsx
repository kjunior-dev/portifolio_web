import { navigation, profile, socialLinks } from "./portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-950">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-500">{profile.role}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                aria-label={link.label}
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
