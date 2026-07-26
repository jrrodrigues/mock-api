'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "trabalhadores".
 *
 * Gerado automaticamente por scripts/generate.js a partir de swagger/swagger.json
 * (NÃO EDITE À MÃO — rode `npm run generate` novamente após alterar o swagger.json).
 *
 * Cada export é o objeto `meta` consumido por createMockHandler() em
 * src/lib/mock-handler.js, contendo:
 *   - request.body / request.query  -> exemplo de Request conforme o swagger
 *   - responses[status].body        -> exemplo de Response conforme o swagger
 */

/**
 * @route POST /trabalhadores/autorizar-consulta-dados-trabalhador
 * @summary Autorização de Consulta de Dados do Trabalhadores
 * Serviço de Autorização para Consulta de Dados do Trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Autorização Criada
 * @returns {412} Requisição dados inválidos
 */
module.exports.autorizarConsulta = {
  "method": "post",
  "path": "/trabalhadores/autorizar-consulta-dados-trabalhador",
  "operationId": "autorizarConsulta_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 999,
      "cpf": 87070728050,
      "tipoDocumentoIdentificacao": 3,
      "documentoIdentificacao": "mock-documentoIdentificacao",
      "termoAutorizacaoTrabalhador": "mock-termoAutorizacaoTrabalhador",
      "chaveIdentificadora": "mock-chaveIdentificadora",
      "nsuAutorizacaoDigital": 0,
      "dataHoraAutorizacaoDigital": "30122024100000",
      "canalAutorizacaoDigital": 0,
      "possuiAssinaturaRogo": true,
      "tituloTermo": "mock-tituloTermo",
      "autorTermo": "mock-autorTermo",
      "cidadeAssinaturaTermo": "mock-cidadeAssinaturaTermo",
      "dataHoraCriacaoTermo": "30122024100000"
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Autorização Criada",
      "binary": false,
      "body": {
        "dataValidadeAutorizacao": "2026-07-26",
        "tokenAutorizacao": "mock-tokenAutorizacao"
      }
    },
    "412": {
      "description": "Requisição dados inválidos",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ]
      }
    }
  },
  "defaultStatus": 200
};

