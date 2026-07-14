'use client'
import { Mail, MapPin, Phone } from "lucide-react";
import {z} from 'zod'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const contactInfo = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactInfo = z.infer<typeof contactInfo>

export function Contact() {

  const { register, handleSubmit, formState:{errors, isSubmitting}} = useForm<ContactInfo>({
     resolver: zodResolver(contactInfo)
  })

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Contato</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tem um projeto em mente? Entre em contato comigo e
              vamos conversar sobre como posso ajudar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Email</p>
                    <a
                      href="mailto:contato@exemplo.com"
                      className="text-gray-900 hover:text-blue-600"
                    >
                      contato@exemplo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">
                      Telefone
                    </p>
                    <a
                      href="tel:+5511999999999"
                      className="text-gray-900 hover:text-blue-600"
                    >
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">
                      Localização
                    </p>
                    <p className="text-gray-900">
                      São Paulo, Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit(() => void (0))}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Sua mensagem..."
                  />
                  {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  disabled={isSubmitting}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}