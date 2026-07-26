'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./garantias.fixtures');

/**
 * Rotas mock do contexto "garantias".
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
 * @route POST /garantias/execucao-garantias-fgts
 * @summary Execução de Garantia de Empréstimo
 * Serviço destinado à execução de garantias de empréstimos encerrados em decorrência do término do vínculo empregatício.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Execução de garantia realizada com sucesso
 * @returns {412} Erro na operação solicitada
 */
router.post('/execucao-garantias-fgts', createMockHandler(fixtures.executarGarantia));

module.exports = router;
