"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LuCircleCheck as CheckCircle2, LuMail as Mail, LuSend as Send } from "react-icons/lu";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Section } from "@/components/shared/Section";
import {IContatoProps} from "@/components/template/ContactoTemplate/ContactTemplate";
import {getSocialIcon} from "@/lib/social-icons";
import {toast} from "sonner";
import {BiLoader} from "react-icons/bi";

const contactSchema = z.object({
  name: z.string().trim().min(3, "Indique um nome com pelo menos 3 caracteres."),
  email: z.string().trim().email("Indique um email válido."),
  subject: z.string().trim().min(4, "Indique um assunto com pelo menos 4 caracteres."),
  message: z.string().trim().min(20, "A mensagem deve ter pelo menos 20 caracteres."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function Contact({
   contato
}: IContatoProps){

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

  const onSubmit = async (data: ContactFormData) => {
    try{
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok){
        toast.error(result?.error || "Não foi possível enviar a mensagem.");
        return;
      }

      setStatus("success");
      reset();
      toast.success("Mensagem enviada com sucesso.");
      setTimeout(() => setStatus("idle"), 6000);
    }catch (e) {
      console.error(e)
      toast.error("Não foi possível enviar a mensagem.");
    }
  };

  return (
    <Section
      id="contato"
      eyebrow={contato?.etiqueta || ""}
      title={contato?.titulo || ""}
      description={contato?.descricao || ""}
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
          <h3 className="text-2xl font-semibold tracking-tight">{contato?.tituloContactoDireto || ""}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {contato?.descricaoContactoDireto || ""}
          </p>

          <div className="mt-8 space-y-5">
            {
              contato?.informacoes.map(item => {
                return(
                    <a
                        key={item.id}
                        href={item.link || ""}
                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      <Mail className="mt-1 size-5 text-cyan-300" aria-hidden="true" />
                      <span>
                        <span className="block text-sm font-semibold">{item?.titulo}</span>
                        <span className="mt-1 block break-all text-sm text-slate-300">{item?.valor}</span>
                      </span>
                    </a>
                )
              })
            }
          </div>

          <div className="mt-8 flex gap-3">
            {contato?.redesSocial.map((link) => {
              const Icon = getSocialIcon(link?.icon || "")
              return(
                  <a
                      key={link.url}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex size-11 justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:bg-white/[0.1] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      aria-label={link.nome}
                  >
                    {
                        Icon && (
                            <div className="mb-5 size-12 flex justify-center items-center rounded-2xl text-cyan-700">
                              <Icon
                                  className="size-5"
                                  aria-hidden="true"
                              />
                            </div>
                        )
                    }
                  </a>
              )
            })}
          </div>
        </aside>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
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
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <p>A sua mensagem foi enviada. Entrarei em contacto assim que possível.</p>
            </div>
          ) : null}


              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full cursor-pointer bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:shadow-black/30 dark:hover:bg-cyan-200 sm:w-auto"
              >
                {isSubmitting ? <BiLoader className="size-4 animate-spin" /> : <Send className="size-4" />}
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
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
      <label htmlFor={fieldId} className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
        {label}
      </label>
      {children}
      {error ? <p className="mt-2 text-sm font-medium text-red-600">{error}</p> : null}
    </div>
  );
}
