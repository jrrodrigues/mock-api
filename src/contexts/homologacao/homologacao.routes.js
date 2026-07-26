'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./homologacao.fixtures');

/**
 * Rotas mock do contexto "homologacao".
 *
 * Gerado automaticamente por scripts/generate.js a partir de swagger/swagger.json
 * (NÃO EDITE À MÃO — rode `npm run generate` novamente após alterar o swagger.json).
 *
 * Cada handler é genérico (ver src/lib/mock-handler.js): valida presença de body/query
 * obrigatórios e devolve o exemplo de Response documentado no swagger para a operação
 * (ou uma resposta forçada via `?_status=<codigo>`).
 */

const router = express.Router();

/**
 * @route POST /homologacao/solicitacao-portabilidade-extra-trabalhador
 * @summary Inclusão de Solicitação de Propostas de Portabilidade Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * Inclusão de solicitação de propostas de portabilidade trabalhador extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/solicitacao-portabilidade-extra-trabalhador', createMockHandler(fixtures.incluirSolicitacaoPortabilidadeExtraTrabalhador));

/**
 * @route POST /homologacao/solicitacao-extra-trabalhador
 * @summary Inclusão de Solicitação de Propostas Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * Inclusão de solicitação de propostas trabalhador extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/solicitacao-extra-trabalhador', createMockHandler(fixtures.incluirSolicitacaoExtraTrabalhador));

/**
 * @route POST /homologacao/pagamento-extra-trabalhador
 * @summary Inclusão de Pagamento/Repasse de Empréstimo Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/pagamento-extra-trabalhador', createMockHandler(fixtures.incluirPagamentoExtraTrabalhador));

/**
 * @route POST /homologacao/massa-extra-trabalhador
 * @summary Inclusão de Massa Extra de Dados de Trabalhador para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * Inclusão de massa extra de dados de trabalhador para testes. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/massa-extra-trabalhador', createMockHandler(fixtures.incluirMassaExtraTrabalhador));

/**
 * @route POST /homologacao/escrituracao-extra-trabalhador
 * @summary Inclusão de eventos de remuneração, escriturados no eSocial, que são referentes a desconto de empréstimos consignados.
 * Inclusão de eventos de remuneração, escriturados no eSocial, que são referentes a desconto de empréstimos consignados. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/escrituracao-extra-trabalhador', createMockHandler(fixtures.incluirEscrituracaoExtraTrabalhador));

/**
 * @route POST /homologacao/emprestimo-consignado-trabalhador-extra
 * @summary Inclusão massa extra de Empréstimo Consignado Trabalhador.
 * Inclusão massa extra de Empréstimo Consignado Trabalhador. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/emprestimo-consignado-trabalhador-extra', createMockHandler(fixtures.incluirEmprestimoConsignadoTrabalhador));

/**
 * @route POST /homologacao/autorizacoes-saldo-fgts
 * @summary Inclusão massa extra de autorização de consulta de saldo de FGTS.
 * Inclusão massa extra de autorização de consulta de saldo de FGTS. Somente em ambiente de HOMOLOGAÇÃO.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {201} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/autorizacoes-saldo-fgts', createMockHandler(fixtures.incluirAutorizacaoConsultaSaldoFgts));

module.exports = router;
