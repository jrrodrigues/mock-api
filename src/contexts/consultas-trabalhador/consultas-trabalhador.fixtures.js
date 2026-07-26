'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "consultas-trabalhador".
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
 * @route GET /consultas-trabalhador/download-arquivo/{id}
 * @summary Download de Arquivo Credito do Trabalhador
 * Download de Arquivo eConsignado Trabalhador
 * @param {integer} id - (path, obrigatório)
 * @returns {200} Download efetuado
 * @returns {412} Arquivo solicitado no localizado
 */
module.exports.obterArquivo = {
  "method": "get",
  "path": "/consultas-trabalhador/download-arquivo/{id}",
  "operationId": "obterArquivo_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Download efetuado",
      "binary": true,
      "body": "<conteudo-binario-mock>"
    },
    "412": {
      "description": "Arquivo solicitado no localizado",
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
 * @route GET /consultas-trabalhador/consultar-arquivos
 * @summary Consulta de Arquivos do Credito do Trabalhador
 * Consulta de Arquivos do eConsignado Trabalhador
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {integer} [tipoArquivo] - (query, opcional)
 * @param {string} [dataGeracaoArquivoDe] - (query, opcional)
 * @param {string} [dataGeracaoArquivoAte] - (query, opcional)
 * @param {string} [dataInicioPeriodoDe] - (query, opcional)
 * @param {string} [dataInicioPeriodoAte] - (query, opcional)
 * @param {integer} [competencia] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Requisicao com dados invalidos
 */
module.exports.obterArquivos = {
  "method": "get",
  "path": "/consultas-trabalhador/consultar-arquivos",
  "operationId": "obterArquivos_2",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "tipoArquivo": 0,
      "dataGeracaoArquivoDe": "mock-dataGeracaoArquivoDe",
      "dataGeracaoArquivoAte": "mock-dataGeracaoArquivoAte",
      "dataInicioPeriodoDe": "mock-dataInicioPeriodoDe",
      "dataInicioPeriodoAte": "mock-dataInicioPeriodoAte",
      "competencia": 0
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
          "id": 0,
          "tipo": {
            "codigo": 0,
            "descricao": "mock-descricao"
          },
          "cbc": 0,
          "dataGeracao": "2026-07-26T10:00:00-03:00",
          "nome": "mock-nome",
          "dataInicioPeriodo": "2026-07-26",
          "dataFimPeriodo": "2026-07-26",
          "competencia": 0,
          "conteudo": "bW9jay1hcGk=",
          "codigoInscricaoEmpregador": {
            "codigo": 0,
            "descricao": "mock-descricao"
          },
          "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
          "hashArquivo": "mock-hashArquivo",
          "numeroLote": 0,
          "tamanhoLote": 0
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
