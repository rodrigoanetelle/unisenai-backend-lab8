const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunoController');

router.get('/', AlunoController.listar);
router.get('/estatisticas', AlunoController.estatisticas);
router.post('/', AlunoController.cadastrar);
router.put('/:id', AlunoController.editar); 
router.delete('/:id', AlunoController.remover);

module.exports = router;