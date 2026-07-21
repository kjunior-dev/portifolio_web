import {HeroTemplate} from "@/components/template/HeroTemplate/HeroTemplate";
import {AboutTemplate} from "@/components/template/SobreMimTemplate/AboutTemplate";
import {SkillsTemplate} from "@/components/template/SkillsTemplate/SkillsTemplate";
import {ExperienceTemplate} from "@/components/template/ExperienciaTemplate/ExperienceTemplate";
import {ProjectsTemplate} from "@/components/template/ProjectoTemplate/ProjectsTemplate";
import {ServicesTemplate} from "@/components/template/ServicoTemplate/ServicesTemplate";
import {EducationTemplate} from "@/components/template/EducationTemplate/EducationTemplate";
import {ContactTemplate} from "@/components/template/ContactoTemplate/ContactTemplate";
import {Footer, Header} from "@/components/layout";
import {getPageInicial} from "@/services/getPageInicial";
import {getCategorial} from "@/services/getCategoria";
import {getProjetos} from "@/services/getProjetos";
import {getConfSite} from "@/services/getConfSite";

type HomeProps = {
    searchParams?: Promise<{
        projectsPage?: string | string[];
    }>;
};

export default async function Home({searchParams}: HomeProps) {
    const params = await searchParams;
    const projectsPageParam = Array.isArray(params?.projectsPage)
        ? params?.projectsPage[0]
        : params?.projectsPage;
    const projectsPage = Number(projectsPageParam) > 0 ? Number(projectsPageParam) : 1;

    const [ data, categoria, projetos, todosProjetos, menu ] = await Promise.all([
        getPageInicial().catch(() => null),
        getCategorial().catch(() => null),
        getProjetos({page: projectsPage}).catch(() => null),
        getProjetos({pageSize: 100}).catch(() => null),
        getConfSite().catch(() => null),
    ])

      return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
          <Header menu={menu}/>
          <main>
                <HeroTemplate hero={data?.hero}/>
              { data?.sobreMim?.ativo && (<AboutTemplate about={data?.sobreMim}/>)}
              { data?.competenciasTecnicas?.ativo && (<SkillsTemplate compTecnica={data?.competenciasTecnicas}/>)}
              { data?.experienciaProfissional?.ativo && (<ExperienceTemplate expProf={data?.experienciaProfissional}/>)}
              { data?.projetos?.ativo && (
                  <ProjectsTemplate
                      projetoHeader={data?.projetos}
                      categoria={categoria}
                      projetos={projetos?.projetos}
                      todosProjetos={todosProjetos?.projetos}
                      pagination={projetos?.pagination}
                  />
              )}
              { data?.servicos?.ativo && (<ServicesTemplate servicos={data?.servicos}/>)}
              { data?.formacaoCertificacoes?.ativo && (<EducationTemplate formacao={data?.formacaoCertificacoes}/>)}
              { data?.formacaoCertificacoes?.ativo && ( <ContactTemplate contato={data?.contacto}/>)}
          </main>
          <Footer footer={data?.footer}/>
        </div>
      );
}
