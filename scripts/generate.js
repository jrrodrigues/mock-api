'use strict';

/**
 * Gerador do mock-api a partir de `swagger/swagger.json`.
 *
 * Lê o contrato OpenAPI da API "eConsignado Trabalhador" (Dataprev) e produz, para
 * cada operação:
 *   - um objeto de exemplo de Request (body / query) e de Response (por status code),
 *     amostrados diretamente dos schemas do swagger (ver `scripts/lib/sampler.js`);
 *   - uma rota Express comentada (JSDoc) que usa esses objetos como mock.
 *
 * Os endpoints são agrupados por "contexto" = primeiro segmento do path
 * (ex.: `/emprestimos/...` -> contexto `emprestimos`), em `src/contexts/<contexto>/`.
 *
 * Rode com `npm run generate`. É seguro rodar de novo a qualquer momento: os arquivos
 * gerados são sempre sobrescritos por completo a partir do swagger.json atual.
 */

const fs = require('fs');
const path = require('path');
const { ROOT, loadSwagger } = require('./lib/openapi');

const CONTEXTS_DIR = path.join(ROOT, 'src', 'contexts');

function jsonLiteral(value) {
  return JSON.stringify(value, null, 2);
}

function operationJsDoc(operationEntry) {
  const { method, fullPath, summary, description, deprecated, pathParams, queryParams, meta } = operationEntry;
  const lines = ['/**'];
  lines.push(` * @route ${method.toUpperCase()} ${fullPath}`);
  if (summary) lines.push(` * @summary ${summary}`);
  if (description && description !== summary) {
    description.split('\n').forEach((l) => lines.push(` * ${l}`));
  }
  if (deprecated) lines.push(' * @deprecated Endpoint sinalizado como depreciado no swagger.json.');
  pathParams.forEach((p) => {
    let line = ` * @param {${p.schema.type}} ${p.name} - (path, obrigatório)`;
    if (p.description) line += ` ${p.description}`;
    lines.push(line);
  });
  queryParams.forEach((p) => {
    const req = p.required ? 'obrigatório' : 'opcional';
    let line = ` * @param {${p.schema.type}} [${p.name}] - (query, ${req})`;
    if (p.description) line += ` ${p.description}`;
    lines.push(line);
  });
  if (meta.request.requiredBody) lines.push(' * @param {object} body - (requestBody, obrigatório) ver fixture correspondente em *.fixtures.js');
  Object.entries(meta.responses).forEach(([status, r]) => {
    lines.push(` * @returns {${status}} ${r.description}`);
  });
  lines.push(' */');
  return lines.join('\n');
}

function renderFixturesFile({ context, operations, sourcePath }) {
  const header = [
    '\'use strict\';',
    '',
    `/**`,
    ` * Objetos de Request/Response de exemplo para o contexto "${context}".`,
    ` *`,
    ` * Gerado automaticamente por scripts/generate.js a partir de ${sourcePath}`,
    ` * (NÃO EDITE À MÃO — rode \`npm run generate\` novamente após alterar o swagger.json).`,
    ` *`,
    ` * Cada export é o objeto \`meta\` consumido por createMockHandler() em`,
    ` * src/lib/mock-handler.js, contendo:`,
    ` *   - request.body / request.query  -> exemplo de Request conforme o swagger`,
    ` *   - responses[status].body        -> exemplo de Response conforme o swagger`,
    ` */`,
    '',
  ].join('\n');

  const blocks = operations.map((entry) => {
    const doc = operationJsDoc(entry);
    return `${doc}\nmodule.exports.${entry.handlerKey} = ${jsonLiteral(entry.meta)};\n`;
  });

  return header + '\n' + blocks.join('\n');
}