/**
 * @route GET /trabalhadores/listar-autorizados-trabalhador
 * @summary Consulta de Lista de Vínculos Autorizados
 * Serviço de Consulta da Lista de Vínculos Autorizados
 * @param {integer} [cpf] - (query, obrigatório)
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.listarVinculosPorCpf = {
  "method": "get",
  "path": "/trabalhadores/listar-autorizados-trabalhador",
  "operationId": "listarVinculosPorCpf_1",
  "request": {
    "query": {
      "cpf": 0,
      "codigoSolicitante": 0
    },
    "requiredQuery": [
      "cpf",
      "codigoSolicitante"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "vinculos": [
          {
            "cpf": 0,
            "matricula": "mock-matricula",
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "elegivel": true,
            "motivoInelegibilidade": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "bloqueadoEmprestimo": true
          }
        ]
      }
    },
    "412": {
      "description": "Retorno com erros",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ]
      }
    }
  },
  "defaultStatus": 200
};

/**
 * @route GET /trabalhadores/consultar-vinculos-novos-trabalhador
 * @summary Consulta de vínculos novos de CPFs com empréstimos encerrados por término de vínculo.
 * Serviço de Consulta de vínculos novos de CPFs com empréstimos encerrados por término de vínculo. Serviço paginado, com pagina inicial = 1. Consulta pela Data de Atualização do Empréstimo.
 * @param {integer} [codigoSolicitante] - (query, opcional)
 * @param {string} [dataHoraInicio] - (query, opcional)
 * @param {string} [dataHoraFim] - (query, opcional)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.consultarTrabalhadoresComEmprestimosEncerradosPorDesligamento = {
  "method": "get",
  "path": "/trabalhadores/consultar-vinculos-novos-trabalhador",
  "operationId": "consultarTrabalhadoresComEmprestimosEncerradosPorDesligamento_1",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "dataHoraInicio": "",
      "dataHoraFim": "",
      "nroPagina": 1
    },
    "requiredQuery": [],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "nroPaginaAtual": 1,
        "nroTotalPaginas": 3,
        "nroTotalRegistros": 105,
        "qtdRegistrosPorPagina": 50,
        "qtdRegistrosPaginaAtual": 50,
        "dataHoraInicio": "2026-07-26T10:00:00-03:00",
        "dataHoraFim": "2026-07-26T10:00:00-03:00",
        "conteudo": [
          {
            "cpf": 12345678911,
            "matricula": "mock-matricula",
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "cnpjEmpregadorCompleto": true,
            "nome": "mock-nome",
            "nomeEmpregador": "mock-nomeEmpregador",
            "codigoCategoriaTrabalhador": 0,
            "elegivel": true,
            "motivoInelegibilidade": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "valorTotalVencimentos": 0,
            "valorBaseMargem": 0,
            "valorMargemDisponivel": 0,
            "dataAdmissao": "2026-07-26",
            "pessoaExpostaPoliticamente": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "qtdEmprestimos": 0
          }
        ]
      }
    },
    "412": {
      "description": "Retorno com erros",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ]
      }
    }
  },
  "defaultStatus": 200
};

/**
 * @route GET /trabalhadores/consultar-saldo-retido-fgts
 * @summary Consulta de Saldo Retido FGTS
 * Consulta o saldo retido (bloqueado) de um pedido de bloqueio FGTS do trabalhador.
 * @param {string} [contrato] - (query, obrigatório)
 * @param {integer} [codigoSolicitante] - (query, obrigatório) Código do Solicitante (CBC)
 * @param {integer} [cpf] - (query, obrigatório) CPF do Trabalhador
 * @param {string} [matricula] - (query, obrigatório) Matrícula do Trabalhador
 * @param {integer} [codigoInscricaoEmpregador] - (query, obrigatório) Tipo de Inscrição do Empregador
 * @param {string} [numeroInscricaoEmpregador] - (query, obrigatório) Número de Inscrição do Empregador
 * @returns {200} Consulta realizada com sucesso
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.consultarSaldoRetidoFgts = {
  "method": "get",
  "path": "/trabalhadores/consultar-saldo-retido-fgts",
  "operationId": "consultarSaldoRetidoFgts_1",
  "request": {
    "query": {
      "contrato": "mock-contrato",
      "codigoSolicitante": 999,
      "cpf": 68019017968,
      "matricula": "CONSIGNADO01",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "47192091008403"
    },
    "requiredQuery": [
      "contrato",
      "codigoSolicitante",
      "cpf",
      "matricula",
      "codigoInscricaoEmpregador",
      "numeroInscricaoEmpregador"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Consulta realizada com sucesso",
      "binary": false,
      "body": {
        "dataHoraConsulta": "2026-07-26T10:00:00-03:00",
        "statusPedidoBloqueio": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "valorBloqueioSaldoDisponivelSolicitado": 1500.75,
        "valorBloqueioMultaRecisoriaSolicitado": 300,
        "valorSaldoDisponivelBloqueadoConsignado": 1200.5,
        "valorMultaRecisoriaBloqueadaConsignado": 250,
        "urlConsultaRepasse": "https://api.exemplo.com/repasse/consulta/987654"
      }
    },
    "412": {
      "description": "Erro na Operacao solicitada",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ]
      }
    }
  },
  "defaultStatus": 200
};

/**
 * @route GET /trabalhadores/consultar-saldo-fgts
 * @summary Consulta de Saldo FGTS Disponível
 * Consulta o saldo FGTS disponível para garantia de E-Consignado do trabalhador.
 * @param {integer} [codigoSolicitante] - (query, obrigatório) Código do Solicitante (CBC)
 * @param {integer} [cpf] - (query, obrigatório) CPF do Trabalhador
 * @param {string} [matricula] - (query, obrigatório) Matrícula do Trabalhador
 * @param {integer} [codigoInscricaoEmpregador] - (query, obrigatório) Tipo de Inscrição do Empregador
 * @param {string} [numeroInscricaoEmpregador] - (query, obrigatório) Número de Inscrição do Empregador
 * @returns {200} Consulta realizada com sucesso
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.consultarSaldoFgts = {
  "method": "get",
  "path": "/trabalhadores/consultar-saldo-fgts",
  "operationId": "consultarSaldoFgts_1",
  "request": {
    "query": {
      "codigoSolicitante": 999,
      "cpf": 68019017968,
      "matricula": "CONSIGNADO01",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "47192091008403"
    },
    "requiredQuery": [
      "codigoSolicitante",
      "cpf",
      "matricula",
      "codigoInscricaoEmpregador",
      "numeroInscricaoEmpregador"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Consulta realizada com sucesso",
      "binary": false,
      "body": {
        "dataHoraConsulta": "2026-07-26T10:00:00-03:00",
        "valorSaldoDisponivelConsignado": 2000,
        "valorMultaRescisoriaConsignado": 1000
      }
    },
    "412": {
      "description": "Erro na Operacao solicitada",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ]
      }
    }
  },
  "defaultStatus": 200
};

/**
 * @route GET /trabalhadores/consultar-dados-trabalhador
 * @summary Consulta de Dados de Vínculo do Trabalhador
 * Serviço de Consulta de dados de Vínculo do Trabalhador
 * @param {integer} [codigoSolicitante] - (query, obrigatório) Código do Solicitante (CBC)
 * @param {integer} [cpf] - (query, obrigatório) CPF do Trabalhador
 * @param {string} [matricula] - (query, obrigatório) Matrícula do Trabalhador
 * @param {integer} [codigoInscricaoEmpregador] - (query, obrigatório) Tipo de Inscrição do Empregador
 * @param {string} [numeroInscricaoEmpregador] - (query, obrigatório) Número de Inscrição do Empregador
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.consultarDados = {
  "method": "get",
  "path": "/trabalhadores/consultar-dados-trabalhador",
  "operationId": "consultarDados_1",
  "request": {
    "query": {
      "codigoSolicitante": 999,
      "cpf": 68019017968,
      "matricula": "CONSIGNADO01",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "47192091008403"
    },
    "requiredQuery": [
      "codigoSolicitante",
      "cpf",
      "matricula",
      "codigoInscricaoEmpregador",
      "numeroInscricaoEmpregador"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "cpf": 12345678911,
        "matricula": "mock-matricula",
        "inscricaoEmpregador": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
        "nome": "mock-nome",
        "sexo": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "dataNascimento": "2026-07-26",
        "codigoCategoriaTrabalhador": 0,
        "elegivel": true,
        "motivoInelegibilidade": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "valorTotalVencimentos": 0,
        "valorBaseMargem": 0,
        "valorMargemDisponivel": 0,
        "dataAdmissao": "2026-07-26",
        "dataDesligamento": "2026-07-26",
        "codigoMotivoDesligamento": 0,
        "pessoaExpostaPoliticamente": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "nomeEmpregador": "mock-nomeEmpregador",
        "nomeMae": "mock-nomeMae",
        "paisNacionalidade": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "cbo": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "cnae": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "dataInicioAtividadeEmpregador": "2026-07-26",
        "qtdEmprestimosAtivosSuspensos": 2,
        "tipoBloqueio": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "dataHoraBloqueio": "2026-07-26T10:00:00-03:00",
        "percentualVerbaRescisoriaDisponivel": 23,
        "alertas": [
          {
            "tipoAlerta": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "dataReferencia": "2026-07-26",
            "idEvento": 0,
            "codigoMotivoAfastamento": 0,
            "dataAfastamento": "2026-07-26",
            "dataTerminoAfastamento": "2026-07-26",
            "codigoMotivoDesligamento": 0,
            "dataDesligamento": "2026-07-26",
            "dataAvisoPrevio": "2026-07-26",
            "dataFimAvisoPrevio": "2026-07-26"
          }
        ],
        "emprestimosLegados": [
          {
            "codigoIF": 0,
            "contrato": "mock-contrato",
            "dataInicioContrato": "2026-07-26",
            "dataFimContrato": "2026-07-26",
            "totalParcelas": 0,
            "valorParcela": 0,
            "valorEmprestimo": 0,
            "valorLiberado": 0,
            "dataHoraAtualizacao": "2026-07-26T10:00:00-03:00",
            "valorTaxaMensal": 0,
            "valorCETMensal": 0,
            "tipoContrato": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "qtdParcelasPagas": 0,
            "valorSaldoDevedor": 0
          }
        ]
      }
    },
    "412": {
      "description": "Retorno com erros",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ]
      }
    }
  },
  "defaultStatus": 200
};

/**
 * @route GET /trabalhadores/consultar-dados-tombamento-compulsorio
 * @summary Consulta de dados básicos de vínculos por CPF para tombamento compulsório
 * Serviço para ajudar as instituições que informaram contratos legados, permitindo que, a partir do CPF, elas obtenham informações básicas dos vínculos ativos do trabalhador.
 * @param {integer} [cpf] - (query, obrigatório)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.obterVinculosTrabalhador = {
  "method": "get",
  "path": "/trabalhadores/consultar-dados-tombamento-compulsorio",
  "operationId": "obterVinculosTrabalhador_1",
  "request": {
    "query": {
      "cpf": 0
    },
    "requiredQuery": [
      "cpf"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "cpf": 0,
        "matricula": "mock-matricula",
        "tipoInscricaoEmpregador": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
        "nome": "mock-nome"
      }
    },
    "412": {
      "description": "Retorno com erros",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ]
      }
    }
  },
  "defaultStatus": 200
};

/**
 * @route GET /trabalhadores/consultar-autorizacoes-saldo-fgts
 * @summary Consulta de Autorizações de Consulta de Saldo FGTS 
 * Consulta de Autorizações de Consulta de Saldo FGTS do Trabalhador por período de início e fim .
 * @param {string} [dataHoraInicio] - (query, obrigatório) Data/Hora Início Autorização no formato ddMMyyyyHHmmss
 * @param {string} [dataHoraFim] - (query, obrigatório) Data/Hora Fim Autorização no formato ddMMyyyyHHmmss
 * @param {integer} [codigoSolicitante] - (query, obrigatório) Código do Solicitante (CBC) 
 * @param {integer} [cpf] - (query, opcional) CPF do Trabalhador 
 * @param {boolean} [ativos] - (query, opcional) Autorizações Ativas 
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Consulta realizada com sucesso
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.consultarAutorizacaoSaldoFgts = {
  "method": "get",
  "path": "/trabalhadores/consultar-autorizacoes-saldo-fgts",
  "operationId": "consultarAutorizacaoSaldoFgts_1",
  "request": {
    "query": {
      "dataHoraInicio": "mock-dataHoraInicio",
      "dataHoraFim": "mock-dataHoraFim",
      "codigoSolicitante": 0,
      "cpf": 0,
      "ativos": true,
      "nroPagina": 1
    },
    "requiredQuery": [
      "dataHoraInicio",
      "dataHoraFim",
      "codigoSolicitante"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Consulta realizada com sucesso",
      "binary": false,
      "body": {
        "nroPaginaAtual": 1,
        "nroTotalPaginas": 3,
        "nroTotalRegistros": 105,
        "qtdRegistrosPorPagina": 50,
        "qtdRegistrosPaginaAtual": 50,
        "dataHoraInicio": "2026-07-26T10:00:00-03:00",
        "dataHoraFim": "2026-07-26T10:00:00-03:00",
        "conteudo": [
          {
            "idTokenAutorizacao": "mock-idTokenAutorizacao",
            "cpfTrabalhador": 0,
            "codigoInstituicaoFinanceira": 0,
            "dataHoraInclusaoAutorizacao": "2026-07-26T10:00:00-03:00",
            "dataValidadeAutorizacao": "2026-07-26",
            "ativo": true,
            "dataHoraExclusaoAutorizacao": "2026-07-26T10:00:00-03:00"
          }
        ]
      }
    },
    "412": {
      "description": "Erro na Operacao solicitada",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ]
      }
    }
  },
  "defaultStatus": 200
};
