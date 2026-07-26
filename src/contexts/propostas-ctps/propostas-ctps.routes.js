'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./propostas-ctps.fixtures');

/**
 * Rotas mock do contexto "propostas-ctps".
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
 * @route POST /propostas-ctps/inclusao-garantias
 * @summary Realização de Proposta(s) com garantias para solicitação realizada via CTPS Digital
 * Realização de Proposta(s) com garantias para solicitação realizada via CTPS Digital. Se solicitação COM garantia: a) 2 propostas (1 com e 1 sem garantia), b) 1 proposta com garantia, ou c) 1 proposta sem garantia. Se solicitação SEM garantia, deve ser enviada 1 proposta sem garantia.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisicao com dados invalidos
 */
router.post('/inclusao-garantias', createMockHandler(fixtures.realizarPropostaComGarantias));

/**
 * @route POST /propostas-ctps/inclusao
 * @summary (DEPRECIADO) Realização de Proposta para solicitação realizada via CTPS Digital (deprec ated: usar /propostas-ctps/inclusao-garantias)
 * Realização de Proposta para solicitação realizada via CTPS Digital. Serviço descontinuado: não aceita solicitações com garantia.
 * @deprecated Endpoint sinalizado como depreciado no swagger.json.
 * @returns {200} Operação efetuada
 * @returns {412} Requisicao com dados invalidos
 */
router.post('/inclusao', createMockHandler(fixtures.realizarProposta));

/**
 * @route GET /propostas-ctps/solicitacoes-trabalhador-paginado
 * @summary Consulta de Solicitações de Propostas válidas (paginado) realizadas via CTPS Digital.
 * Consulta de Solicitações de Propostas válidas (não expiradas) realizadas via CTPS Digital. Paginação inicial em 1.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [dataHoraInicio] - (query, obrigatório)
 * @param {string} [dataHoraFim] - (query, obrigatório)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Requisicao com dados invalidos
 */
router.get('/solicitacoes-trabalhador-paginado', createMockHandler(fixtures.consultarSolicitacoesPropostasPaginado));

/**
 * @route GET /propostas-ctps/solicitacoes-trabalhador
 * @summary (DEPRECIADO) Consulta de Solicitações de Propostas válidas realizadas via CTPS Digital.
 * (DEPRECIADO) Consulta de Solicitações de Propostas válidas (não expiradas) realizadas via CTPS Digital.
 * @deprecated Endpoint sinalizado como depreciado no swagger.json.
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {integer} [idSolicitacaoProposta] - (query, opcional)
 * @param {string} [dataHoraInicio] - (query, opcional)
 * @param {string} [dataHoraFim] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Requisicao com dados invalidos
 */
router.get('/solicitacoes-trabalhador', createMockHandler(fixtures.consultarSolicitacoesPropostas));

module.exports = router;
