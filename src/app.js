'use strict';

const express = require('express');
const requestLogger = require('./middlewares/requestLogger');
const notFoundHandler = require('./middlewares/notFoundHandler');
const errorHandler = require('./middlewares/errorHandler');
const contextsRouter = require('./contexts');
const apiInfo = require('./api-info');

/** Monta a aplicação Express do mock (sem chamar `listen`) — facilita testes. */
function createApp() {
  const app = express();

  app.use(express.json());
  app.use(requestLogger);

  app.get('/', (req, res) => res.json(apiInfo));

  app.use(contextsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
