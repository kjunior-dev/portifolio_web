import { Code, Palette, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code,
      title: 'Código Limpo',
      description: 'Escrevo código mantível e escalável seguindo as melhores práticas da indústria.',
    },
    {
      icon: Palette,
      title: 'Design Responsivo',
      description: 'Crio interfaces que funcionam perfeitamente em todos os dispositivos e tamanhos de tela.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimizo cada aplicação para garantir carregamento rápido e experiência fluida.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Sobre Mim</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sou um desenvolvedor frontend apaixonado por criar experiências digitais que fazem diferença. 
              Com experiência em tecnologias modernas, transformo designs em código funcional e elegante.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
