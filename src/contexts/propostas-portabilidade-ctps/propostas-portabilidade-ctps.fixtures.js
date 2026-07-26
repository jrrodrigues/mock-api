'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "propostas-portabilidade-ctps".
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
 * @route POST /propostas-portabilidade-ctps/inclusao-garantias
 * @summary Realização de Proposta de Portabilidade com garantias para solicitação realizada via CTPS Digital
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisicao com dados invalidos
 */
module.exports.realizarPropostaComGarantias = {
  "method": "post",
  "path": "/propostas-portabilidade-ctps/inclusao-garantias",
  "operationId": "realizarPropostaComGarantias_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": [
      {
        "codigoSolicitante": 999,
        "numeroProposta": "199912345678",
        "idSolicitacaoProposta": 1234,
        "dataHoraValidadeProposta": "28102025103500",
        "numeroParcelas": 24,
        "valorParcela": 200,
        "valorEmprestimo": 1500,
        "valorTaxaAnual": 1.2,
        "valorCETAnual": 1,
        "valorTaxaMensal": 0.5,
        "valorCETMensal": 0.5,
        "contatos": [
          {
            "tipo": 3,
            "contato": "fulano@email.com"
          }
        ],
        "temGarantias": true,
        "valorSaldoDisponivelGarantiaFgts": 98587.56,
        "valorMultaRescisoriaGarantiaFgts": 5500.45,
        "percVerbaRescisoriaGarantia": 25
      }
    ],
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "codigo": "mock-codigo",
        "mensagem": "mock-mensagem",
        "numeroProposta": "mock-numeroProposta",
        "idSolicitacaoProposta": 0,
        "dataHoraValidadeProposta": "2026-07-26T10:00:00-03:00"
      }
    },
    "412": {
      "description": "Requisicao com dados invalidos",
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
 * @route POST /propostas-portabilidade-ctps/inclusao
 * @summary (DEPRECIADO) Realização de Proposta de Portabilidade para solicitação realizada via CTPS Digital (deprecated: usar /propostas-portabilidade-ctps/inclusao-garantias)
 * Realização de Proposta de Portabilidade para solicitação realizada via CTPS Digital
 * @deprecated Endpoint sinalizado como depreciado no swagger.json.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisicao com dados invalidos
 */
module.exports.realizarProposta = {
  "method": "post",
  "path": "/propostas-portabilidade-ctps/inclusao",
  "operationId": "realizarProposta_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 999,
      "numeroProposta": "199912345678",
      "idSolicitacaoProposta": 1234,
      "dataHoraValidadeProposta": "28102025103500",
      "numeroParcelas": 24,
      "valorParcela": 200,
      "valorEmprestimo": 1500,
      "valorTaxaAnual": 1.2,
      "valorCETAnual": 1,
      "valorTaxaMensal": 0.5,
      "valorCETMensal": 0.5,
      "contatos": [
        {
          "tipo": 3,
          "contato": "fulano@email.com"
        }
      ],
      "temGarantias": true,
      "valorSaldoDisponivelGarantiaFgts": 98587.56,
      "valorMultaRescisoriaGarantiaFgts": 5500.45,
      "percVerbaRescisoriaGarantia": 25
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "codigo": "mock-codigo",
        "mensagem": "mock-mensagem",
        "numeroProposta": "mock-numeroProposta",
        "idSolicitacaoProposta": 0,
        "dataHoraValidadeProposta": "2026-07-26T10:00:00-03:00"
      }
    },
    "412": {
      "description": "Requisicao com dados invalidos",
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
 * @route GET /propostas-portabilidade-ctps/solicitacoes-trabalhador-paginado
 * @summary Consulta de Solicitações de Propostas de Portabilidade válidas (paginado) realizadas via CTPS Digital.
 * Consulta de Solicitações de Propostas de Portabilidade válidas (não expiradas) realizadas via CTPS Digital. Paginação inicial em 1.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [dataHoraInicio] - (query, obrigatório)
 * @param {string} [dataHoraFim] - (query, obrigatório)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Requisicao com dados invalidos
 */
module.exports.consultarSolicitacoesPropostasPortabiliaddePaginado = {
  "method": "get",
  "path": "/propostas-portabilidade-ctps/solicitacoes-trabalhador-paginado",
  "operationId": "consultarSolicitacoesPropostasPortabiliaddePaginado_1",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "dataHoraInicio": "mock-dataHoraInicio",
      "dataHoraFim": "mock-dataHoraFim",
      "nroPagina": 1
    },
    "requiredQuery": [
      "codigoSolicitante",
      "dataHoraInicio",
      "dataHoraFim"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Consulta efetuada",
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
            "idSolicitacao": 0,
            "dataHoraValidadeSolicitacao": "2026-07-26T10:00:00-03:00",
            "cpf": 0,
            "matricula": "mock-matricula",
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "nomeTrabalhador": "mock-nomeTrabalhador",
            "nomeEmpregador": "mock-nomeEmpregador",
            "dataNascimento": "2026-07-26",
            "margemDisponivel": 0,
            "elegivelEmprestimo": true,
            "pessoaExpostaPoliticamente": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "dataAdmissao": "2026-07-26",
            "emprestimo": {
              "ifConcessora": {
                "codigo": null,
                "descricao": null
              },
              "contrato": "mock-contrato",
              "dataInicioContrato": "2026-07-26",
              "dataFimContrato": "2026-07-26",
              "competenciaInicioDesconto": 0,
              "competenciaFimDesconto": 0,
              "totalParcelas": 0,
              "valorParcela": 0,
              "valorEmprestimo": 0,
              "valorLiberado": 0,
              "dataHoraInclusaoEmprestimo": "2026-07-26T10:00:00-03:00",
              "origemAverbacao": {
                "codigo": null,
                "descricao": null
              },
              "dataHoraAtualizacao": "2026-07-26T10:00:00-03:00",
              "situacaoEmprestimo": {
                "codigo": null,
                "descricao": null
              },
              "valorIOF": 0,
              "valorTaxaAnual": 0,
              "valorCetAnual": 0,
              "valorTaxaMensal": 0,
              "valorCetMensal": 0,
              "valorTroco": 0,
              "dataPrimeiroDesconto": "2026-07-26",
              "numeroProposta": "mock-numeroProposta",
              "cnpjOperador": "mock-cnpjOperador",
              "garantia": {
                "temGarantias": null,
                "valorSaldoDisponivelGarantiaFgts": null,
                "valorMultaRescisoriaGarantiaFgts": null,
                "percVerbaRescisoriaGarantia": null
              },
              "valorSaldoDevedor": 0
            },
            "garantia": {
              "temGarantias": true,
              "valorSaldoDisponivelGarantiaFgts": 98587.56,
              "valorMultaRescisoriaGarantiaFgts": 5500.45,
              "percVerbaRescisoriaGarantia": 25
            },
            "alertas": [
              {
                "tipoAlerta": null,
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
            ]
          }
        ]
      }
    },
    "412": {
      "description": "Requisicao com dados invalidos",
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
