'use strict';

/**
 * Deriva uma chave de export válida em JS a partir do `operationId` do swagger.
 * O documento sufixa ids duplicados com `_1`, `_2`... (ex.: `averbar_2`); como cada
 * contexto (pasta) já isola essas colisões, removemos o sufixo para um nome legível.
 */
function toHandlerKey(operationId) {
  return operationId.replace(/_\d+$/, '');
}

/** Converte `/emprestimos/{id}/foo` (OpenAPI) em `/:id/foo` (Express). */
function toExpressPath(fullPath, context) {
  const withoutContext = fullPath.replace(new RegExp(`^/${context}`), '') || '/';
  return withoutContext.replace(/\{([^}]+)\}/g, ':$1');
}

/** Nome de contexto (primeiro segmento do path) -> nome de arquivo/pasta. */
function toContextName(fullPath) {
  return fullPath.split('/')[1];
}

module.exports = { toHandlerKey, toExpressPath, toContextName };
