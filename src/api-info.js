'use strict';

/**
 * Metadados expostos em GET / — gerado automaticamente por scripts/generate.js.
 */
module.exports = {
  "nome": "eConsignadoTrabalhador",
  "descricao": "Mock local de \"eConsignadoTrabalhador\" gerado a partir de swagger/swagger.json",
  "versaoOriginal": "v1.0.0",
  "totalEndpoints": 60,
  "contextos": [
    "arquivos",
    "comunicados",
    "consultas-trabalhador",
    "emprestimos",
    "emprestimos-legados",
    "garantias",
    "homologacao",
    "propostas-ctps",
    "propostas-portabilidade-ctps",
    "trabalhadores"
  ],
  "endpoints": [
    {
      "context": "comunicados",
      "method": "PUT",
      "path": "/comunicados/marcar-leitura-comunicado",
      "summary": "Marcação de comunicado como lido",
      "deprecated": false
    },
    {
      "context": "comunicados",
      "method": "GET",
      "path": "/comunicados/consultar-comunicados",
      "summary": "Consulta de comunicados",
      "deprecated": false
    },
    {
      "context": "comunicados",
      "method": "GET",
      "path": "/comunicados/consultar-comunicado",
      "summary": "Consulta de comunicado",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "PUT",
      "path": "/emprestimos/suspender-consignado-trabalhador",
      "summary": "Suspensão de Empréstimo",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "PUT",
      "path": "/emprestimos/reativar-consignado-trabalhador",
      "summary": "Reativação de Empréstimo",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "PUT",
      "path": "/emprestimos/excluir-portabilidade-trabalhador",
      "summary": "Exclusão de Portabilidade",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "PUT",
      "path": "/emprestimos/excluir-consignado-trabalhador",
      "summary": "Exclusão de Consignado",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "PUT",
      "path": "/emprestimos/excluir-antecipar-parcela",
      "summary": "Exclusão de antecipação de parcela do Trabalhador",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "PUT",
      "path": "/emprestimos/alterar-nu-portabilidade-trabalhador",
      "summary": "Alteração de Número Único da Portabilidade",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "PUT",
      "path": "/emprestimos/alterar-consignado-encerrado-trabalhador",
      "summary": "Alteração de Empréstimo Encerrado por término de vínculo",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "PUT",
      "path": "/emprestimos/alterar-cbc-portabilidade-trabalhador",
      "summary": "Alteração de CBC Portabilidade",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/troca-titularidade-lote-trabalhador",
      "summary": "Troca de Titularidade de Empréstimo Consignado em lote",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/tombamento-compulsorio",
      "summary": "Tombamento Compulsório",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/reverter-refinanciamento-trabalhador",
      "summary": "Reversão de Refinanciamento do Trabalhador",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/renegociar-consignado-trabalhador",
      "summary": "Renegociação de Empréstimo Consignado encerrado",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/realizar-refinanciamento-trabalhador",
      "summary": "Averbação de Refinanciamento do Trabalhador",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/incluir-saldo-devedor-trabalhador",
      "summary": "Envio de Saldo Devedor de empréstimo do trabalhador",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/incluir-saldo-devedor-lote-trabalhador",
      "summary": "Envio de Saldo Devedor de empréstimo do trabalhador em lote",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/incluir-informacoes-contrato-trabalhador",
      "summary": "Inclusão de Informações do Contrato",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/averbar-portabilidade-trabalhador",
      "summary": "Averbação de Portabilidade",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/averbar-consignado-trabalhador",
      "summary": "Averbação de Empréstimo Consignado",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/antecipar-parcela",
      "summary": "Antecipação de parcelas do Trabalhador",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "POST",
      "path": "/emprestimos/alterar-consignado-trabalhador",
      "summary": "Alteração de Empréstimo",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/garantias-emprestimos-trabalhador",
      "summary": "Consulta de Valores das Garantias associadas aos contratos. Serviço Paginado",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/emprestimo-situacao-doc-trabalhador",
      "summary": "Consulta de Situação da Documentação do Empréstimo",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/consultar-repasse-pagamentos",
      "summary": "Consulta de Informações de Repasse de Pagamentos de Empréstimos do Trabalhador",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/consultar-portabilidade-trabalhador",
      "summary": "Consulta de Portabilidade",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/consultar-informacoes-contrato-trabalhador",
      "summary": "Consultar Informações do Contrato",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/consultar-escrituracoes-remuneracoes",
      "summary": "Consulta de eventos de remuneração, escriturados no eSocial, que são referentes a desconto de empréstimos consignados.",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/consultar-emprestimo-trabalhador",
      "summary": "Consulta de Empréstimo",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/consultar-emprestimo-encerrado-termino-vinculo",
      "summary": "Consulta de Empréstimos encerrados por término de vínculo",
      "deprecated": false
    },
    {
      "context": "emprestimos",
      "method": "GET",
      "path": "/emprestimos/consultar-calendario-trabalhador",
      "summary": "Consulta de Calendário",
      "deprecated": false
    },
    {
      "context": "emprestimos-legados",
      "method": "PUT",
      "path": "/emprestimos-legados/excluir-emprestimo-legado-trabalhador",
      "summary": "Exclusão de Empréstimo Legado",
      "deprecated": false
    },
    {
      "context": "emprestimos-legados",
      "method": "POST",
      "path": "/emprestimos-legados/incluir-emprestimo-legado-trabalhador",
      "summary": "Inclusão de Empréstimo Legado",
      "deprecated": false
    },
    {
      "context": "trabalhadores",
      "method": "POST",
      "path": "/trabalhadores/autorizar-consulta-dados-trabalhador",
      "summary": "Autorização de Consulta de Dados do Trabalhadores",
      "deprecated": false
    },
    {
      "context": "trabalhadores",
      "method": "GET",
      "path": "/trabalhadores/listar-autorizados-trabalhador",
      "summary": "Consulta de Lista de Vínculos Autorizados",
      "deprecated": false
    },
    {
      "context": "trabalhadores",
      "method": "GET",
      "path": "/trabalhadores/consultar-vinculos-novos-trabalhador",
      "summary": "Consulta de vínculos novos de CPFs com empréstimos encerrados por término de vínculo.",
      "deprecated": false
    },
    {
      "context": "trabalhadores",
      "method": "GET",
      "path": "/trabalhadores/consultar-saldo-retido-fgts",
      "summary": "Consulta de Saldo Retido FGTS",
      "deprecated": false
    },
    {
      "context": "trabalhadores",
      "method": "GET",
      "path": "/trabalhadores/consultar-saldo-fgts",
      "summary": "Consulta de Saldo FGTS Disponível",
      "deprecated": false
    },
    {
      "context": "trabalhadores",
      "method": "GET",
      "path": "/trabalhadores/consultar-dados-trabalhador",
      "summary": "Consulta de Dados de Vínculo do Trabalhador",
      "deprecated": false
    },
    {
      "context": "trabalhadores",
      "method": "GET",
      "path": "/trabalhadores/consultar-dados-tombamento-compulsorio",
      "summary": "Consulta de dados básicos de vínculos por CPF para tombamento compulsório",
      "deprecated": false
    },
    {
      "context": "trabalhadores",
      "method": "GET",
      "path": "/trabalhadores/consultar-autorizacoes-saldo-fgts",
      "summary": "Consulta de Autorizações de Consulta de Saldo FGTS ",
      "deprecated": false
    },
    {
      "context": "propostas-portabilidade-ctps",
      "method": "POST",
      "path": "/propostas-portabilidade-ctps/inclusao-garantias",
      "summary": "Realização de Proposta de Portabilidade com garantias para solicitação realizada via CTPS Digital",
      "deprecated": false
    },
    {
      "context": "propostas-portabilidade-ctps",
      "method": "POST",
      "path": "/propostas-portabilidade-ctps/inclusao",
      "summary": "(DEPRECIADO) Realização de Proposta de Portabilidade para solicitação realizada via CTPS Digital (deprecated: usar /propostas-portabilidade-ctps/inclusao-garantias)",
      "deprecated": true
    },
    {
      "context": "propostas-portabilidade-ctps",
      "method": "GET",
      "path": "/propostas-portabilidade-ctps/solicitacoes-trabalhador-paginado",
      "summary": "Consulta de Solicitações de Propostas de Portabilidade válidas (paginado) realizadas via CTPS Digital.",
      "deprecated": false
    },
    {
      "context": "propostas-ctps",
      "method": "POST",
      "path": "/propostas-ctps/inclusao-garantias",
      "summary": "Realização de Proposta(s) com garantias para solicitação realizada via CTPS Digital",
      "deprecated": false
    },
    {
      "context": "propostas-ctps",
      "method": "POST",
      "path": "/propostas-ctps/inclusao",
      "summary": "(DEPRECIADO) Realização de Proposta para solicitação realizada via CTPS Digital (deprec ated: usar /propostas-ctps/inclusao-garantias)",
      "deprecated": true
    },
    {
      "context": "propostas-ctps",
      "method": "GET",
      "path": "/propostas-ctps/solicitacoes-trabalhador-paginado",
      "summary": "Consulta de Solicitações de Propostas válidas (paginado) realizadas via CTPS Digital.",
      "deprecated": false
    },
    {
      "context": "propostas-ctps",
      "method": "GET",
      "path": "/propostas-ctps/solicitacoes-trabalhador",
      "summary": "(DEPRECIADO) Consulta de Solicitações de Propostas válidas realizadas via CTPS Digital.",
      "deprecated": true
    },
    {
      "context": "homologacao",
      "method": "POST",
      "path": "/homologacao/solicitacao-portabilidade-extra-trabalhador",
      "summary": "Inclusão de Solicitação de Propostas de Portabilidade Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.",
      "deprecated": false
    },
    {
      "context": "homologacao",
      "method": "POST",
      "path": "/homologacao/solicitacao-extra-trabalhador",
      "summary": "Inclusão de Solicitação de Propostas Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.",
      "deprecated": false
    },
    {
      "context": "homologacao",
      "method": "POST",
      "path": "/homologacao/pagamento-extra-trabalhador",
      "summary": "Inclusão de Pagamento/Repasse de Empréstimo Trabalhador Extra para testes. Somente em ambiente de HOMOLOGAÇÃO.",
      "deprecated": false
    },
    {
      "context": "homologacao",
      "method": "POST",
      "path": "/homologacao/massa-extra-trabalhador",
      "summary": "Inclusão de Massa Extra de Dados de Trabalhador para testes. Somente em ambiente de HOMOLOGAÇÃO.",
      "deprecated": false
    },
    {
      "context": "homologacao",
      "method": "POST",
      "path": "/homologacao/escrituracao-extra-trabalhador",
      "summary": "Inclusão de eventos de remuneração, escriturados no eSocial, que são referentes a desconto de empréstimos consignados.",
      "deprecated": false
    },
    {
      "context": "homologacao",
      "method": "POST",
      "path": "/homologacao/emprestimo-consignado-trabalhador-extra",
      "summary": "Inclusão massa extra de Empréstimo Consignado Trabalhador.",
      "deprecated": false
    },
    {
      "context": "homologacao",
      "method": "POST",
      "path": "/homologacao/autorizacoes-saldo-fgts",
      "summary": "Inclusão massa extra de autorização de consulta de saldo de FGTS.",
      "deprecated": false
    },
    {
      "context": "garantias",
      "method": "POST",
      "path": "/garantias/execucao-garantias-fgts",
      "summary": "Execução de Garantia de Empréstimo",
      "deprecated": false
    },
    {
      "context": "arquivos",
      "method": "POST",
      "path": "/arquivos/upload-arquivo",
      "summary": "Upload de arquivos do Consignado Trabalhador.",
      "deprecated": false
    },
    {
      "context": "consultas-trabalhador",
      "method": "GET",
      "path": "/consultas-trabalhador/download-arquivo/{id}",
      "summary": "Download de Arquivo Credito do Trabalhador",
      "deprecated": false
    },
    {
      "context": "consultas-trabalhador",
      "method": "GET",
      "path": "/consultas-trabalhador/consultar-arquivos",
      "summary": "Consulta de Arquivos do Credito do Trabalhador",
      "deprecated": false
    }
  ],
  "uso": {
    "forcarStatus": "Adicione ?_status=<codigo> em qualquer chamada para forçar uma resposta documentada específica (ex.: ?_status=412)."
  }
};
