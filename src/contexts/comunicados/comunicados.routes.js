'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./comunicados.fixtures');

/**
 * Rotas mock do contexto "comunicados".
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
 * @route PUT /comunicados/marcar-leitura-comunicado
 * @summary Marcação de comunicado como lido
 * Marcação de um comunicado como lido.
 * @param {integer} [numero] - (query, obrigatório)
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @returns {200} Comunicado marcado como lido com sucesso.
 * @returns {412} Erro na operação solicitada
 */
router.put('/marcar-leitura-comunicado', createMockHandler(fixtures.marcarLeitura));

/**
 * @route GET /comunicados/consultar-comunicados
 * @summary Consulta de comunicados
 * Consulta de comunicados.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @returns {200} Consulta efetuada com sucesso.
 * @returns {412} Erro na operação solicitada
 */
router.get('/consultar-comunicados', createMockHandler(fixtures.obterComunicados));

/**
 * @route GET /comunicados/consultar-comunicado
 * @summary Consulta de comunicado
 * Serviço de Consulta de comunicado por número.
 * @param {integer} [numero] - (query, obrigatório)
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @returns {200} Consulta efetuada com sucesso.
 * @returns {412} Erro na operação solicitada
 */
router.get('/consultar-comunicado', createMockHandler(fixtures.obterComunicado));

module.exports = router;
