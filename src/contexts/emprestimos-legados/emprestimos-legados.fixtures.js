'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "emprestimos-legados".
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
 * @route PUT /emprestimos-legados/excluir-emprestimo-legado-trabalhador
 * @summary Exclusão de Empréstimo Legado
 * Serviço de Exclusão de Empréstimo Legado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.exclusao = {
  "method": "put",
  "path": "/emprestimos-legados/excluir-emprestimo-legado-trabalhador",
  "operationId": "exclusao_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 997,
      "numeroContrato": "199712345678",
      "cpfTrabalhador": 87070728050,
      "motivoExclusao": 7
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operacao efetuada",
      "binary": false,
      "body": {
        "codigoSucesso": "AB",
        "mensagem": "mock-mensagem",
        "numeroContrato": "mock-numeroContrato",
        "hashOperacao": 0,
        "competenciaExclusao": 0
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
 * @route POST /emprestimos-legados/incluir-emprestimo-legado-trabalhador
 * @summary Inclusão de Empréstimo Legado
 * Serviço de Inclusão de Empréstimo Legado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.inclusao = {
  "method": "post",
  "path": "/emprestimos-legados/incluir-emprestimo-legado-trabalhador",
  "operationId": "inclusao_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 999,
      "numeroContrato": "199912345678",
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "dataInicioContrato": "01012024",
      "dataFimContrato": "12012024",
      "numeroParcelas": 10,
      "valorEmprestimo": 1010,
      "valorParcela": 100,
      "valorTaxaMensal": 0.3,
      "valorCETMensal": 0.3,
      "qtdParcelasPagas": 10,
      "valorSaldoDevedor": 1000.22,
      "codigoTipoContrato": 1
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operacao efetuada",
      "binary": false,
      "body": {
        "codigoSucesso": "AB",
        "mensagem": "mock-mensagem",
        "numeroContrato": "mock-numeroContrato",
        "competenciaInicioDesconto": 0,
        "hashOperacao": 0
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
