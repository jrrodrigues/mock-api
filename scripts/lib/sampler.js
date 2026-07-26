'use strict';

/**
 * Gera valores de exemplo ("samples") a partir de um schema OpenAPI 3.
 *
 * Estratégia (nessa ordem de prioridade):
 *   1. `schema.example` explícito no arquivo swagger.json (é o que a Dataprev documentou).
 *   2. `schema.default`.
 *   3. `schema.enum[0]`.
 *   4. Valor sintético coerente com `type`/`format` (fallback quando o spec não traz exemplo).
 *
 * Resolve `$ref` contra `components.schemas` e protege contra referências
 * circulares e árvores muito profundas.
 */

const MAX_DEPTH = 8;

function resolveRef(ref, schemas) {
  const name = ref.split('/').pop();
  return { name, schema: schemas[name] };
}

function sampleStringByFormat(schema, keyHint) {
  switch (schema.format) {
    case 'date':
      return '2026-07-26';
    case 'date-time':
      return '2026-07-26T10:00:00-03:00';
    case 'ddMMyyyy':
      return '26072026';
    case 'yyyyMM':
      return '202607';
    case 'ddMMyyyyHHmmss':
      return '26072026100000';
    case 'binary':
      return '<conteudo-binario-mock>';
    case 'byte':
      return 'bW9jay1hcGk=';
    default:
      return keyHint ? `mock-${keyHint}` : 'string';
  }
}

function sampleNumberByFormat(schema) {
  if (typeof schema.minimum === 'number') return schema.minimum;
  return 0;
}

/**
 * @param {object} schema - Schema (ou `{ $ref }`) a ser amostrado.
 * @param {object} schemas - Mapa `components.schemas` do documento OpenAPI.
 * @param {string} [keyHint] - Nome da propriedade (usado só em fallback textual).
 * @param {Set<string>} [seen] - Nomes de schema já visitados no ramo atual (evita ciclo infinito).
 * @param {number} [depth] - Profundidade atual da recursão.
 */
function sampleSchema(schema, schemas, keyHint, seen = new Set(), depth = 0) {
  if (!schema || depth > MAX_DEPTH) return null;

  if (schema.$ref) {
    const { name, schema: resolved } = resolveRef(schema.$ref, schemas);
    if (!resolved || seen.has(name)) return null;
    const nextSeen = new Set(seen);
    nextSeen.add(name);
    return sampleSchema(resolved, schemas, keyHint, nextSeen, depth + 1);
  }

  if (schema.example !== undefined) return schema.example;
  if (schema.default !== undefined) return schema.default;
  if (schema.enum) return schema.enum[0];

  switch (schema.type) {
    case 'object': {
      if (!schema.properties) return {};
      const obj = {};
      for (const [key, propSchema] of Object.entries(schema.properties)) {
        obj[key] = sampleSchema(propSchema, schemas, key, seen, depth + 1);
      }
      return obj;
    }
    case 'array': {
      const item = sampleSchema(schema.items, schemas, keyHint, seen, depth + 1);
      return item === null ? [] : [item];
    }
    case 'string':
      return sampleStringByFormat(schema, keyHint);
    case 'integer':
    case 'number':
      return sampleNumberByFormat(schema);
    case 'boolean':
      return true;
    default:
      return null;
  }
}

module.exports = { sampleSchema };
