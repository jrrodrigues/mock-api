'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "arquivos".
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
 * @route POST /arquivos/upload-arquivo
 * @summary Upload de arquivos do Consignado Trabalhador.
 * Serviço para upload de arquivos pelas instituições financeiras do Consignado Trabalhador.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.uploadArquivoTrabalhador = {
  "method": "post",
  "path": "/arquivos/upload-arquivo",
  "operationId": "uploadArquivoTrabalhador",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 0,
      "tipo": 0,
      "nome": "mock-nome",
      "arquivo": "bW9jay1hcGk="
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {}
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
