'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./propostas-portabilidade-ctps.fixtures');

/**
 * Rotas mock do contexto "propostas-portabilidade-ctps".
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
 * @route POST /propostas-portabilidade-ctps/inclusao-garantias
 * @summary Realização de Proposta de Portabilidade com garantias para solicitação realizada via CTPS Digital
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisicao com dados invalidos
 */
router.post('/inclusao-garantias', createMockHandler(fixtures.realizarPropostaComGarantias));

/**
 * @route POST /propostas-portabilidade-ctps/inclusao
 * @summary (DEPRECIADO) Realização de Proposta de Portabilidade para solicitação realizada via CTPS Digital (deprecated: usar /propostas-portabilidade-ctps/inclusao-garantias)
 * Realização de Proposta de Portabilidade para solicitação realizada via CTPS Digital
 * @deprecated Endpoint sinalizado como depreciado no swagger.json.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisicao com dados invalidos
 */
router.post('/inclusao', createMockHandler(fixtures.realizarProposta));

/**
 * @route GET /propostas-portabilidade-ctps/solicitacoes-trabalhador-paginado
 * @summary Consulta de Solicitações de Propostas de Portabilidade válidas (paginado) realizadas via CTPS Digital.
 * Consulta de Solicitações de Propostas de Portabilidade válidas (não expiradas) realizadas via CTPS Digital. Paginação inicial em 1.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [dataHoraInicio] - (query, obrigatório)
 * @param {string} [dataHoraFim] - (query, obrigatório)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Requisicao com dados invalidos
 */
router.get('/solicitacoes-trabalhador-paginado', createMockHandler(fixtures.consultarSolicitacoesPropostasPortabiliaddePaginado));

module.exports = router;
