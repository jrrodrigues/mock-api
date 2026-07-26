'use strict';

const express = require('express');
const { createMockHandler } = require('../../lib/mock-handler');
const fixtures = require('./emprestimos.fixtures');

/**
 * Rotas mock do contexto "emprestimos".
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
 * @route PUT /emprestimos/suspender-consignado-trabalhador
 * @summary Suspensão de Empréstimo
 * Operação de Suspensão de Empréstimo
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.put('/suspender-consignado-trabalhador', createMockHandler(fixtures.suspenderEmprestimo));

/**
 * @route PUT /emprestimos/reativar-consignado-trabalhador
 * @summary Reativação de Empréstimo
 * Operação de Reativação de Empréstimo
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.put('/reativar-consignado-trabalhador', createMockHandler(fixtures.reativarEmprestimo));

/**
 * @route PUT /emprestimos/excluir-portabilidade-trabalhador
 * @summary Exclusão de Portabilidade
 * Operacao de Exclusão de Portabilidade
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.put('/excluir-portabilidade-trabalhador', createMockHandler(fixtures.excluirPortabilidade));

/**
 * @route PUT /emprestimos/excluir-consignado-trabalhador
 * @summary Exclusão de Consignado
 * Serviço de de Exclusao de Consignado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.put('/excluir-consignado-trabalhador', createMockHandler(fixtures.excluirConsignado));

/**
 * @route PUT /emprestimos/excluir-antecipar-parcela
 * @summary Exclusão de antecipação de parcela do Trabalhador
 * Serviço de exclusão de antecipação de parcela do trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.put('/excluir-antecipar-parcela', createMockHandler(fixtures.excluirParcelaAntecipada));

/**
 * @route PUT /emprestimos/alterar-nu-portabilidade-trabalhador
 * @summary Alteração de Número Único da Portabilidade
 * Operacao de Alteração do Numero Único da Portabilidade
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.put('/alterar-nu-portabilidade-trabalhador', createMockHandler(fixtures.alterarNroUnicoPortabilidade));

/**
 * @route PUT /emprestimos/alterar-consignado-encerrado-trabalhador
 * @summary Alteração de Empréstimo Encerrado por término de vínculo
 * Serviço de Alteração de Empréstimo Encerrado por término de vínculo
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.put('/alterar-consignado-encerrado-trabalhador', createMockHandler(fixtures.alterarEmprestimoEncerrado));

/**
 * @route PUT /emprestimos/alterar-cbc-portabilidade-trabalhador
 * @summary Alteração de CBC Portabilidade
 * Operacao de Alteracao CBC Portabilidade
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.put('/alterar-cbc-portabilidade-trabalhador', createMockHandler(fixtures.alterarCBCPortabilidade));

/**
 * @route POST /emprestimos/troca-titularidade-lote-trabalhador
 * @summary Troca de Titularidade de Empréstimo Consignado em lote
 * Serviço de Troca de Titularidade de Empréstimo Consignado em lote
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Erro na operação solicitada
 */
router.post('/troca-titularidade-lote-trabalhador', createMockHandler(fixtures.incluirTrocaDeTitularidadeEmLote));

/**
 * @route POST /emprestimos/tombamento-compulsorio
 * @summary Tombamento Compulsório
 * Serviço de Tombamento de Empréstimo Consignado Trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.post('/tombamento-compulsorio', createMockHandler(fixtures.averbarTombamento));

/**
 * @route POST /emprestimos/reverter-refinanciamento-trabalhador
 * @summary Reversão de Refinanciamento do Trabalhador
 * Serviço de Reversão de Refinanciamento do Trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.post('/reverter-refinanciamento-trabalhador', createMockHandler(fixtures.reverterRefinanciamento));

/**
 * @route POST /emprestimos/renegociar-consignado-trabalhador
 * @summary Renegociação de Empréstimo Consignado encerrado
 * Operação de Renegociação de Empréstimo Consignado encerrado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.post('/renegociar-consignado-trabalhador', createMockHandler(fixtures.renegociar));

/**
 * @route POST /emprestimos/realizar-refinanciamento-trabalhador
 * @summary Averbação de Refinanciamento do Trabalhador
 * Serviço de Averbação de Refinanciamento do Trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.post('/realizar-refinanciamento-trabalhador', createMockHandler(fixtures.refinanciar));

/**
 * @route POST /emprestimos/incluir-saldo-devedor-trabalhador
 * @summary Envio de Saldo Devedor de empréstimo do trabalhador
 * Serviço de Envio de Saldo Devedor de empréstimo do trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/incluir-saldo-devedor-trabalhador', createMockHandler(fixtures.incluirSaldoDevedorContrato));

/**
 * @route POST /emprestimos/incluir-saldo-devedor-lote-trabalhador
 * @summary Envio de Saldo Devedor de empréstimo do trabalhador em lote
 * Serviço de Envio de Saldo Devedor de empréstimo do trabalhador em lote
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/incluir-saldo-devedor-lote-trabalhador', createMockHandler(fixtures.incluirSaldoDevedorContratoEmLote));

/**
 * @route POST /emprestimos/incluir-informacoes-contrato-trabalhador
 * @summary Inclusão de Informações do Contrato
 * Serviço de Inclusão de Informações do Contrato
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Erro na operação solicitada
 */
