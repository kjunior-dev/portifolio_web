'use client'
import { Github, Linkedin, Mail } from "lucide-react";
import Image from 'next/image'
import {Endereco} from "@/components/portfolio/Endereco";

const img = "https://media.licdn.com/dms/image/v2/D4E03AQEOmtW6ntKzSQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719310170802?e=1762992000&v=beta&t=xZTujuHFJ4ON5WDxSz6G-CESenKL790P3rdYYmyI-Lw"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex flex-col justify-center items-center">
            <Image
              src={img}
              width={200}
              height={80}
              priority
              alt=""
              className='rounded-full'
            />
            <span className="text-blue-600 mt-3">
              Olá, eu sou Kevin Sousa
            </span>
          </div>

          <h1 className="text-gray-900 mb-6">
            Desenvolvedor Frontend
          </h1>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Crio experiências web modernas, responsivas e
            intuitivas com foco em performance e usabilidade.
            Especializado em React, TypeScript e design de
            interfaces.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Entrar em Contato
            </button>
          </div>

          <Endereco/>
        </div>
      </div>
    </section>
  );
}