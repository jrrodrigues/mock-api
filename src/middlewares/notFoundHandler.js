'use strict';

/** Devolve 404 no formato `ListaErrosResponse` (mesmo shape de erro usado pela API real). */
function notFoundHandler(req, res) {
  res.status(404).json({
    erros: [
      {
        codigo: '404',
        mensagem: `Recurso não encontrado: ${req.method} ${req.originalUrl}`,
      },
    ],
  });
}

module.exports = notFoundHandler;
