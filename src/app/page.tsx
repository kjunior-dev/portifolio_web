import {HeroTemplate} from "@/components/template/HeroTemplate/HeroTemplate";
import {AboutTemplate} from "@/components/template/SobreMimTemplate/AboutTemplate";
import {SkillsTemplate} from "@/components/template/SkillsTemplate/SkillsTemplate";
import {ExperienceTemplate} from "@/components/template/ExperienciaTemplate/ExperienceTemplate";
import {ProjectsTemplate} from "@/components/template/ProjectoTemplate/ProjectsTemplate";
import {ServicesTemplate} from "@/components/template/ServicoTemplate/ServicesTemplate";
import {EducationTemplate} from "@/components/template/EducationTemplate/EducationTemplate";
import {ContactTemplate} from "@/components/template/ContactoTemplate/ContactTemplate";
import {Footer, Header} from "@/components/layout";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroTemplate/>
        <AboutTemplate/>
        <SkillsTemplate/>
        <ExperienceTemplate/>
        <ProjectsTemplate/>
        <ServicesTemplate/>
        <EducationTemplate/>
        <ContactTemplate/>
      </main>
      <Footer />
    </div>
  );
}