router.post('/incluir-informacoes-contrato-trabalhador', createMockHandler(fixtures.incluirInfoContrato));

/**
 * @route POST /emprestimos/averbar-portabilidade-trabalhador
 * @summary Averbação de Portabilidade
 * Serviço de Averbação Portabilidade
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.post('/averbar-portabilidade-trabalhador', createMockHandler(fixtures.averbarPortabilidade));

/**
 * @route POST /emprestimos/averbar-consignado-trabalhador
 * @summary Averbação de Empréstimo Consignado
 * Operação de Averbação de Empréstimo Consignado
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.post('/averbar-consignado-trabalhador', createMockHandler(fixtures.averbar));

/**
 * @route POST /emprestimos/antecipar-parcela
 * @summary Antecipação de parcelas do Trabalhador
 * Serviço de antecipação de parcela do trabalhador
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operação efetuada
 * @returns {412} Requisição com dados inválidos
 */
router.post('/antecipar-parcela', createMockHandler(fixtures.anteciparParcela));

/**
 * @route POST /emprestimos/alterar-consignado-trabalhador
 * @summary Alteração de Empréstimo
 * Serviço de Alteração de Empréstimo
 * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.post('/alterar-consignado-trabalhador', createMockHandler(fixtures.alterarEmprestimo));

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
router.get('/garantias-emprestimos-trabalhador', createMockHandler(fixtures.consultaGarantiasEmprestimoTrabalhador));

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
router.get('/emprestimo-situacao-doc-trabalhador', createMockHandler(fixtures.consultarEmprestimoSituacaoDoc));

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
router.get('/consultar-repasse-pagamentos', createMockHandler(fixtures.consultarPagamentos));

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
router.get('/consultar-portabilidade-trabalhador', createMockHandler(fixtures.consultarPortabilidade));

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
router.get('/consultar-informacoes-contrato-trabalhador', createMockHandler(fixtures.consultarInfoContrato));

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
router.get('/consultar-escrituracoes-remuneracoes', createMockHandler(fixtures.consultarEscrituracoes));

/**
 * @route GET /emprestimos/consultar-emprestimo-trabalhador
 * @summary Consulta de Empréstimo
 * Servico de Consulta de Empréstimo
 * @param {integer} [codigoSolicitante] - (query, obrigatório)
 * @param {string} [numeroContrato] - (query, obrigatório)
 * @returns {200} Operacao efetuada
 * @returns {412} Erro na Operacao solicitada
 */
router.get('/consultar-emprestimo-trabalhador', createMockHandler(fixtures.consultarContrato));

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
router.get('/consultar-emprestimo-encerrado-termino-vinculo', createMockHandler(fixtures.consultarEmprestimosEncerradosPorDesligamento));

/**
 * @route GET /emprestimos/consultar-calendario-trabalhador
 * @summary Consulta de Calendário
 * @param {integer} [competencia] - (query, opcional)
 * @returns {200} Consulta efetuada
 * @returns {412} Competencia informada e invalida ou data limite das operacoes nao cadastrada
 */
router.get('/consultar-calendario-trabalhador', createMockHandler(fixtures.consultarCalendario));

module.exports = router;
