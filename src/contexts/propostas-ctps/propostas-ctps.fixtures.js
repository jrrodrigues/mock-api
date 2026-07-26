'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "propostas-ctps".
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
 * @route POST /propostas-ctps/inclusao-garantias
 * @summary Realização de Proposta(s) com garantias para solicitação realizada via CTPS Digital
 * Realização de Proposta(s) com garantias para solicitação realizada via CTPS Digital. Se solicitação COM garantia: a) 2 propostas (1 com e 1 sem garantia), b) 1 proposta com garantia, ou c) 1 proposta sem garantia. Se solicitação SEM garantia, deve ser enviada 1 proposta sem garantia.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisicao com dados invalidos
 */
module.exports.realizarPropostaComGarantias = {
  "method": "post",
  "path": "/propostas-ctps/inclusao-garantias",
  "operationId": "realizarPropostaComGarantias_3",
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
        "valorLiberado": 1200,
        "valorEmprestimo": 1500,
        "valorIOF": 0.1,
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
      "body": [
        {
          "codigo": "mock-codigo",
          "mensagem": "mock-mensagem",
          "numeroProposta": "mock-numeroProposta",
          "idSolicitacaoProposta": 0,
          "dataHoraValidadeProposta": "2026-07-26T10:00:00-03:00"
        }
      ]
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
 * @route POST /propostas-ctps/inclusao
 * @summary (DEPRECIADO) Realização de Proposta para solicitação realizada via CTPS Digital (deprec ated: usar /propostas-ctps/inclusao-garantias)
 * Realização de Proposta para solicitação realizada via CTPS Digital. Serviço descontinuado: não aceita solicitações com garantia.
 * @deprecated Endpoint sinalizado como depreciado no swagger.json.
 * @returns {200} Operação efetuada
 * @returns {412} Requisicao com dados invalidos
 */
module.exports.realizarProposta = {
  "method": "post",
  "path": "/propostas-ctps/inclusao",
  "operationId": "realizarProposta_3",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": null,
    "requiredBody": false
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
 * @route GET /propostas-ctps/solicitacoes-trabalhador-paginado
 * @summary Consulta de Solicitações de Propostas válidas (paginado) realizadas via CTPS Digital.
 * Consulta de Solicitações de Propostas válidas (não expiradas) realizadas via CTPS Digital. Paginação inicial em 1.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [dataHoraInicio] - (query, obrigatório)
 * @param {string} [dataHoraFim] - (query, obrigatório)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Requisicao com dados invalidos
 */
module.exports.consultarSolicitacoesPropostasPaginado = {
  "method": "get",
  "path": "/propostas-ctps/solicitacoes-trabalhador-paginado",
  "operationId": "consultarSolicitacoesPropostasPaginado_1",
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
            "cpf": 0,
            "matricula": "mock-matricula",
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "valorLiberado": 0,
            "nroParcelas": 0,
            "dataHoraValidadeSolicitacao": "2026-07-26T10:00:00-03:00",
            "nomeTrabalhador": "mock-nomeTrabalhador",
            "dataNascimento": "2026-07-26",
            "margemDisponivel": 0,
            "elegivelEmprestimo": true,
            "pessoaExpostaPoliticamente": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "dataAdmissao": "2026-07-26",
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

/**
 * @route GET /propostas-ctps/solicitacoes-trabalhador
 * @summary (DEPRECIADO) Consulta de Solicitações de Propostas válidas realizadas via CTPS Digital.
 * (DEPRECIADO) Consulta de Solicitações de Propostas válidas (não expiradas) realizadas via CTPS Digital.
 * @deprecated Endpoint sinalizado como depreciado no swagger.json.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {integer} [idSolicitacaoProposta] - (query, opcional)
 * @param {string} [dataHoraInicio] - (query, opcional)
 * @param {string} [dataHoraFim] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Requisicao com dados invalidos
 */
module.exports.consultarSolicitacoesPropostas = {
  "method": "get",
  "path": "/propostas-ctps/solicitacoes-trabalhador",
  "operationId": "consultarSolicitacoesPropostas_1",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "idSolicitacaoProposta": 0,
      "dataHoraInicio": "mock-dataHoraInicio",
      "dataHoraFim": "mock-dataHoraFim"
    },
    "requiredQuery": [
      "codigoSolicitante"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Consulta efetuada",
      "binary": false,
      "body": [
        {
          "idSolicitacao": 0,
          "cpf": 0,
          "matricula": "mock-matricula",
          "inscricaoEmpregador": {
            "codigo": 0,
            "descricao": "mock-descricao"
          },
          "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
          "valorLiberado": 0,
          "nroParcelas": 0,
          "dataHoraValidadeSolicitacao": "2026-07-26T10:00:00-03:00",
          "nomeTrabalhador": "mock-nomeTrabalhador",
          "dataNascimento": "2026-07-26",
          "margemDisponivel": 0,
          "elegivelEmprestimo": true,
          "pessoaExpostaPoliticamente": {
            "codigo": 0,
            "descricao": "mock-descricao"
          },
          "dataAdmissao": "2026-07-26",
          "garantia": {
            "temGarantias": true,
            "valorSaldoDisponivelGarantiaFgts": 98587.56,
            "valorMultaRescisoriaGarantiaFgts": 5500.45,
            "percVerbaRescisoriaGarantia": 25
          },
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
          ]
        }
      ]
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
