'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "garantias".
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
 * @route POST /garantias/execucao-garantias-fgts
 * @summary Execução de Garantia de Empréstimo
 * Serviço destinado à execução de garantias de empréstimos encerrados em decorrência do término do vínculo empregatício.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Execução de garantia realizada com sucesso
 * @returns {412} Erro na operação solicitada
 */
module.exports.executarGarantia = {
  "method": "post",
  "path": "/garantias/execucao-garantias-fgts",
  "operationId": "executarGarantia_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 999,
      "numeroContrato": "99999999999AN1",
      "cpfTrabalhador": 99999999999,
      "matricula": "99999999999-A",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "42422253000101",
      "valorSaldoDisponivelGarantiaFgts": 98587.56,
      "valorMultaRescisoriaGarantiaFgts": 100
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Execução de garantia realizada com sucesso",
      "binary": false,
      "body": {
        "protocolo": 165,
        "dataPrevisaoRepasse": "2026-07-26"
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
