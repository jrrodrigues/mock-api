'use strict';

/**
 * Gera arquivos `.http` (compatíveis com a extensão VS Code "REST Client" e com o
 * HTTP Client do IntelliJ/WebStorm) para testar manualmente o mock, um arquivo por
 * contexto, espelhando `src/contexts/**`.
 *
 * Para cada operação do swagger gera duas requisições prontas para uso:
 *   - "sucesso"            -> bate na resposta de sucesso documentada (200/201);
 *   - "erro documentado"   -> usa `?_status=<codigo>` para forçar a resposta de erro
 *                             documentada (412), sem precisar montar o cenário real.
 *
 * Os valores de query/body já vêm preenchidos com os mesmos exemplos usados nas
 * fixtures do mock (ver `scripts/lib/openapi.js` / `scripts/lib/sampler.js`), então
 * as requisições funcionam "prontas", sem edição manual.
 *
 * Rode com `npm run generate:http` (ou `npm run generate`, que roda os dois
 * geradores em sequência). Assim como em `src/contexts`, os arquivos gerados aqui
 * NÃO devem ser editados à mão.
 */

const fs = require('fs');
const path = require('path');
const { ROOT, loadSwagger } = require('./lib/openapi');

const HTTPCLIENT_DIR = path.join(ROOT, 'httpclient');
const BASE_URL_VAR = '{{baseUrl}}';

function buildQueryString(queryObj, extra) {
  const params = [];
  Object.entries(queryObj || {}).forEach(([key, value]) => {
    params.push(`${key}=${encodeURIComponent(value)}`);
  });
  Object.entries(extra || {}).forEach(([key, value]) => {
    params.push(`${key}=${encodeURIComponent(value)}`);
  });
  return params.length ? `?${params.join('&')}` : '';
}

function buildUrl(entry, extraQuery) {
  let urlPath = entry.fullPath;
  Object.entries(entry.pathExample).forEach(([name, value]) => {
    urlPath = urlPath.replace(`{${name}}`, encodeURIComponent(value));
  });
  const query = buildQueryString(entry.meta.request.query, extraQuery);
  return `${BASE_URL_VAR}${urlPath}${query}`;
}

function findStatus(entry, predicate) {
  return Object.keys(entry.meta.responses).find((status) => predicate(Number(status)));
}

/** Um bloco de requisição `.http` para um status específico da operação. */
function renderRequestBlock(entry, { status, title, extraQuery }) {
  const lines = [`### ${entry.summary} — ${title}`];
  lines.push(`# ${entry.method.toUpperCase()} ${entry.fullPath}`);
  if (entry.description && entry.description !== entry.summary) {
    entry.description.split('\n').forEach((l) => lines.push(`# ${l}`));
  }
  if (entry.deprecated) lines.push('# [DEPRECIADO no swagger.json]');
  if (entry.meta.request.requiredQuery.length) {
    lines.push(`# Query obrigatória: ${entry.meta.request.requiredQuery.join(', ')}`);
  }
  lines.push(`# Resposta esperada: ${status} — ${entry.meta.responses[status].description}`);

  const url = buildUrl(entry, extraQuery);
  lines.push(`${entry.method.toUpperCase()} ${url}`);

  const body = entry.meta.request.body;
  if (body !== null) {
    lines.push('Content-Type: application/json');
    lines.push('');
    lines.push(JSON.stringify(body, null, 2));
  }

  return lines.join('\n');
}

/** As duas requisições (sucesso + erro documentado) de uma operação. */
function renderOperationBlocks(entry) {
  const successStatus = String(entry.meta.defaultStatus);
  const errorStatus = findStatus(entry, (s) => s >= 400);

  const blocks = [
    renderRequestBlock(entry, { status: successStatus, title: `sucesso (${successStatus})` }),
  ];

  if (errorStatus) {
    blocks.push(
      renderRequestBlock(entry, {
        status: errorStatus,
        title: `erro documentado (${errorStatus}, forçado via _status)`,
        extraQuery: { _status: errorStatus },
      })
    );
  }

  return blocks.join('\n\n');
}

function renderContextFile({ context, operations, port }) {
  const header = [
    `# Requisições de teste do contexto "${context}" — eConsignado Trabalhador (mock).`,
    '#',
    '# Gerado automaticamente por scripts/generate-httpclient.js a partir de swagger/swagger.json',
    '# (NÃO EDITE À MÃO — rode `npm run generate` novamente após alterar o swagger.json).',
    '#',
    '# Compatível com a extensão VS Code "REST Client" (humao.rest-client) e com o',
    '# HTTP Client do IntelliJ/WebStorm. Suba o mock antes de disparar (`npm start`).',
    '',
    `@baseUrl = http://localhost:${port}`,
    '',
  ].join('\n');

  const blocks = operations.map((entry) => renderOperationBlocks(entry));

  return header + '\n' + blocks.join('\n\n\n') + '\n';
}

function main() {
  const { operationsByContext } = loadSwagger();
  const port = process.env.PORT || 3000;

  fs.rmSync(HTTPCLIENT_DIR, { recursive: true, force: true });
  fs.mkdirSync(HTTPCLIENT_DIR, { recursive: true });

  const contexts = Object.keys(operationsByContext).sort();

  contexts.forEach((context) => {
    const operations = operationsByContext[context];
    const content = renderContextFile({ context, operations, port });
    fs.writeFileSync(path.join(HTTPCLIENT_DIR, `${context}.http`), content);
  });

  console.log(`Gerado: ${contexts.length} arquivos .http em httpclient/ (${contexts.reduce((s, c) => s + operationsByContext[c].length, 0)} operações, 2 requisições cada).`);
}

main();
