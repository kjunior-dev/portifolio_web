import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Footer, Header } from "@/components/layout";
import { getConfSite } from "@/services/getConfSite";
import { getPageInicial } from "@/services/getPageInicial";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kevin Sousa | Desenvolvedor de Software Full Stack",
    template: "%s | Kevin Sousa",
  },
  description:
    "Portfólio profissional de Kevin Sousa, desenvolvedor de software com experiência em Next.js, React, TypeScript, Node.js, APIs REST, PostgreSQL, Tailwind CSS.",
  keywords: [
    "Kevin Sousa",
    "Desenvolvedor de Software",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "APIs REST",
  ],
  authors: [{ name: "Kevin Sousa" }],
  creator: "Kevin Sousa",
  openGraph: {
    title: "Kevin Sousa | Desenvolvedor de Software Full Stack",
    description:
      "Aplicações web, sistemas de gestão, APIs, dashboards e soluções digitais com foco em clareza, performance e experiência do utilizador.",
    type: "website",
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Sousa | Desenvolvedor de Software Full Stack",
    description:
      "Portfólio profissional com projetos, competências, serviços e contacto.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menu, paginaInicial] = await Promise.all([
    getConfSite().catch(() => null),
    getPageInicial().catch(() => null),
  ]);

  return (
    <html lang="pt" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="min-h-screen bg-white dark:bg-slate-950">
          <Header menu={menu} />
          {children}
          <Footer footer={paginaInicial?.footer} />
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
