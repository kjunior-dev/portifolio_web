"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profile, socialLinks } from "./portfolio-data";
import { Section } from "./Section";

const contactSchema = z.object({
  name: z.string().trim().min(3, "Indique um nome com pelo menos 3 caracteres."),
  email: z.string().trim().email("Indique um email válido."),
  subject: z.string().trim().min(4, "Indique um assunto com pelo menos 4 caracteres."),
  message: z.string().trim().min(20, "A mensagem deve ter pelo menos 20 caracteres."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const body = encodeURIComponent(
      `Nome: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    );
    const subject = encodeURIComponent(data.subject);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contacto"
      title="Vamos falar sobre o seu próximo projeto."
      description="Envie uma mensagem com o contexto do projeto, objetivo ou problema técnico. Respondo com uma análise clara dos próximos passos."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
          <h3 className="text-2xl font-semibold tracking-tight">Contacto direto</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Disponível para desenvolvimento web, integração de APIs, dashboards,
            sistemas de gestão, consultoria técnica e projetos ligados a tecnologia automóvel.
          </p>

          <div className="mt-8 space-y-5">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Mail className="mt-1 size-5 text-cyan-300" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold">Email</span>
                <span className="mt-1 block break-all text-sm text-slate-300">{profile.email}</span>
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <MapPin className="mt-1 size-5 text-cyan-300" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold">Localização</span>
                <span className="mt-1 block text-sm text-slate-300">{profile.location}</span>
              </span>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:bg-white/[0.1] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                aria-label={link.label}
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </aside>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Nome" error={errors.name?.message}>
              <input
                id="name"
                type="text"
                autoComplete="name"
                {...register("name")}
                className="field"
                placeholder="O seu nome"
                aria-invalid={Boolean(errors.name)}
              />
            </FormField>
            <FormField label="Email" error={errors.email?.message}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className="field"
                placeholder="nome@email.com"
                aria-invalid={Boolean(errors.email)}
              />
            </FormField>
          </div>

          <div className="mt-5">
            <FormField label="Assunto" error={errors.subject?.message}>
              <input
                id="subject"
                type="text"
                {...register("subject")}
                className="field"
                placeholder="Ex.: Desenvolvimento de dashboard"
                aria-invalid={Boolean(errors.subject)}
              />
            </FormField>
          </div>

          <div className="mt-5">
            <FormField label="Mensagem" error={errors.message?.message}>
              <textarea
                id="message"
                rows={6}
                {...register("message")}
                className="field resize-none"
                placeholder="Conte-me o contexto, objetivo e prazo aproximado."
                aria-invalid={Boolean(errors.message)}
              />
            </FormField>
          </div>

          {status === "success" ? (
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <p>A mensagem foi preparada no seu cliente de email. Confirme o envio para concluir.</p>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            <Send className="size-4" />
            Enviar mensagem
          </button>
        </form>
      </div>
    </Section>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactElement<{ id?: string }>;
}) {
  const fieldId = children.props.id;

  return (
    <div>
      <label htmlFor={fieldId} className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      {children}
      {error ? <p className="mt-2 text-sm font-medium text-red-600">{error}</p> : null}
    </div>
  );
}
