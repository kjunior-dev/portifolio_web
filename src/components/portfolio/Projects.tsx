import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados em tempo real com gráficos e métricas customizáveis.',
      image: 'https://images.unsplash.com/photo-1634807010323-4309f645e5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwMDE2MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Recharts'],
      github: 'https://github.com',
      demo: 'https://exemplo.com',
    },
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com carrinho de compras, checkout e integração de pagamento.',
      image: 'https://images.unsplash.com/photo-1758598497143-84a0cfdc9958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NTk5ODkzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Next.js', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://exemplo.com',
    },
    {
      title: 'Mobile App Design',
      description: 'Aplicação mobile-first com design responsivo e animações suaves para melhor experiência do usuário.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5OTQzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'JavaScript', 'CSS'],
      github: 'https://github.com',
      demo: 'https://exemplo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Projetos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente. Cada um representa um desafio único e aprendizados valiosos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
