'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./consultas-trabalhador.fixtures');

/**
 * Rotas mock do contexto "consultas-trabalhador".
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
 * @route GET /consultas-trabalhador/download-arquivo/{id}
 * @summary Download de Arquivo Credito do Trabalhador
 * Download de Arquivo eConsignado Trabalhador
 * @param {integer} id - (path, obrigatório)
 * @returns {200} Download efetuado
 * @returns {412} Arquivo solicitado no localizado
 */
router.get('/download-arquivo/:id', createMockHandler(fixtures.obterArquivo));

/**
 * @route GET /consultas-trabalhador/consultar-arquivos
 * @summary Consulta de Arquivos do Credito do Trabalhador
 * Consulta de Arquivos do eConsignado Trabalhador
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {integer} [tipoArquivo] - (query, opcional)
 * @param {string} [dataGeracaoArquivoDe] - (query, opcional)
 * @param {string} [dataGeracaoArquivoAte] - (query, opcional)
 * @param {string} [dataInicioPeriodoDe] - (query, opcional)
 * @param {string} [dataInicioPeriodoAte] - (query, opcional)
 * @param {integer} [competencia] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Requisicao com dados invalidos
 */
router.get('/consultar-arquivos', createMockHandler(fixtures.obterArquivos));

module.exports = router;
