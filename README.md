# mock-api — eConsignado Trabalhador

Mock server em Node.js/Express, gerado automaticamente a partir do contrato OpenAPI
([`swagger/swagger.json`](swagger/swagger.json)) da API **eConsignado Trabalhador**
(Crédito do Trabalhador, Dataprev — `papiecotrab.dataprev.gov.br`).

## 1. Definição do problema

O time precisa integrar/testar contra a API **eConsignado Trabalhador**, que expõe 60
operações (empréstimos consignados, portabilidade, garantias FGTS, comunicados,
propostas via CTPS Digital, arquivos, etc.) descritas em um `swagger.json` com 236
schemas. Não é viável desenvolver ou testar client-side contra o ambiente real da
Dataprev a cada iteração: é um serviço externo, com autenticação OAuth2, ambiente de
homologação limitado e regras de negócio que não interessam para validar apenas o
**contrato** (formato de request/response, status codes documentados).

O objetivo deste projeto é gerar, a partir do próprio `swagger.json`, um servidor mock
local que:

1. Reproduza fielmente cada endpoint (mesmo path, método, parâmetros obrigatórios);
2. Responda com objetos de **Request** e **Response** de exemplo que respeitem os
   schemas declarados (tipos, formatos, enums, campos obrigatórios);
3. Separe os endpoints por **contexto** (o mesmo agrupamento usado nos próprios paths
   da API: `emprestimos`, `trabalhadores`, `comunicados`, etc.), facilitando localizar
   e manter cada grupo de rotas;
4. Documente cada rota via comentários (JSDoc), extraídos do `summary`/`description`
   originais do swagger;
5. Continue reproduzível: se o `swagger.json` for atualizado (nova versão da API), o
   mock inteiro pode ser regenerado com um único comando, sem edição manual.

## 2. Solução

### 2.1 Ideia central: gerar o mock a partir do próprio contrato

Em vez de escrever 60 rotas, centenas de objetos de exemplo e 120 requisições de teste
à mão (lento e sujeito a divergir do swagger com o tempo), o projeto tem **geradores**
que leem `swagger/swagger.json` e produzem o código-fonte do servidor e as requisições
de teste:

```
                         ┌─► scripts/generate.js            ─► src/contexts/**/*.js
swagger/swagger.json ────┤   (fixtures + rotas Express)
                         └─► scripts/generate-httpclient.js ─► httpclient/**/*.http
                             (requisições de teste)
```

Ambos compartilham a mesma leitura/normalização do contrato (`scripts/lib/openapi.js`).

- **`scripts/lib/sampler.js`** — dado um schema OpenAPI (com `$ref`, `object`,
  `array`, `enum`, etc.), resolve as referências contra `components.schemas` e monta
  um valor de exemplo. Prioridade: `example` documentado no swagger → `default` →
  primeiro valor de `enum` → valor sintético coerente com `type`/`format` (datas
  `ddMMyyyy`, `date-time`, binário, etc.) quando o schema não traz exemplo.
- **`scripts/lib/openapi.js`** — percorre `paths`, agrupa cada operação pelo primeiro
  segmento do path (o "contexto") e monta os metadados de cada operação (parâmetros
  obrigatórios, body de exemplo, respostas de exemplo por status code), reaproveitados
  pelos dois geradores abaixo.
- **`scripts/generate.js`** — a partir desses metadados, escreve:
  - `src/contexts/<contexto>/<contexto>.fixtures.js` — os objetos de **Request** e
    **Response** de exemplo de cada endpoint do contexto;
  - `src/contexts/<contexto>/<contexto>.routes.js` — as rotas Express (comentadas)
    daquele contexto, usando as fixtures acima;
  - `src/contexts/index.js` — agrega todos os roteadores de contexto;
  - `src/api-info.js` — metadados expostos em `GET /` (lista de todos os endpoints).
