'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./arquivos.fixtures');

/**
 * Rotas mock do contexto "arquivos".
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
 * @route POST /arquivos/upload-arquivo
 * @summary Upload de arquivos do Consignado Trabalhador.
 * Serviço para upload de arquivos pelas instituições financeiras do Consignado Trabalhador.
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
router.post('/upload-arquivo', createMockHandler(fixtures.uploadArquivoTrabalhador));

module.exports = router;
