'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "comunicados".
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
 * @route PUT /comunicados/marcar-leitura-comunicado
 * @summary Marcação de comunicado como lido
 * Marcação de um comunicado como lido.
 * @param {integer} [numero] - (query, obrigatório)
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @returns {200} Comunicado marcado como lido com sucesso.
 * @returns {412} Erro na operação solicitada
 */
module.exports.marcarLeitura = {
  "method": "put",
  "path": "/comunicados/marcar-leitura-comunicado",
  "operationId": "marcarLeitura",
  "request": {
    "query": {
      "numero": 0,
      "codigoSolicitante": 0
    },
    "requiredQuery": [
      "numero",
      "codigoSolicitante"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Comunicado marcado como lido com sucesso.",
      "binary": false,
      "body": {}
    },
    "412": {
      "description": "Erro na operação solicitada",
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
 * @route GET /comunicados/consultar-comunicados
 * @summary Consulta de comunicados
 * Consulta de comunicados.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @returns {200} Consulta efetuada com sucesso.
 * @returns {412} Erro na operação solicitada
 */
module.exports.obterComunicados = {
  "method": "get",
  "path": "/comunicados/consultar-comunicados",
  "operationId": "obterComunicados",
  "request": {
    "query": {
      "codigoSolicitante": 0
    },
    "requiredQuery": [
      "codigoSolicitante"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Consulta efetuada com sucesso.",
      "binary": false,
      "body": [
        {
          "numero": 0,
          "assunto": "mock-assunto",
          "mensagem": "mock-mensagem",
          "criadoEm": "2026-07-26",
          "enviadoEm": "2026-07-26T10:00:00-03:00",
          "lidoEm": "2026-07-26"
        }
      ]
    },
    "412": {
      "description": "Erro na operação solicitada",
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
 * @route GET /comunicados/consultar-comunicado
 * @summary Consulta de comunicado
 * Serviço de Consulta de comunicado por número.
 * @param {integer} [numero] - (query, obrigatório)
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @returns {200} Consulta efetuada com sucesso.
 * @returns {412} Erro na operação solicitada
 */
module.exports.obterComunicado = {
  "method": "get",
  "path": "/comunicados/consultar-comunicado",
  "operationId": "obterComunicado",
  "request": {
    "query": {
      "numero": 0,
      "codigoSolicitante": 0
    },
    "requiredQuery": [
      "numero",
      "codigoSolicitante"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Consulta efetuada com sucesso.",
      "binary": false,
      "body": {
        "numero": 0,
        "assunto": "mock-assunto",
        "mensagem": "mock-mensagem",
        "criadoEm": "2026-07-26",
        "enviadoEm": "2026-07-26T10:00:00-03:00",
        "lidoEm": "2026-07-26"
      }
    },
    "412": {
      "description": "Erro na operação solicitada",
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
