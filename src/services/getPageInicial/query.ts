import gql from "graphql-tag";

export default gql`
   query PaginaInicial {
  paginaInicial {
    documentId
    hero {
      id
      textoDisponibilidade
      subtitulo
      titulo
      descricao
      disponivel
      fotoPerfil {
        formats
      }
      nome
      cargo
      localizacao
      iconn
      objetivo
      competencias {
        titulo
        ordem
        icon
        descricao
      }
      curriculo {
        formats
      }
      acoes {
        texto
        tipoDestino
        variante
        novaAba
        ordem
        icone
        url
        ativo
      }
      redesSociais {
        nome
        url
        ordem
        novaAba
        labelAcessibilidade
        icon
      }
    }
    sobreMim {
      id
      ativo
      etiqueta
      titulo
      introducao
      conteudo
      destaque {
        id
        icone
        titulo
        ativo
        descricao
      }
    }
    competenciasTecnicas {
      id
      ativo
      etiqueta
      titulo
      descricao
      categorias {
        id
        ativo
        icon
        ordem
        titulo
        tecnologias {
          id
          ativo
          nome
          ordem
        }
      }
    }
    experienciaProfissional {
      id
      ativo
      etiqueta
      titulo
      descricao
      experiencias {
        id
        ativo
        area
        cargo
        tipoExperiencia
        descricao
        empresa
        localizacao
        dataInicio
        dataFim
        atual
        responsabilidades {
          id
          ordem
          texto
        }
        tecnologias {
          id
          ativo
          ordem
          nome
        }
        ordem
      }
    }
    projetos {
      id
      ativo
      etiqueta
      titulo
      descricao
      mostrarFiltros
      quantidadeInicial
    }
    servicos {
      id
      ativo
      etiqueta
      titulo
      descricao
      cards {
        id
        ativo
        ordem
        icone
        titulo
        descricao
      }
    }
    formacaoCertificacoes {
      id
      ativo
      etiqueta
      titulo
      descricao
      cards {
        id
        ativo
        icone
        ordem
        titulo
        descricao
      }
    }
    contacto {
      id
      ativo
      etiqueta
      titulo
      descricao
      tituloContactoDireto
      descricaoContactoDireto
      informacoes {
        id
        link
        ordem
        icone
        titulo
        valor
      }
      redesSocial {
        id
        icon
        ordem
        nome
        url
        novaAba
        labelAcessibilidade
      }
    }
       footer {
          cargo
          mostrarMenu
          mostrarRedesSociais
          nome
          textoDireitos
      }
  }
}
`