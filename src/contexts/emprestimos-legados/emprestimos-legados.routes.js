'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./emprestimos-legados.fixtures');

/**
 * Rotas mock do contexto "emprestimos-legados".
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
 * @route PUT /emprestimos-legados/excluir-emprestimo-legado-trabalhador
 * @summary Exclusão de Empréstimo Legado
 * Serviço de Exclusão de Empréstimo Legado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.put('/excluir-emprestimo-legado-trabalhador', createMockHandler(fixtures.exclusao));

/**
 * @route POST /emprestimos-legados/incluir-emprestimo-legado-trabalhador
 * @summary Inclusão de Empréstimo Legado
 * Serviço de Inclusão de Empréstimo Legado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.post('/incluir-emprestimo-legado-trabalhador', createMockHandler(fixtures.inclusao));

module.exports = router;
