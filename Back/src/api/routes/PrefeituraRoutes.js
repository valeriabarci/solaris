const express = require('express');
const router = express.Router();
const PrefeituraControllers = require('../controllers/PrefeituraControllers.js');

router.get('/prefeitura', PrefeituraControllers.index);
router.post('/prefeitura', PrefeituraControllers.store);
router.put('/prefeitura/:codigo', PrefeituraControllers.update);
router.delete('/prefeitura/:codigo', PrefeituraControllers.delete);

module.exports = router;