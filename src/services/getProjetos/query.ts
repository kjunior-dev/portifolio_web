import gql from "graphql-tag";

export default gql`
query Projetos_connection($pagination: PaginationArg) {
  projetos_connection(pagination: $pagination) {
    pageInfo {
      page
      pageSize
      pageCount
      total
    }
    nodes {
      ordem
      slug
      titulo
      resumo
      imagem {
        formats
      }
      categorias_de_projetos {
        slug
      }
      categoriaPrincipal_connection {
        nodes {
          slug
          nome
          ordem
        }
      }
      tecnologias {
        id
        ativo
        nome
        ordem
      }
      problemaResolvido
      funcionalidades {
        id
        ativo
        ordem
        texto
      }
      minhaParticipacao
      urlCodigo
      urlDemo
      destaque
      labelButton
    }
  }
}
`;
