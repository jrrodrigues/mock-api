'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "homologacao".
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
 * @route POST /homologacao/solicitacao-portabilidade-extra-trabalhador
 * @summary Inclusão de Solicitação de Propostas de Portabilidade Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * Inclusão de solicitação de propostas de portabilidade trabalhador extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirSolicitacaoPortabilidadeExtraTrabalhador = {
  "method": "post",
  "path": "/homologacao/solicitacao-portabilidade-extra-trabalhador",
  "operationId": "incluirSolicitacaoPortabilidadeExtraTrabalhador_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 999,
      "ifConcessora": 999,
      "numeroContrato": "199912345678",
      "temGarantias": true,
      "valorSaldoDisponivelGarantiaFgts": 500,
      "valorMultaRescisoriaGarantiaFgts": 200,
      "percVerbaRescisoriaGarantia": 15
    },
    "requiredBody": true
  },
  "responses": {
    "201": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "cpf": 0,
        "idSolicitacaoProposta": 0
      }
    },
    "412": {
      "description": "Requisição com dados inválidos",
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
  "defaultStatus": 201
};

/**
 * @route POST /homologacao/solicitacao-extra-trabalhador
 * @summary Inclusão de Solicitação de Propostas Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * Inclusão de solicitação de propostas trabalhador extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirSolicitacaoExtraTrabalhador = {
  "method": "post",
  "path": "/homologacao/solicitacao-extra-trabalhador",
  "operationId": "incluirSolicitacaoExtraTrabalhador_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 997,
      "cpf": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "valorLiberado": 1500,
      "numeroParcelas": 10,
      "temGarantias": true,
      "valorSaldoDisponivelGarantiaFgts": 500,
      "valorMultaRescisoriaGarantiaFgts": 200,
      "percVerbaRescisoriaGarantia": 15
    },
    "requiredBody": true
  },
  "responses": {
    "201": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "cpf": 0,
        "idSolicitacaoProposta": 0
      }
    },
    "412": {
      "description": "Requisição com dados inválidos",
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
  "defaultStatus": 201
};

/**
 * @route POST /homologacao/pagamento-extra-trabalhador
 * @summary Inclusão de Pagamento/Repasse de Empréstimo Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirPagamentoExtraTrabalhador = {
  "method": "post",
  "path": "/homologacao/pagamento-extra-trabalhador",
  "operationId": "incluirPagamentoExtraTrabalhador_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 997,
      "contrato": "mock-contrato",
      "numeroGuia": 0,
      "valorParcelaPaga": 0,
      "dataHoraPagamentoGuia": "26072026100000",
      "dataHoraRepasseIF": "26072026100000",
      "competencia": 202504,
      "nsu": 0,
      "verbasRescisorias": true,
      "cpf": 0,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "codigoTRF": 0,
      "valorAtualizacaoMonetaria": 1,
      "valorJurosDeMora": 1,
      "valorMulta": 1
    },
    "requiredBody": true
  },
  "responses": {
    "201": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "contrato": "mock-contrato",
        "codigoIF": 0,
        "numeroGuia": 0,
        "competencia": 0,
        "nsu": 0,
        "verbasRescisorias": true
      }
    },
    "412": {
      "description": "Requisição com dados inválidos",
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
  "defaultStatus": 201
};

/**
 * @route POST /homologacao/massa-extra-trabalhador
 * @summary Inclusão de Massa Extra de Dados de Trabalhador para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * Inclusão de massa extra de dados de trabalhador para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirMassaExtraTrabalhador = {
  "method": "post",
  "path": "/homologacao/massa-extra-trabalhador",
  "operationId": "incluirMassaExtraTrabalhador_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 0,
      "cpfTrabalhador": 0,
      "matricula": "mock-matricula",
      "codigoInscricaoEmpregador": 0,
      "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
      "codigoInscricaoEstabelecimento": 0,
      "numeroInscricaoEstabelecimento": "mock-numeroInscricaoEstabelecimento",
      "nome": "mock-nome",
      "codigoSexo": 0,
      "dataNascimento": "26072026",
      "codigoCategoriaTrabalhador": 0,
      "elegivel": true,
      "codigoInelegivel": 0,
      "valorTotalVencimentos": 0,
      "valorBaseMargem": 0,
      "valorMargemDisponivel": 0,
      "dataAdmissao": "26072026",
      "dataDesligamento": "26072026",
      "codigoMotivoDesligamento": 0,
      "pessoaExpostaPoliticamente": 0,
      "nomeEmpregador": "mock-nomeEmpregador",
      "codigoClassificacaoTributaria": 0,
      "codigoBloqueio": 0
    },
    "requiredBody": true
  },
  "responses": {
    "201": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "cpfTrabalhador": 0
      }
    },
    "412": {
      "description": "Requisição com dados inválidos",
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
  "defaultStatus": 201
};

/**
 * @route POST /homologacao/escrituracao-extra-trabalhador
 * @summary Inclusão de eventos de remuneração, escriturados no eSocial, que são referentes a desconto de empréstimos consignados.
 * Inclusão de eventos de remuneração, escriturados no eSocial, que são referentes a desconto de empréstimos consignados. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirEscrituracaoExtraTrabalhador = {
  "method": "post",
  "path": "/homologacao/escrituracao-extra-trabalhador",
  "operationId": "incluirEscrituracaoExtraTrabalhador_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoIfEscrituracao": 997,
      "contratoEscrituracao": "mock-contratoEscrituracao",
      "idEvento": "mock-idEvento",
      "periodoReferencia": 0,
      "valorParcelaDesconto": 0,
      "valorParcelaEmprestimo": 0,
      "codigoIfEmprestimo": 997,
      "contratoEmprestimo": "mock-contratoEmprestimo",
      "cpf": 0,
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "11111111111111",
      "matricula": "MAT-99999999999999213"
    },
    "requiredBody": true
  },
  "responses": {
    "201": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "codigoIfEscrituracao": 0,
        "contratoEscrituracao": "mock-contratoEscrituracao",
        "idEvento": "mock-idEvento",
        "periodoReferencia": 0,
        "valorParcelaDesconto": 0,
        "valorParcelaEmprestimo": 0,
        "codigoIfEmprestimo": 0,
        "contratoEmprestimo": "mock-contratoEmprestimo",
        "cpf": 0,
        "codigoInscricaoEmpregador": 0,
        "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
        "matricula": "mock-matricula"
      }
    },
    "412": {
      "description": "Requisição com dados inválidos",
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
  "defaultStatus": 201
};

/**
 * @route POST /homologacao/emprestimo-consignado-trabalhador-extra
 * @summary Inclusão massa extra de Empréstimo Consignado Trabalhador.
 * Inclusão massa extra de Empréstimo Consignado Trabalhador. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirEmprestimoConsignadoTrabalhador = {
  "method": "post",
  "path": "/homologacao/emprestimo-consignado-trabalhador-extra",
  "operationId": "incluirEmprestimoConsignadoTrabalhador_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "ifConcessora": 999,
      "contrato": "199912345678",
      "cpf": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "dataInicioContrato": "01012020",
      "dataFimContrato": "01012020",
      "dataPrimeiroDesconto": "01012020",
      "competenciaInicioDesconto": "202401",
      "qtdParcelas": 0,
      "valorParcela": 0,
      "valorEmprestimo": 0,
      "valorIOF": 0,
      "valorLiberado": 0,
      "valorTroco": 0,
      "valorTaxaAnual": 0,
      "valorCETAnual": 0,
      "valorTaxaMensal": 0,
      "valorCETMensal": 0,
      "codigoSituacaoEmprestimo": 0,
      "temGarantias": true,
      "valorSaldoDisponivelGarantiaFgts": 500,
      "valorMultaRescisoriaGarantiaFgts": 200,
      "percVerbaRescisoriaGarantia": 15
    },
    "requiredBody": true
  },
  "responses": {
    "201": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "codigoIfEscrituracao": 0,
        "contratoEscrituracao": "mock-contratoEscrituracao",
        "idEvento": "mock-idEvento",
        "periodoReferencia": 0,
        "valorParcelaDesconto": 0,
        "valorParcelaEmprestimo": 0,
        "codigoIfEmprestimo": 0,
        "contratoEmprestimo": "mock-contratoEmprestimo",
        "cpf": 0,
        "codigoInscricaoEmpregador": 0,
        "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
        "matricula": "mock-matricula"
      }
    },
    "412": {
      "description": "Requisição com dados inválidos",
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
  "defaultStatus": 201
};

/**
 * @route POST /homologacao/autorizacoes-saldo-fgts
 * @summary Inclusão massa extra de autorização de consulta de saldo de FGTS.
 * Inclusão massa extra de autorização de consulta de saldo de FGTS. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirAutorizacaoConsultaSaldoFgts = {
  "method": "post",
  "path": "/homologacao/autorizacoes-saldo-fgts",
  "operationId": "incluirAutorizacaoConsultaSaldoFgts_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "cpfTrabalhador": 71931445028,
      "codigoInstFin": 999
    },
    "requiredBody": true
  },
  "responses": {
    "201": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "idTokenAutorizacao": 999,
        "cpfTrabalhador": 96977817887,
        "codigoInstFin": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "dataHoraInclusao": "27052025100000",
        "dataValidadeAutorizacao": "27052025"
      }
    },
    "412": {
      "description": "Requisição com dados inválidos",
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
  "defaultStatus": 201
};
