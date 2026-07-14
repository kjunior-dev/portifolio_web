import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';

export default function Home() {
  return (
      <div className="min-h-screen bg-white">
             <Header />
        <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
        </main>
        <Footer />
      </div>
  );
}
