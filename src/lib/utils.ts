import {ContactFormData} from "@/components/features/contacto/Contact";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
