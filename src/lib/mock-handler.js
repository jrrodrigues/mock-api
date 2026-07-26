'use strict';

/**
 * Cria um handler Express genérico "guiado por especificação" a partir dos metadados
 * de uma operação (objeto `meta` definido em `*.fixtures.js`, gerado a partir do
 * swagger.json por `scripts/generate.js`).
 *
 * Regras do mock:
 *  - `?_status=<codigo>` força a devolução de qualquer resposta documentada para aquela
 *    operação (200, 201, 412...). Útil para exercitar fluxos de erro no client sem
 *    precisar reproduzir a condição de negócio real.
 *  - Body obrigatório ausente/vazio, ou query param obrigatório ausente, devolve
 *    automaticamente a resposta de erro documentada da operação (normalmente 412).
 *  - Caso contrário devolve a resposta de sucesso (`meta.defaultStatus`) do swagger.
 *
 * @param {object} meta - Metadados da operação (ver `*.fixtures.js` do contexto).
 * @returns {import('express').RequestHandler}
 */
function createMockHandler(meta) {
  return (req, res) => {
    const forced = req.query._status;
    if (forced && meta.responses[forced]) {
      return sendResponse(res, forced, meta);
    }

    if (meta.request.requiredBody && !hasBody(req)) {
      return sendErrorResponse(res, meta);
    }

    const missingQuery = (meta.request.requiredQuery || []).filter(
      (name) => req.query[name] === undefined
    );
    if (missingQuery.length > 0) {
      return sendErrorResponse(res, meta);
    }

    return sendResponse(res, meta.defaultStatus, meta);
  };
}

function hasBody(req) {
  return req.body !== undefined && req.body !== null && Object.keys(req.body).length > 0;
}

function sendResponse(res, status, meta) {
  const entry = meta.responses[status];
  if (entry.binary) {
    return res.status(Number(status)).type('text/plain').send(String(entry.body));
  }
  return res.status(Number(status)).json(entry.body);
}

function sendErrorResponse(res, meta) {
  const errorStatus = Object.keys(meta.responses).find((code) => Number(code) >= 400);
  if (!errorStatus) {
    return sendResponse(res, meta.defaultStatus, meta);
  }
  return sendResponse(res, errorStatus, meta);
}

module.exports = { createMockHandler };