function renderRoutesFile({ context, operations }) {
  const header = [
    '\'use strict\';',
    '',
    'const express = require(\'express\');',
    'const { createMockHandler } = require(\'../../lib/mock-handler\');',
    `const fixtures = require('./${context}.fixtures');`,
    '',
    '/**',
    ` * Rotas mock do contexto "${context}".`,
    ' *',
    ' * Gerado automaticamente por scripts/generate.js a partir de swagger/swagger.json',
    ' * (NÃO EDITE À MÃO — rode `npm run generate` novamente após alterar o swagger.json).',
    ' *',
    ' * Cada handler é genérico (ver src/lib/mock-handler.js): valida presença de body/query',
    ' * obrigatórios e devolve o exemplo de Response documentado no swagger para a operação',
    ' * (ou uma resposta forçada via `?_status=<codigo>`).',
    ' */',
    '',
    'const router = express.Router();',
    '',
  ].join('\n');

  const blocks = operations.map((entry) => {
    const doc = operationJsDoc(entry);
    return `${doc}\nrouter.${entry.method}('${entry.expressPath}', createMockHandler(fixtures.${entry.handlerKey}));\n`;
  });

  return header + '\n' + blocks.join('\n') + '\nmodule.exports = router;\n';
}

function renderContextsIndex(contexts) {
  const lines = [
    '\'use strict\';',
    '',
    'const express = require(\'express\');',
    '',
    '/**',
    ' * Agrega os roteadores de todos os contextos sob seus respectivos prefixos de path.',
    ' *',
    ' * Gerado automaticamente por scripts/generate.js a partir de swagger/swagger.json',
    ' * (NÃO EDITE À MÃO — rode `npm run generate` novamente após alterar o swagger.json).',
    ' */',
    '',
    'const router = express.Router();',
    '',
  ];
  contexts.forEach((context) => {
    lines.push(`router.use('/${context}', require('./${context}/${context}.routes'));`);
  });
  lines.push('', 'module.exports = router;', '');
  return lines.join('\n');
}

function renderApiInfo({ info, operationsByContext }) {
  const endpoints = [];
  Object.entries(operationsByContext).forEach(([context, ops]) => {
    ops.forEach((op) => {
      endpoints.push({
        context,
        method: op.method.toUpperCase(),
        path: op.fullPath,
        summary: op.summary,
        deprecated: op.deprecated,
      });
    });
  });

  const content = {
    nome: info.title,
    descricao: `Mock local de "${info.title}" gerado a partir de swagger/swagger.json`,
    versaoOriginal: info.version,
    totalEndpoints: endpoints.length,
    contextos: Object.keys(operationsByContext).sort(),
    endpoints,
    uso: {
      forcarStatus: 'Adicione ?_status=<codigo> em qualquer chamada para forçar uma resposta documentada específica (ex.: ?_status=412).',
    },
  };

  return `'use strict';\n\n/**\n * Metadados expostos em GET / — gerado automaticamente por scripts/generate.js.\n */\nmodule.exports = ${jsonLiteral(content)};\n`;
}

function main() {
  const { info, operationsByContext } = loadSwagger();

  fs.rmSync(CONTEXTS_DIR, { recursive: true, force: true });
  fs.mkdirSync(CONTEXTS_DIR, { recursive: true });

  const contexts = Object.keys(operationsByContext).sort();

  contexts.forEach((context) => {
    const operations = operationsByContext[context];
    const dir = path.join(CONTEXTS_DIR, context);
    fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(
      path.join(dir, `${context}.fixtures.js`),
      renderFixturesFile({ context, operations, sourcePath: 'swagger/swagger.json' })
    );
    fs.writeFileSync(path.join(dir, `${context}.routes.js`), renderRoutesFile({ context, operations }));
  });

  fs.writeFileSync(path.join(CONTEXTS_DIR, 'index.js'), renderContextsIndex(contexts));
  fs.writeFileSync(path.join(ROOT, 'src', 'api-info.js'), renderApiInfo({ info, operationsByContext }));

  const total = contexts.reduce((sum, c) => sum + operationsByContext[c].length, 0);
  console.log(`Gerado: ${contexts.length} contextos, ${total} operações.`);
  contexts.forEach((c) => console.log(`  - ${c} (${operationsByContext[c].length})`));
}

main();
