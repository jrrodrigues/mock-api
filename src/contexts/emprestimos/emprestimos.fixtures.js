'use strict';

/**
 * Objetos de Request/Response de exemplo para o contexto "emprestimos".
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
 * @route PUT /emprestimos/suspender-consignado-trabalhador
 * @summary Suspensão de Empréstimo
 * Operação de Suspensão de Empréstimo
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.suspenderEmprestimo = {
  "method": "put",
  "path": "/emprestimos/suspender-consignado-trabalhador",
  "operationId": "suspenderEmprestimo_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
      "codigoSolicitante": 0,
      "numeroContrato": "mock-numeroContrato"
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
        "competenciaSuspensao": 0,
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

/**
 * @route PUT /emprestimos/reativar-consignado-trabalhador
 * @summary Reativação de Empréstimo
 * Operação de Reativação de Empréstimo
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.reativarEmprestimo = {
  "method": "put",
  "path": "/emprestimos/reativar-consignado-trabalhador",
  "operationId": "reativarEmprestimo_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "codigoSolicitante": 997,
      "numeroContrato": "199712345678"
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
        "competenciaReativacao": 0,
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

/**
 * @route PUT /emprestimos/excluir-portabilidade-trabalhador
 * @summary Exclusão de Portabilidade
 * Operacao de Exclusão de Portabilidade
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.excluirPortabilidade = {
  "method": "put",
  "path": "/emprestimos/excluir-portabilidade-trabalhador",
  "operationId": "excluirPortabilidade_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "numeroUnico": 7234567890123457000,
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "codigoOrigem": 997,
      "codigoProponente": 995,
      "contratosExcluidos": [
        {
          "numeroContrato": "199912345678",
          "ultimaParcelaPaga": 3
        }
      ]
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operacao efetuada",
      "binary": false,
      "body": {
        "competenciaExclusao": 0,
        "codigoSucesso": "AB",
        "mensagem": "mock-mensagem",
        "listaContratosExcluidos": [
          {
            "numeroContrato": "mock-numeroContrato",
            "ultimaParcelaPaga": 0
          }
        ],
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

/**
 * @route PUT /emprestimos/excluir-consignado-trabalhador
 * @summary Exclusão de Consignado
 * Serviço de de Exclusao de Consignado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.excluirConsignado = {
  "method": "put",
  "path": "/emprestimos/excluir-consignado-trabalhador",
  "operationId": "excluirConsignado_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 997,
      "numeroContrato": "199712345678",
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
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
 * @route PUT /emprestimos/excluir-antecipar-parcela
 * @summary Exclusão de antecipação de parcela do Trabalhador
 * Serviço de exclusão de antecipação de parcela do trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.excluirParcelaAntecipada = {
  "method": "put",
  "path": "/emprestimos/excluir-antecipar-parcela",
  "operationId": "excluirParcelaAntecipada_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 0,
      "numeroContrato": "1997123478",
      "idCompetencia": "202501"
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "codigoSucesso": "AB",
        "mensagem": "mock-mensagem",
        "codigoSolicitante": 0,
        "contrato": "mock-contrato"
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
  "defaultStatus": 200
};

/**
 * @route PUT /emprestimos/alterar-nu-portabilidade-trabalhador
 * @summary Alteração de Número Único da Portabilidade
 * Operacao de Alteração do Numero Único da Portabilidade
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.alterarNroUnicoPortabilidade = {
  "method": "put",
  "path": "/emprestimos/alterar-nu-portabilidade-trabalhador",
  "operationId": "alterarNroUnicoPortabilidade_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 999,
      "numeroUnico": 7234567890123457000,
      "numeroUnicoNovo": 8234567890777457000
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operacao efetuada",
      "binary": false,
      "body": {
        "codigoSolicitante": 999,
        "numeroUnico": 7234567890123457000,
        "numeroUnicoNovo": 8234567890777457000
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
 * @route PUT /emprestimos/alterar-consignado-encerrado-trabalhador
 * @summary Alteração de Empréstimo Encerrado por término de vínculo
 * Serviço de Alteração de Empréstimo Encerrado por término de vínculo
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.alterarEmprestimoEncerrado = {
  "method": "put",
  "path": "/emprestimos/alterar-consignado-encerrado-trabalhador",
  "operationId": "alterarEmprestimoEncerrado_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 997,
      "numeroContrato": "mock-numeroContrato",
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "nomeTrabalhador": "mock-nomeTrabalhador",
      "numeroParcelas": 10,
      "valorParcela": 100
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
        "numeroContrato": "mock-numeroContrato"
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
 * @route PUT /emprestimos/alterar-cbc-portabilidade-trabalhador
 * @summary Alteração de CBC Portabilidade
 * Operacao de Alteracao CBC Portabilidade
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.alterarCBCPortabilidade = {
  "method": "put",
  "path": "/emprestimos/alterar-cbc-portabilidade-trabalhador",
  "operationId": "alterarCBCPortabilidade_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 995,
      "codigoProponente": 997,
      "numeroUnico": 7234567890123457000
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operacao efetuada",
      "binary": false,
      "body": {
        "mensagem": "mock-mensagem",
        "numeroContrato": "mock-numeroContrato",
        "codigoSucesso": "AB",
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

/**
 * @route POST /emprestimos/troca-titularidade-lote-trabalhador
 * @summary Troca de Titularidade de Empréstimo Consignado em lote
 * Serviço de Troca de Titularidade de Empréstimo Consignado em lote
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Erro na operação solicitada
 */