- **`scripts/generate-httpclient.js`** — escreve, por contexto, um arquivo
  `httpclient/<contexto>.http` com duas requisições prontas por endpoint (sucesso e
  erro documentado) — ver [seção 5](#5-testando-com-os-arquivos-http).

Rodar `npm run generate` novamente após alterar `swagger.json` regenera tudo — os
arquivos gerados **não devem ser editados à mão** (isso está marcado no cabeçalho de
cada um).

### 2.2 Execução do mock em runtime

Em runtime não há mais nenhuma dependência do `swagger.json`: o servidor Express só
usa o código já gerado.

- **`src/app.js`** monta a aplicação: `express.json()`, log de requisições, o roteador
  agregado de contextos, 404 e error handler.
- **`src/lib/mock-handler.js`** contém a única peça de lógica reaproveitada por todas
  as 60 rotas — `createMockHandler(meta)` — que:
  1. Se `?_status=<codigo>` for passado, força a resposta documentada daquele status
     (ex.: `?_status=412` para simular o fluxo de erro sem precisar reproduzir a
     condição de negócio real);
  2. Se a operação exige `requestBody` e nenhum body foi enviado, ou se falta algum
     query param obrigatório, responde com o exemplo de erro documentado (normalmente
     `412`, no formato `ListaErrosResponse`);
  3. Caso contrário, responde com o exemplo de sucesso (`200`/`201`) do swagger.

Ou seja: o mock valida a **forma** do contrato (presença de campos obrigatórios), mas
não a regra de negócio (não recalcula parcelas, CET, etc.) — isso é proposital: o
objetivo é permitir testar a integração, não reimplementar o backend real.

### 2.3 Estrutura de pastas

```
mock-api/
├─ swagger/
│  └─ swagger.json               # contrato original (fonte da verdade)
├─ scripts/
│  ├─ generate.js                # gerador (fixtures + rotas a partir do swagger)
│  └─ lib/
│     ├─ sampler.js              # amostra valores de exemplo a partir de um schema
│     └─ naming.js               # path OpenAPI -> path Express, operationId -> nome de export
├─ httpclient/                    # 100% gerado por scripts/generate-httpclient.js
│  ├─ comunicados.http
│  ├─ emprestimos.http
│  ├─ ...                        # um arquivo .http por contexto (10 no total)
│  └─ consultas-trabalhador.http
├─ src/
│  ├─ server.js                  # ponto de entrada (app.listen)
│  ├─ app.js                     # monta a app Express
│  ├─ api-info.js                # metadados expostos em GET / (gerado)
│  ├─ lib/
│  │  └─ mock-handler.js         # handler genérico usado por todas as rotas geradas
│  ├─ middlewares/
│  │  ├─ requestLogger.js
│  │  ├─ notFoundHandler.js      # 404 no formato ListaErrosResponse
│  │  └─ errorHandler.js         # 500 no formato ListaErrosResponse
│  └─ contexts/                  # 100% gerado por scripts/generate.js
│     ├─ index.js                # agrega os roteadores de todos os contextos
│     ├─ comunicados/
│     │  ├─ comunicados.routes.js
│     │  └─ comunicados.fixtures.js
│     ├─ emprestimos/
│     ├─ emprestimos-legados/
│     ├─ trabalhadores/
│     ├─ propostas-ctps/
│     ├─ propostas-portabilidade-ctps/
│     ├─ homologacao/
│     ├─ garantias/
│     ├─ arquivos/
│     └─ consultas-trabalhador/
└─ package.json
```

### 2.4 Contextos gerados (60 endpoints)

| Contexto                        | Endpoints | Exemplos de operação |
|----------------------------------|:---------:|-----------------------|
| `emprestimos`                    | 29        | averbar, alterar, suspender, reativar, portabilidade, refinanciamento, calendário, garantias |
| `trabalhadores`                  | 8         | dados do vínculo, saldo FGTS, autorizações, tombamento compulsório |
| `homologacao`                    | 7         | massas de teste (só ambiente de homologação) |
| `propostas-ctps`                 | 4         | propostas via CTPS Digital |
| `propostas-portabilidade-ctps`   | 3         | propostas de portabilidade via CTPS Digital |
| `comunicados`                    | 3         | consultar / marcar como lido |
| `emprestimos-legados`            | 2         | incluir/excluir empréstimo legado |
| `consultas-trabalhador`          | 2         | listar e baixar arquivos |
| `garantias`                      | 1         | execução de garantia FGTS |
| `arquivos`                       | 1         | upload de arquivo |

A lista completa (método, path, contexto, `summary`, se é depreciado) fica disponível
em runtime em `GET /`.

## 3. Como rodar

```bash
npm install       # instala o Express
npm start         # sobe o mock em http://localhost:3000 (PORT é configurável)
# ou, com reload automático:
npm run dev
```

Regenerar rotas/fixtures a partir do swagger (necessário só se `swagger/swagger.json`
mudar):

```bash
npm run generate
```

## 4. Como usar

```bash
# Descobrir todos os endpoints disponíveis
curl http://localhost:3000/

# GET com query params obrigatórios
curl "http://localhost:3000/comunicados/consultar-comunicados?codigoSolicitante=999"

# POST com body (qualquer body não-vazio passa na validação de "obrigatório")
curl -X POST http://localhost:3000/emprestimos/averbar-consignado-trabalhador \
  -H "Content-Type: application/json" \
  -d '{"numeroContrato":"199912345678"}'

# Forçar a resposta de erro documentada (412), sem precisar montar o cenário real
curl "http://localhost:3000/emprestimos/consultar-emprestimo-trabalhador?codigoSolicitante=1&numeroContrato=1&_status=412"

# Query/body obrigatório ausente -> cai automaticamente na resposta de erro documentada
curl -i http://localhost:3000/comunicados/consultar-comunicados

# Rota inexistente -> 404 no mesmo formato de erro (ListaErrosResponse)
curl http://localhost:3000/nao-existe
```

## 5. Testando com os arquivos `.http`

A pasta [`httpclient/`](httpclient/) traz um arquivo `.http` por contexto (mesmo
agrupamento de `src/contexts/`), gerado por `scripts/generate-httpclient.js` a partir
do swagger. Formato compatível com:

- **VS Code** — extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
  (clique em "Send Request" acima de cada requisição);
- **IntelliJ / WebStorm** — HTTP Client nativo (ícone ▶ na margem do editor).

Cada endpoint gera duas requisições prontas para uso, já preenchidas com os mesmos
exemplos das fixtures:

```http
### Averbação de Empréstimo Consignado — sucesso (200)
POST {{baseUrl}}/emprestimos/averbar-consignado-trabalhador
Content-Type: application/json

{ "codigoSolicitante": 999, ... }

### Averbação de Empréstimo Consignado — erro documentado (412, forçado via _status)
POST {{baseUrl}}/emprestimos/averbar-consignado-trabalhador?_status=412
Content-Type: application/json

{ "codigoSolicitante": 999, ... }
```

A variável `@baseUrl` (padrão `http://localhost:3000`) é definida no topo de cada
arquivo — ajuste se o mock estiver rodando em outra porta (`PORT=4000 npm start`).
Suba o mock (`npm start`) antes de disparar as requisições.

## 6. Limitações (por design)

- Os dados retornados são **exemplos estáticos** amostrados do swagger, não um estado
  persistido — duas chamadas ao mesmo `GET` sempre devolvem o mesmo exemplo.
- Não há regra de negócio real (cálculo de parcelas, verificação de CPF, saldo FGTS
  etc.) nem autenticação OAuth2 — o foco é o **contrato** (formato e status codes).
- Campos sem `example` no swagger recebem um valor sintético (`mock-<campo>` para
  strings, `0` para números, datas fixas) só para preencher o schema — não deve ser
  usado para validar corretude de conteúdo, apenas de formato.
