import gql from "graphql-tag";

export default gql`
    query ConfiguracoesDoSite {
      configuracoesDoSite {
        documentId
        curriculo {
          formats
        }
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