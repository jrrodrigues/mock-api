'use strict';

const express = require('express');

/**
 * Agrega os roteadores de todos os contextos sob seus respectivos prefixos de path.
 *
 * Gerado automaticamente por scripts/generate.js a partir de swagger/swagger.json
 * (NÃO EDITE À MÃO — rode `npm run generate` novamente após alterar o swagger.json).
 */

const router = express.Router();

router.use('/arquivos', require('./arquivos/arquivos.routes'));
router.use('/comunicados', require('./comunicados/comunicados.routes'));
router.use('/consultas-trabalhador', require('./consultas-trabalhador/consultas-trabalhador.routes'));
router.use('/emprestimos', require('./emprestimos/emprestimos.routes'));
router.use('/emprestimos-legados', require('./emprestimos-legados/emprestimos-legados.routes'));
router.use('/garantias', require('./garantias/garantias.routes'));
router.use('/homologacao', require('./homologacao/homologacao.routes'));
router.use('/propostas-ctps', require('./propostas-ctps/propostas-ctps.routes'));
router.use('/propostas-portabilidade-ctps', require('./propostas-portabilidade-ctps/propostas-portabilidade-ctps.routes'));
router.use('/trabalhadores', require('./trabalhadores/trabalhadores.routes'));

module.exports = router;
