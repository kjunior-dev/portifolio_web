import gql from "graphql-tag";

export default gql`
query PageCertificado {
  pageCertificado {
    ativo
    documentId
    etiqueta
    titulo
    descricao
    certificadoDetails {
      id
      validate
      icon
      iconValidacao
      titulo
      entidadeFormadora
      cargaHoraria
      certificadoURL {
        name
        url
      }
      cards {
        ativo
        id
        ordem
        icone
        titulo
        descricao
      }
      tecnologias {
        id
        ordem
        ativo
        nome
      }
    }
  }
}
`