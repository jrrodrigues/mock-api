'use strict';

const { createApp } = require('./app');

const PORT = process.env.PORT || 3000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Mock API eConsignado Trabalhador rodando em http://localhost:${PORT}`);
  console.log(`Documentação da API original: swagger/swagger.json`);
});
