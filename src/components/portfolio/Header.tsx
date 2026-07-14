'use client'
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Code2 size={28} />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}