'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./trabalhadores.fixtures');

/**
 * Rotas mock do contexto "trabalhadores".
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
 * @route POST /trabalhadores/autorizar-consulta-dados-trabalhador
 * @summary Autorização de Consulta de Dados do Trabalhadores
 * Serviço de Autorização para Consulta de Dados do Trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Autorização Criada
 * @returns {412} Requisição dados inválidos
 */
router.post('/autorizar-consulta-dados-trabalhador', createMockHandler(fixtures.autorizarConsulta));

/**
 * @route GET /trabalhadores/listar-autorizados-trabalhador
 * @summary Consulta de Lista de Vínculos Autorizados
 * Serviço de Consulta da Lista de Vínculos Autorizados
 * @param {integer} [cpf] - (query, obrigatório)
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
router.get('/listar-autorizados-trabalhador', createMockHandler(fixtures.listarVinculosPorCpf));

/**
 * @route GET /trabalhadores/consultar-vinculos-novos-trabalhador
 * @summary Consulta de vínculos novos de CPFs com empréstimos encerrados por término de vínculo.
 * Serviço de Consulta de vínculos novos de CPFs com empréstimos encerrados por término de vínculo. Serviço paginado, com pagina inicial = 1. Consulta pela Data de Atualização do Empréstimo.
 * @param {integer} [codigoSolicitante] - (query, opcional)
 * @param {string} [dataHoraInicio] - (query, opcional)
 * @param {string} [dataHoraFim] - (query, opcional)
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
router.get('/consultar-vinculos-novos-trabalhador', createMockHandler(fixtures.consultarTrabalhadoresComEmprestimosEncerradosPorDesligamento));

/**
 * @route GET /trabalhadores/consultar-saldo-retido-fgts
 * @summary Consulta de Saldo Retido FGTS
 * Consulta o saldo retido (bloqueado) de um pedido de bloqueio FGTS do trabalhador.
 * @param {string} [contrato] - (query, obrigatório)
 * @param {integer} [codigoSolicitante] - (query, obrigatório) Código do Solicitante (CBC)
 * @param {integer} [cpf] - (query, obrigatório) CPF do Trabalhador
 * @param {string} [matricula] - (query, obrigatório) Matrícula do Trabalhador
 * @param {integer} [codigoInscricaoEmpregador] - (query, obrigatório) Tipo de Inscrição do Empregador
 * @param {string} [numeroInscricaoEmpregador] - (query, obrigatório) Número de Inscrição do Empregador
 * @returns {200} Consulta realizada com sucesso
 * @returns {412} Erro na Operacao solicitada
 */
router.get('/consultar-saldo-retido-fgts', createMockHandler(fixtures.consultarSaldoRetidoFgts));

/**
 * @route GET /trabalhadores/consultar-saldo-fgts
 * @summary Consulta de Saldo FGTS Disponível
 * Consulta o saldo FGTS disponível para garantia de E-Consignado do trabalhador.
 * @param {integer} [codigoSolicitante] - (query, obrigatório) Código do Solicitante (CBC)
 * @param {integer} [cpf] - (query, obrigatório) CPF do Trabalhador
 * @param {string} [matricula] - (query, obrigatório) Matrícula do Trabalhador
 * @param {integer} [codigoInscricaoEmpregador] - (query, obrigatório) Tipo de Inscrição do Empregador
 * @param {string} [numeroInscricaoEmpregador] - (query, obrigatório) Número de Inscrição do Empregador
 * @returns {200} Consulta realizada com sucesso
 * @returns {412} Erro na Operacao solicitada
 */
router.get('/consultar-saldo-fgts', createMockHandler(fixtures.consultarSaldoFgts));

/**
 * @route GET /trabalhadores/consultar-dados-trabalhador
 * @summary Consulta de Dados de Vínculo do Trabalhador
 * Serviço de Consulta de dados de Vínculo do Trabalhador
 * @param {integer} [codigoSolicitante] - (query, obrigatório) Código do Solicitante (CBC)
 * @param {integer} [cpf] - (query, obrigatório) CPF do Trabalhador
 * @param {string} [matricula] - (query, obrigatório) Matrícula do Trabalhador
 * @param {integer} [codigoInscricaoEmpregador] - (query, obrigatório) Tipo de Inscrição do Empregador
 * @param {string} [numeroInscricaoEmpregador] - (query, obrigatório) Número de Inscrição do Empregador
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
router.get('/consultar-dados-trabalhador', createMockHandler(fixtures.consultarDados));

/**
 * @route GET /trabalhadores/consultar-dados-tombamento-compulsorio
 * @summary Consulta de dados básicos de vínculos por CPF para tombamento compulsório
 * Serviço para ajudar as instituições que informaram contratos legados, permitindo que, a partir do CPF, elas obtenham informações básicas dos vínculos ativos do trabalhador.
 * @param {integer} [cpf] - (query, obrigatório)
 * @returns {200} Operação efetuada
 * @returns {412} Retorno com erros
 */
router.get('/consultar-dados-tombamento-compulsorio', createMockHandler(fixtures.obterVinculosTrabalhador));

/**
 * @route GET /trabalhadores/consultar-autorizacoes-saldo-fgts
 * @summary Consulta de Autorizações de Consulta de Saldo FGTS 
 * Consulta de Autorizações de Consulta de Saldo FGTS do Trabalhador por período de início e fim .
 * @param {string} [dataHoraInicio] - (query, obrigatório) Data/Hora Início Autorização no formato ddMMyyyyHHmmss
 * @param {string} [dataHoraFim] - (query, obrigatório) Data/Hora Fim Autorização no formato ddMMyyyyHHmmss
 * @param {integer} [codigoSolicitante] - (query, obrigatório) Código do Solicitante (CBC) 
 * @param {integer} [cpf] - (query, opcional) CPF do Trabalhador 
 * @param {boolean} [ativos] - (query, opcional) Autorizações Ativas 
 * @param {integer} [nroPagina] - (query, opcional)
 * @returns {200} Consulta realizada com sucesso
 * @returns {412} Erro na Operacao solicitada
 */
router.get('/consultar-autorizacoes-saldo-fgts', createMockHandler(fixtures.consultarAutorizacaoSaldoFgts));

module.exports = router;
