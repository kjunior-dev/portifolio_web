import gql from "graphql-tag";

export default gql`
query CategoriasDeProjetos {
  categoriasDeProjetos(pagination: { pageSize: 100 }) {
    ativo
    slug
    nome
    ordem
    projeto {
      slug
    }
  }
}
`
