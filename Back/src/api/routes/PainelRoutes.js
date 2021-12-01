const express = require('express');
const router = express.Router();
const PainelControllers = require('../controllers/PainelControllers.js');

router.get('/painel', PainelControllers.index);
router.post('/painel', PainelControllers.store);
router.put('/painel/:codigo', PainelControllers.update);
router.delete('/painel/:codigo', PainelControllers.delete);

module.exports = router;