import gql from "graphql-tag";

export default gql`
    query ConfiguracoesDoSite {
      configuracoesDoSite {
        documentId
        curriculo
        menuPrincipal {
          id
          ativo
          ordem
          texto
          url
        }
      }
    }
`