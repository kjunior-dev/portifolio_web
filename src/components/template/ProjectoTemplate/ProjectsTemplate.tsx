import { Projects } from "@/components/features/projecto/Projects";
import {ProjetosSecaoApi} from "@/types/paginaInicial.interface";
import {CategoriaDeProjetoApi} from "@/types/categoriaTipo.interface";
import {Projeto, ProjetosPagination} from "@/types/projetos.interface";

export interface IProjetoProps{
    projetoHeader: ProjetosSecaoApi | null | undefined
    categoria: CategoriaDeProjetoApi[] | null | undefined
    projetos: Projeto[] | null | undefined
    todosProjetos: Projeto[] | null | undefined
    pagination: ProjetosPagination | null | undefined
}
export function ProjectsTemplate({
    projetoHeader,
    categoria,
    projetos,
    todosProjetos,
    pagination
}: IProjetoProps){
  return(
      <>
        <Projects
            projetoHeader={projetoHeader}
            categoria={categoria}
            projetos={projetos}
            todosProjetos={todosProjetos}
            pagination={pagination}
        />
      </>
  )
}
