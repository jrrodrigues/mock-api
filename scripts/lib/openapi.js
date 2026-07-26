'use strict';

/**
 * Carregamento e normalização de `swagger/swagger.json`, compartilhado pelos
 * geradores (`scripts/generate.js` e `scripts/generate-httpclient.js`).
 */

const fs = require('fs');
const path = require('path');
const { sampleSchema } = require('./sampler');
const { toHandlerKey, toExpressPath, toContextName } = require('./naming');

const ROOT = path.resolve(__dirname, '..', '..');
const SWAGGER_PATH = path.join(ROOT, 'swagger', 'swagger.json');
const HTTP_METHODS = ['get', 'post', 'put', 'delete', 'patch'];

function firstContentSchema(content) {
  if (!content) return null;
  const contentType = Object.keys(content)[0];
  const schema = content[contentType] && content[contentType].schema;
  return schema || null;
}

function isBinarySchema(schema) {
  return !!schema && schema.type === 'string' && schema.format === 'binary';
}

/** Monta os metadados de uma operação: params, request body e responses amostrados. */
function buildOperationMeta({ fullPath, context, method, op, schemas }) {
  const parameters = op.parameters || [];
  const queryParams = parameters.filter((p) => p.in === 'query');
  const pathParams = parameters.filter((p) => p.in === 'path');

  const requiredQuery = queryParams.filter((p) => p.required).map((p) => p.name);
  const queryExample = {};
  queryParams.forEach((p) => {
    queryExample[p.name] = sampleSchema(p.schema, schemas, p.name);
  });
  const pathExample = {};
  pathParams.forEach((p) => {
    pathExample[p.name] = sampleSchema(p.schema, schemas, p.name);
  });

  const requestBodySchema = op.requestBody ? firstContentSchema(op.requestBody.content) : null;
  const requestBody = requestBodySchema ? sampleSchema(requestBodySchema, schemas) : null;

  const responses = {};
  const successStatuses = [];
  for (const [status, responseDef] of Object.entries(op.responses || {})) {
    const schema = firstContentSchema(responseDef.content);
    const binary = isBinarySchema(schema);
    responses[status] = {
      description: responseDef.description || '',
      binary,
      body: binary ? sampleSchema(schema, schemas) : schema ? sampleSchema(schema, schemas) : {},
    };
    if (Number(status) >= 200 && Number(status) < 300) successStatuses.push(Number(status));
  }
  const defaultStatus = successStatuses.length ? Math.min(...successStatuses) : 200;

  return {
    context,
    method,
    fullPath,
    expressPath: toExpressPath(fullPath, context),
    operationId: op.operationId,
    handlerKey: toHandlerKey(op.operationId),
    summary: op.summary || '',
    description: op.description || '',
    deprecated: !!op.deprecated || /DEPRECIADO/i.test(op.summary || ''),
    pathParams,
    queryParams,
    pathExample,
    meta: {
      method,
      path: fullPath,
      operationId: op.operationId,
      request: {
        query: Object.keys(queryExample).length ? queryExample : null,
        requiredQuery,
        body: requestBody,
        requiredBody: !!(op.requestBody && op.requestBody.required),
      },
      responses,
      defaultStatus,
    },
  };
}

/** Lê o swagger.json e devolve `{ info, schemas, operationsByContext }`. */
function loadSwagger() {
  const sw = JSON.parse(fs.readFileSync(SWAGGER_PATH, 'utf8'));
  const schemas = sw.components.schemas;
  const operationsByContext = {};

  for (const [fullPath, methods] of Object.entries(sw.paths)) {
    const context = toContextName(fullPath);
    operationsByContext[context] = operationsByContext[context] || [];

    for (const [method, op] of Object.entries(methods)) {
      if (!HTTP_METHODS.includes(method)) continue;
      operationsByContext[context].push(buildOperationMeta({ fullPath, context, method, op, schemas }));
    }
  }

  return { info: sw.info, schemas, operationsByContext };
}

module.exports = { ROOT, SWAGGER_PATH, loadSwagger, buildOperationMeta };
