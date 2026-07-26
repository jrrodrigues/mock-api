'use strict';

/** Handler de erro genérico (ex.: JSON malformado em `express.json()`) no formato `ListaErrosResponse`. */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({
    erros: [
      {
        codigo: '500',
        mensagem: err.message || 'Erro interno no mock',
      },
    ],
  });
}

module.exports = errorHandler;
