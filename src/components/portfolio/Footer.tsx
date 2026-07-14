import { Endereco } from './Endereco';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2025 Desenvolvedor Frontend. Todos os direitos reservados.
              </p>
            </div>

            <Endereco/>
          </div>
        </div>
      </div>
    </footer>
  );
}