module.exports.incluirTrocaDeTitularidadeEmLote = {
  "method": "post",
  "path": "/emprestimos/troca-titularidade-lote-trabalhador",
  "operationId": "incluirTrocaDeTitularidadeEmLote_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 0,
      "lote": [
        {
          "cpfTrabalhador": 87070728050,
          "matricula": "MAT213",
          "codigoInscricaoEmpregador": 1,
          "numeroInscricaoEmpregador": "66106660000160",
          "cbcCompradora": 0,
          "numeroContrato": "mock-numeroContrato",
          "numeroContratoNovo": "mock-numeroContratoNovo"
        }
      ]
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "erros": [
          {
            "codigo": "mock-codigo",
            "mensagem": "mock-mensagem"
          }
        ],
        "sucessos": [
          {
            "codigoSucesso": "AB",
            "mensagem": "mock-mensagem",
            "hashOperacao": 0,
            "cpfTrabalhador": 0,
            "matricula": "mock-matricula",
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "cbcCompradora": 0,
            "numeroContrato": "mock-numeroContrato",
            "numeroContratoNovo": "mock-numeroContratoNovo"
          }
        ],
        "falhas": [
          {
            "cpfTrabalhador": 0,
            "matricula": "mock-matricula",
            "codigoInscricaoEmpregador": 0,
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "cbcCompradora": 0,
            "numeroContrato": "mock-numeroContrato",
            "numeroContratoNovo": "mock-numeroContratoNovo",
            "erros": [
              {
                "codigo": "mock-codigo",
                "mensagem": "mock-mensagem"
              }
            ],
            "hashOperacao": 0
          }
        ]
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

/**
 * @route POST /emprestimos/tombamento-compulsorio
 * @summary Tombamento Compulsório
 * Serviço de Tombamento de Empréstimo Consignado Trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.averbarTombamento = {
  "method": "post",
  "path": "/emprestimos/tombamento-compulsorio",
  "operationId": "averbarTombamento_1",
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
      "nomeTrabalhador": "Trabalhador Fulano de tal",
      "dataInicioContrato": "01012024",
      "competenciaInicioDesconto": "202401",
      "dataFimContrato": "12012024",
      "numeroParcelas": 10,
      "valorLiberado": 1000,
      "valorEmprestimo": 1010,
      "valorParcela": 100,
      "valorIOF": 1,
      "valorTaxaAnual": 5,
      "valorCETAnual": 5,
      "valorTaxaMensal": 0.3,
      "dataPrimeiroDesconto": "02012024",
      "valorCETMensal": 0.3,
      "cnpjOperador": "22222222222222"
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

/**
 * @route POST /emprestimos/reverter-refinanciamento-trabalhador
 * @summary Reversão de Refinanciamento do Trabalhador
 * Serviço de Reversão de Refinanciamento do Trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.reverterRefinanciamento = {
  "method": "post",
  "path": "/emprestimos/reverter-refinanciamento-trabalhador",
  "operationId": "reverterRefinanciamento_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 0,
      "numeroContrato": "mock-numeroContrato",
      "motivoReversao": 0
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
        "numeroContratoExcluido": "mock-numeroContratoExcluido",
        "competenciaReversao": 0,
        "listaContratosReativados": [
          {
            "numeroContrato": "mock-numeroContrato",
            "valorParcela": 0
          }
        ],
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

/**
 * @route POST /emprestimos/renegociar-consignado-trabalhador
 * @summary Renegociação de Empréstimo Consignado encerrado
 * Operação de Renegociação de Empréstimo Consignado encerrado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.renegociar = {
  "method": "post",
  "path": "/emprestimos/renegociar-consignado-trabalhador",
  "operationId": "renegociar_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 997,
      "numeroContrato": "199712345678",
      "numeroContratoEncerrado": "199712345679",
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "nomeTrabalhador": "Trabalhador Fulano de tal",
      "dataInicioContrato": "01012024",
      "competenciaInicioDesconto": "202402",
      "dataFimContrato": "01122024",
      "numeroParcelas": 10,
      "valorLiberado": 1000,
      "valorEmprestimo": 1010,
      "valorParcela": 100,
      "valorIOF": 1,
      "valorTaxaAnual": 5,
      "valorCETAnual": 5,
      "valorTaxaMensal": 0.3,
      "dataPrimeiroDesconto": "01022024",
      "valorCETMensal": 0.3,
      "cnpjOperador": "22222222222222"
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

/**
 * @route POST /emprestimos/realizar-refinanciamento-trabalhador
 * @summary Averbação de Refinanciamento do Trabalhador
 * Serviço de Averbação de Refinanciamento do Trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.refinanciar = {
  "method": "post",
  "path": "/emprestimos/realizar-refinanciamento-trabalhador",
  "operationId": "refinanciar_2",
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
      "nomeTrabalhador": "Trabalhador Fulano de tal",
      "dataInicioContrato": "01012020",
      "competenciaInicioDesconto": "202401",
      "dataFimContrato": "01012020",
      "numeroParcelas": 0,
      "valorEmprestimo": 0,
      "valorParcela": 0,
      "valorIOF": 0,
      "valorTroco": 0,
      "valorPago": 0,
      "valorTaxaAnual": 0,
      "valorCETAnual": 0,
      "valorTaxaMensal": 0,
      "dataPrimeiroDesconto": "01012020",
      "valorCETMensal": 0,
      "cnpjOperador": "22222222222222",
      "listaContratosQuitadosTrabalhador": [
        {
          "numeroContrato": "mock-numeroContrato"
        }
      ],
      "temGarantias": true,
      "valorSaldoDisponivelGarantiaFgts": 500,
      "valorMultaRescisoriaGarantiaFgts": 200,
      "percVerbaRescisoriaGarantia": 15
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
        "listaContratosQuitados": [
          {
            "numeroContrato": "mock-numeroContrato"
          }
        ],
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

/**
 * @route POST /emprestimos/incluir-saldo-devedor-trabalhador
 * @summary Envio de Saldo Devedor de empréstimo do trabalhador
 * Serviço de Envio de Saldo Devedor de empréstimo do trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirSaldoDevedorContrato = {
  "method": "post",
  "path": "/emprestimos/incluir-saldo-devedor-trabalhador",
  "operationId": "incluirSaldoDevedorContrato_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 0,
      "numeroContrato": "1997123478",
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "valorSaldoDevedor": 0
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "codigo": "AB",
        "mensagem": "mock-mensagem",
        "codigoSolicitante": 0,
        "contrato": "mock-contrato"
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
  "defaultStatus": 200
};

/**
 * @route POST /emprestimos/incluir-saldo-devedor-lote-trabalhador
 * @summary Envio de Saldo Devedor de empréstimo do trabalhador em lote
 * Serviço de Envio de Saldo Devedor de empréstimo do trabalhador em lote
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.incluirSaldoDevedorContratoEmLote = {
  "method": "post",
  "path": "/emprestimos/incluir-saldo-devedor-lote-trabalhador",
  "operationId": "incluirSaldoDevedorContratoEmLote_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 999,
      "lote": [
        {
          "numeroContrato": "1997123478",
          "cpfTrabalhador": 87070728050,
          "matricula": "MAT-99999999999999213",
          "codigoInscricaoEmpregador": 1,
          "numeroInscricaoEmpregador": "66106660000160",
          "valorSaldoDevedor": 0
        }
      ]
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "sucessos": [
          {
            "codigo": "AB",
            "mensagem": "mock-mensagem",
            "codigoSolicitante": 0,
            "contrato": "mock-contrato"
          }
        ],
        "falhas": [
          {
            "codigoSolicitante": 0,
            "contrato": "mock-contrato",
            "erros": [
              {
                "codigo": "mock-codigo",
                "mensagem": "mock-mensagem"
              }
            ]
          }
        ]
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
  "defaultStatus": 200
};

/**
 * @route POST /emprestimos/incluir-informacoes-contrato-trabalhador
 * @summary Inclusão de Informações do Contrato
 * Serviço de Inclusão de Informações do Contrato
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Erro na operação solicitada
 */
module.exports.incluirInfoContrato = {
  "method": "post",
  "path": "/emprestimos/incluir-informacoes-contrato-trabalhador",
  "operationId": "incluirInfoContrato_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 997,
      "numeroContrato": "199712345678",
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "contratoEmprestimo": "mock-contratoEmprestimo",
      "indicadorAssinaturaCertDigitalICPBrasil": true,
      "ip": "mock-ip",
      "dataHoraAssinatura": "26072026100000",
      "indicadorAnalfabetismo": true,
      "documentoOficialComFotoFrente": "mock-documentoOficialComFotoFrente",
      "documentoOficialComFotoVerso": "mock-documentoOficialComFotoVerso",
      "registroBiometricoFacial": "mock-registroBiometricoFacial",
      "baseBiometrica": "mock-baseBiometrica",
      "score": 0,
      "indicadorValidacaoComDocOficial": true,
      "latitude": 0,
      "longitude": 0,
      "dispositivo": "mock-dispositivo",
      "nsuContrato": 0,
      "tipoAutenticacao": 0
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "codigo": "AB",
        "cpfTrabalhador": 0,
        "matricula": "mock-matricula",
        "codigoInscricaoEmpregador": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
        "codigoSolicitante": 0,
        "numeroContrato": "mock-numeroContrato"
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

/**
 * @route POST /emprestimos/averbar-portabilidade-trabalhador
 * @summary Averbação de Portabilidade
 * Serviço de Averbação Portabilidade
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.averbarPortabilidade = {
  "method": "post",
  "path": "/emprestimos/averbar-portabilidade-trabalhador",
  "operationId": "averbarPortabilidade_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 999,
      "numeroContrato": "199912345678",
      "numeroUnico": 7234567890123457000,
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "nomeTrabalhador": "Trabalhador Fulano de tal",
      "competenciaInicioDesconto": 202501,
      "dataPrimeiroDesconto": "01012020",
      "dataInicioContrato": "01012025",
      "dataFimContrato": "01012025",
      "numeroParcelas": 10,
      "valorParcela": 100,
      "valorEmprestimo": 1000,
      "valorPago": 120,
      "valorTaxaAnual": 1.2,
      "valorCETAnual": 1.1,
      "valorTaxaMensal": 0.7,
      "valorCETMensal": 0.5,
      "cnpjOperador": "22222222222222",
      "numeroProposta": "NRO_PROP_123",
      "temGarantias": true,
      "valorSaldoDisponivelGarantiaFgts": 500,
      "valorMultaRescisoriaGarantiaFgts": 200,
      "percVerbaRescisoriaGarantia": 15
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
        "competenciaInicioDesconto": 0
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
 * @route POST /emprestimos/averbar-consignado-trabalhador
 * @summary Averbação de Empréstimo Consignado
 * Operação de Averbação de Empréstimo Consignado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.averbar = {
  "method": "post",
  "path": "/emprestimos/averbar-consignado-trabalhador",
  "operationId": "averbar_2",
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
      "nomeTrabalhador": "Trabalhador Fulano de tal",
      "dataInicioContrato": "01012024",
      "competenciaInicioDesconto": "202401",
      "dataFimContrato": "12012024",
      "numeroParcelas": 10,
      "valorLiberado": 1000,
      "valorEmprestimo": 1010,
      "valorParcela": 100,
      "valorIOF": 1,
      "valorTaxaAnual": 5,
      "valorCETAnual": 5,
      "valorTaxaMensal": 0.3,
      "dataPrimeiroDesconto": "02012024",
      "valorCETMensal": 0.3,
      "numeroProposta": "NRO_PROP_123",
      "cnpjOperador": "22222222222222",
      "temGarantias": true,
      "valorSaldoDisponivelGarantiaFgts": 500,
      "valorMultaRescisoriaGarantiaFgts": 200,
      "percVerbaRescisoriaGarantia": 15
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

/**
 * @route POST /emprestimos/antecipar-parcela
 * @summary Antecipação de parcelas do Trabalhador
 * Serviço de antecipação de parcela do trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.anteciparParcela = {
  "method": "post",
  "path": "/emprestimos/antecipar-parcela",
  "operationId": "anteciparParcela_1",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 0,
      "numeroContrato": "1997123478",
      "listaCompetencias": [
        "202501"
      ]
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "codigoSucesso": "AB",
        "mensagem": "mock-mensagem",
        "codigoSolicitante": 0,
        "contrato": "mock-contrato"
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
  "defaultStatus": 200
};

/**
 * @route POST /emprestimos/alterar-consignado-trabalhador
 * @summary Alteração de Empréstimo
 * Serviço de Alteração de Empréstimo
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.alterarEmprestimo = {
  "method": "post",
  "path": "/emprestimos/alterar-consignado-trabalhador",
  "operationId": "alterarEmprestimo_2",
  "request": {
    "query": null,
    "requiredQuery": [],
    "body": {
      "codigoSolicitante": 997,
      "numeroContrato": "mock-numeroContrato",
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT-99999999999999213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "nomeTrabalhador": "mock-nomeTrabalhador",
      "numeroParcelas": 10,
      "valorParcela": 100,
      "cnpjOperador": "22222222222222"
    },
    "requiredBody": true
  },
  "responses": {
    "200": {
      "description": "Operacao efetuada",
      "binary": false,
      "body": {
        "mensagem": "mock-mensagem",
        "numeroContrato": "mock-numeroContrato",
        "codigoSucesso": "AB",
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

/**
 * @route GET /emprestimos/garantias-emprestimos-trabalhador
 * @summary Consulta de Valores das Garantias associadas aos contratos. Serviço Paginado
 * Consulta de Valores das Garantias associadas aos contratos. Serviço paginado, com pagina inicial = 1. Consulta pela Data de Atualização.
 * @param {integer} [codigoSolicitante] - (query, opcional)
 * @param {string} [dataHoraInicio] - (query, opcional)
 * @param {string} [dataHoraFim] - (query, opcional)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.consultaGarantiasEmprestimoTrabalhador = {
  "method": "get",
  "path": "/emprestimos/garantias-emprestimos-trabalhador",
  "operationId": "consultaGarantiasEmprestimoTrabalhador_1",
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
            "ifConcessora": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "contrato": "mock-contrato",
            "cpf": 0,
            "matricula": "mock-matricula",
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "nomeTrabalhador": "mock-nomeTrabalhador",
            "valorParcela": 0,
            "valorEmprestimo": 0,
            "dataHoraInclusaoEmprestimo": "2026-07-26T10:00:00-03:00",
            "dataHoraAtualizacao": "2026-07-26T10:00:00-03:00",
            "situacaoEmprestimo": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "situacaoGarantia": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "garantia": {
              "temGarantias": true,
              "valorSaldoDisponivelGarantiaFgts": 98587.56,
              "valorMultaRescisoriaGarantiaFgts": 5500.45,
              "percVerbaRescisoriaGarantia": 25
            },
            "operacaoFgts": {
              "tipoOperacao": {
                "codigo": null,
                "descricao": null
              },
              "dataHoraOperacao": "2026-07-26T10:00:00-03:00",
              "situacaoGarantia": {
                "codigo": null,
                "descricao": null
              },
              "valorSaldoGarantiaFgts": 100,
              "valorMultaRescisoriaGarantiaFgts": 100,
              "protocolo": 0,
              "nsu": 0,
              "situacaoProtocolo": {
                "codigo": null,
                "descricao": null
              },
              "dataPrevisaoRepasse": "2026-07-26"
            }
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
 * @route GET /emprestimos/emprestimo-situacao-doc-trabalhador
 * @summary Consulta de Situação da Documentação do Empréstimo
 * Serviço de Consulta de Emprestimo Situação da Documentação
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [dataInicialInclusao] - (query, obrigatório)
 * @param {string} [dataFinalInclusao] - (query, obrigatório)
 * @param {integer} [cpfTrabalhador] - (query, opcional)
 * @param {integer} [classificadorModalidade] - (query, opcional)
 * @param {integer} [classificadorSituacaoEmprestimo] - (query, opcional)
 * @param {integer} [classificadorSituacaoDoc] - (query, opcional)
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.consultarEmprestimoSituacaoDoc = {
  "method": "get",
  "path": "/emprestimos/emprestimo-situacao-doc-trabalhador",
  "operationId": "consultarEmprestimoSituacaoDoc_2",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "dataInicialInclusao": "mock-dataInicialInclusao",
      "dataFinalInclusao": "mock-dataFinalInclusao",
      "cpfTrabalhador": 0,
      "classificadorModalidade": 0,
      "classificadorSituacaoEmprestimo": 0,
      "classificadorSituacaoDoc": 3
    },
    "requiredQuery": [
      "codigoSolicitante",
      "dataInicialInclusao",
      "dataFinalInclusao"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": {
        "emprestimos": [
          {
            "codigoSolicitante": 0,
            "cpfTrabalhador": 0,
            "numeroContrato": "mock-numeroContrato",
            "situacaoEmprestimo": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "dataInclusaoEmprestimo": "mock-dataInclusaoEmprestimo",
            "dataEnvioDocumentacao": "mock-dataEnvioDocumentacao",
            "classificadorModalidade": {
              "codigo": 0,
              "descricao": "mock-descricao"
            }
          }
        ],
        "hashOperacao": 0
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
  "defaultStatus": 200
};

/**
 * @route GET /emprestimos/consultar-repasse-pagamentos
 * @summary Consulta de Informações de Repasse de Pagamentos de Empréstimos do Trabalhador
 * Serviço de Consulta de Informações de Repasse de Pagamentos de Empréstimos do Trabalhador. Serviço paginado, com pagina inicial = 1.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [dataHoraInicio] - (query, obrigatório)
 * @param {string} [dataHoraFim] - (query, obrigatório)
 * @param {integer} [cpf] - (query, opcional)
 * @param {integer} [codigoInscricaoEmpregador] - (query, opcional)
 * @param {string} [numeroInscricaoEmpregador] - (query, opcional)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.consultarPagamentos = {
  "method": "get",
  "path": "/emprestimos/consultar-repasse-pagamentos",
  "operationId": "consultarPagamentos_1",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "dataHoraInicio": "mock-dataHoraInicio",
      "dataHoraFim": "mock-dataHoraFim",
      "cpf": 0,
      "codigoInscricaoEmpregador": 0,
      "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
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
            "id": 1250,
            "codigoIF": 997,
            "contrato": "199712345673",
            "valorParcelaPaga": 250,
            "dataHoraPagamentoGuia": "2026-07-26T10:00:00-03:00",
            "dataHoraInclusaoDataprev": "2026-07-26T10:00:00-03:00",
            "dataHoraRepasseIF": "2026-07-26T10:00:00-03:00",
            "numeroGuia": 101758,
            "competencia": 202506,
            "cnpjOperador": "22222222222222",
            "nsu": 10230,
            "cpf": 0,
            "matricula": "mock-matricula",
            "codigoInscricaoEmpregador": 0,
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "codigoTRF": 333333333333333300,
            "valorAtualizacaoMonetaria": 1,
            "valorJurosDeMora": 1,
            "valorMulta": 1,
            "verbasRescisorias": false
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
 * @route GET /emprestimos/consultar-portabilidade-trabalhador
 * @summary Consulta de Portabilidade
 * Servico de Consulta de Portabilidade. 
 * @param {integer} [codigoProponente] - (query, obrigatório) Código do Solicitante do Proponente (CBC)
 * @param {integer} [codigoOrigem] - (query, opcional) Código do Solicitante de Origem (CBC)
 * @param {integer} [numeroUnico] - (query, opcional) Número Único
 * @param {integer} [cpfTrabalhador] - (query, opcional) CPF do Trabalhador
 * @param {string} [matricula] - (query, opcional) Matrícula do Trabalhador
 * @param {integer} [codigoInscricaoEmpregador] - (query, opcional) Tipo de Inscrição do Empregador
 * @param {string} [numeroInscricaoEmpregador] - (query, opcional) Número de Inscrição do Empregador
 * @param {string} [dataInicioOperacao] - (query, opcional) Data hora inicio operação
 * @param {string} [dataFimOperacao] - (query, opcional) Data hora fim operação
 * @param {integer} [classificadorSituacao] - (query, opcional) Tipo da situação operação
 * @param {integer} [nroPagina] - (query, opcional) Número da página para paginação (começa em 1)
 * @returns {200} Operacao efetuada
 * @returns {412} Retorno com erro no servico de Consulta de Portabilidade
 */
module.exports.consultarPortabilidade = {
  "method": "get",
  "path": "/emprestimos/consultar-portabilidade-trabalhador",
  "operationId": "consultarPortabilidade_2",
  "request": {
    "query": {
      "codigoProponente": 995,
      "codigoOrigem": 999,
      "numeroUnico": 7234567890123457000,
      "cpfTrabalhador": 87070728050,
      "matricula": "MAT213",
      "codigoInscricaoEmpregador": 1,
      "numeroInscricaoEmpregador": "66106660000160",
      "dataInicioOperacao": "27052025000000",
      "dataFimOperacao": "30052025235959",
      "classificadorSituacao": 1,
      "nroPagina": 1
    },
    "requiredQuery": [
      "codigoProponente"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Operacao efetuada",
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
            "numeroUnico": 7234567890123457000,
            "cpfTrabalhador": 87070728050,
            "matricula": "MAT213",
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "66106660000160",
            "dataInclusaoPortabilidade": "2026-07-26T10:00:00-03:00",
            "codigoProponente": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroContratoAverbado": "199712345673",
            "dataAverbacao": "2026-07-26T10:00:00-03:00",
            "numeroUnicoNovo": 8234577890123457000,
            "classificadorSituacao": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "contratosExcluidos": [
              {
                "codigoOrigem": null,
                "numeroContratoExcluido": "199912345678",
                "dataExclusao": "2026-07-26T10:00:00-03:00",
                "ultimaParcelaPaga": 3
              }
            ]
          }
        ]
      }
    },
    "412": {
      "description": "Retorno com erro no servico de Consulta de Portabilidade",
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
 * @route GET /emprestimos/consultar-informacoes-contrato-trabalhador
 * @summary Consultar Informações do Contrato
 * Serviço de Consulta de Informações do Contrato
 * @param {integer} [codigoSolicitante] - (query, opcional)
 * @param {string} [numeroContrato] - (query, opcional)
 * @param {integer} [tipoArquivo] - (query, obrigatório)
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
module.exports.consultarInfoContrato = {
  "method": "get",
  "path": "/emprestimos/consultar-informacoes-contrato-trabalhador",
  "operationId": "consultarInfoContrato_2",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "numeroContrato": "0",
      "tipoArquivo": 0
    },
    "requiredQuery": [
      "tipoArquivo"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Operação efetuada",
      "binary": false,
      "body": "string"
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
  "defaultStatus": 200
};

/**
 * @route GET /emprestimos/consultar-escrituracoes-remuneracoes
 * @summary Consulta de eventos de remuneração, escriturados no eSocial, que são referentes a desconto de empréstimos consignados.
 * Serviço de Consulta de eventos de remuneração, escriturados no eSocial, que são referentes a desconto de empréstimos consignados. Serviço paginado, com pagina inicial = 1.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [dataHoraInicio] - (query, obrigatório)
 * @param {string} [dataHoraFim] - (query, obrigatório)
 * @param {integer} [cpf] - (query, opcional)
 * @param {integer} [codigoInscricaoEmpregador] - (query, opcional)
 * @param {string} [numeroInscricaoEmpregador] - (query, opcional)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.consultarEscrituracoes = {
  "method": "get",
  "path": "/emprestimos/consultar-escrituracoes-remuneracoes",
  "operationId": "consultarEscrituracoes_1",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "dataHoraInicio": "mock-dataHoraInicio",
      "dataHoraFim": "mock-dataHoraFim",
      "cpf": 0,
      "codigoInscricaoEmpregador": 0,
      "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
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
            "id": 123,
            "idEvento": "33333333333",
            "periodoReferencia": 202505,
            "codigoIF": 999,
            "contrato": "mock-contrato",
            "valorParcelaDesconto": 0,
            "cpf": 0,
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
            "matricula": "mock-matricula",
            "dataHoraInclusaoDataprev": "2026-07-26T10:00:00-03:00",
            "idEventoExclusao": "mock-idEventoExclusao",
            "dataHoraEventoExclusao": "2026-07-26T10:00:00-03:00",
            "idEventoRetificacao": "mock-idEventoRetificacao",
            "dataHoraEventoRetificacao": "2026-07-26T10:00:00-03:00",
            "emprestimo": {
              "codigoIf": 0,
              "contrato": "mock-contrato",
              "valorParcela": 0
            },
            "analise": {
              "existeTrabalhadorEscriturado": true,
              "existeNumeroContratoEscriturado": true,
              "vinculoCorreto": true,
              "instituicaoFinanceiraCorreta": true,
              "valorParcelaCorreta": true,
              "dadosCorrespondentes": true
            },
            "tipoEventoESocial": {
              "codigo": 0,
              "descricao": "mock-descricao"
            }
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
 * @route GET /emprestimos/consultar-emprestimo-trabalhador
 * @summary Consulta de Empréstimo
 * Servico de Consulta de Empréstimo
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [numeroContrato] - (query, obrigatório)
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
module.exports.consultarContrato = {
  "method": "get",
  "path": "/emprestimos/consultar-emprestimo-trabalhador",
  "operationId": "consultarContrato_2",
  "request": {
    "query": {
      "codigoSolicitante": 0,
      "numeroContrato": "mock-numeroContrato"
    },
    "requiredQuery": [
      "codigoSolicitante",
      "numeroContrato"
    ],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Operacao efetuada",
      "binary": false,
      "body": {
        "ifConcessora": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "contrato": "mock-contrato",
        "cpf": 0,
        "matricula": "mock-matricula",
        "inscricaoEmpregador": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "numeroInscricaoEmpregador": "mock-numeroInscricaoEmpregador",
        "cnpjEmpregadorCompleto": true,
        "nomeTrabalhador": "mock-nomeTrabalhador",
        "nomeEmpregador": "mock-nomeEmpregador",
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
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "dataHoraAtualizacao": "2026-07-26T10:00:00-03:00",
        "situacaoEmprestimo": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "origemExclusao": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "motivoExclusao": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "dataHoraExclusao": "2026-07-26T10:00:00-03:00",
        "dataHoraEnvioInfoContrato": "2026-07-26T10:00:00-03:00",
        "valorIOF": 0,
        "valorTaxaAnual": 0,
        "valorCetAnual": 0,
        "valorTaxaMensal": 0,
        "valorCetMensal": 0,
        "valorTroco": 0,
        "dataPrimeiroDesconto": "2026-07-26",
        "numeroProposta": "mock-numeroProposta",
        "cnpjOperador": "mock-cnpjOperador",
        "informacoesContrato": {
          "arquivosEnviados": [
            {
              "tipoArquivo": 0,
              "descricao": "mock-descricao"
            }
          ],
          "baseBiometrica": "mock-baseBiometrica",
          "score": 0,
          "ip": "mock-ip",
          "dataHoraAssinatura": "2026-07-26T10:00:00-03:00",
          "latitude": 0,
          "longitude": 0,
          "dispositivo": "mock-dispositivo",
          "indicadorAnalfabetismo": true,
          "indicadorAssinaturaCertDigitalICPBrasil": true,
          "indicadorValidacaoComDocOficial": true,
          "nsuContrato": 0,
          "tipoAutenticacao": 0
        },
        "qtdPagamentos": 0,
        "qtdEscrituracoes": 0,
        "pagamentos": [
          {
            "id": 0,
            "valorParcelaPaga": 0,
            "dataHoraPagamentoGuia": "2026-07-26T10:00:00-03:00",
            "dataHoraInclusaoDataprev": "2026-07-26T10:00:00-03:00",
            "dataHoraRepasseIF": "2026-07-26T10:00:00-03:00",
            "numeroGuia": 0,
            "codigoTRF": 0,
            "valorAtualizacaoMonetaria": 1,
            "valorJurosDeMora": 1,
            "valorMulta": 1,
            "verbasRescisorias": false
          }
        ],
        "escrituracoes": [
          {
            "id": 0,
            "periodoReferencia": 0,
            "valorParcelaDesconto": 0,
            "dataHoraInclusaoDataprev": "2026-07-26T10:00:00-03:00"
          }
        ],
        "informacoesPortabilidade": {
          "numeroUnicoAverbacao": "8234567790553456787",
          "numeroUnicoExclusao": "7234567890123456789",
          "codigoProponente": 995,
          "codigoOrigem": 997,
          "valorPago": 120,
          "situacao": {
            "codigo": 0,
            "descricao": "mock-descricao"
          }
        },
        "parcelasAntecipadas": [
          {
            "competencia": 202501,
            "dataHoraInclusao": "2026-07-26T10:00:00-03:00"
          }
        ],
        "saldosDevedor": [
          {
            "dataHoraInclusao": "2026-07-26T10:00:00-03:00",
            "valorSaldoDevedor": 0
          }
        ],
        "situacaoBloqueioGarantia": {
          "codigo": 0,
          "descricao": "mock-descricao"
        },
        "garantia": {
          "temGarantias": true,
          "valorSaldoDisponivelGarantiaFgts": 98587.56,
          "valorMultaRescisoriaGarantiaFgts": 5500.45,
          "percVerbaRescisoriaGarantia": 25
        }
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
 * @route GET /emprestimos/consultar-emprestimo-encerrado-termino-vinculo
 * @summary Consulta de Empréstimos encerrados por término de vínculo
 * Serviço de Consulta de Empréstimos encerrados por término de vínculo. Serviço paginado, com pagina inicial = 1. Consulta pela Data de Atualização.
 * @param {integer} [codigoSolicitante] - (query, opcional)
 * @param {string} [dataHoraInicio] - (query, opcional)
 * @param {string} [dataHoraFim] - (query, opcional)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
module.exports.consultarEmprestimosEncerradosPorDesligamento = {
  "method": "get",
  "path": "/emprestimos/consultar-emprestimo-encerrado-termino-vinculo",
  "operationId": "consultarEmprestimosEncerradosPorDesligamento_1",
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
            "ifConcessora": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "contrato": "199712345673",
            "cpf": 87070728050,
            "matricula": "MAT214",
            "inscricaoEmpregador": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroInscricaoEmpregador": "66106660000160",
            "nomeTrabalhador": "Trabalhador Fulano de tal",
            "nomeEmpregador": "Empresa XYZ Ltda",
            "dataDesligamento": "2026-07-26",
            "motivoDesligamento": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "dataInicioContrato": "2026-07-26",
            "dataFimContrato": "2026-07-26",
            "competenciaInicioDesconto": 202501,
            "competenciaFimDesconto": 202601,
            "totalParcelas": 12,
            "valorParcela": 100,
            "valorEmprestimo": 1200,
            "valorLiberado": 1500,
            "dataHoraInclusaoEmprestimo": "2026-07-26T10:00:00-03:00",
            "dataHoraAtualizacao": "2026-07-26T10:00:00-03:00",
            "situacaoEmprestimo": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "numeroProposta": "557",
            "qtdPagamentos": 10,
            "qtdEscrituracoes": 8,
            "situacaoBloqueioGarantia": {
              "codigo": 0,
              "descricao": "mock-descricao"
            },
            "garantia": {
              "temGarantias": true,
              "valorSaldoDisponivelGarantiaFgts": 98587.56,
              "valorMultaRescisoriaGarantiaFgts": 5500.45,
              "percVerbaRescisoriaGarantia": 25
            }
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
 * @route GET /emprestimos/consultar-calendario-trabalhador
 * @summary Consulta de Calendário
 * @param {integer} [competencia] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Competencia informada e invalida ou data limite das operacoes nao cadastrada
 */
module.exports.consultarCalendario = {
  "method": "get",
  "path": "/emprestimos/consultar-calendario-trabalhador",
  "operationId": "consultarCalendario_1",
  "request": {
    "query": {
      "competencia": 0
    },
    "requiredQuery": [],
    "body": null,
    "requiredBody": false
  },
  "responses": {
    "200": {
      "description": "Consulta efetuada",
      "binary": false,
      "body": {
        "competenciaConsulta": 0,
        "competenciaAtual": 0,
        "dataInicioCompetencia": "2026-07-26",
        "dataFimCompetencia": "2026-07-26"
      }
    },
    "412": {
      "description": "Competencia informada e invalida ou data limite das operacoes nao cadastrada",
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
