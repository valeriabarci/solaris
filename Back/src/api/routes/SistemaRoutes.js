const express = require('express');
const router = express.Router();
const SistemaControllers = require('../controllers/SistemaControllers.js');

router.get('/sistema', SistemaControllers.index);
router.post('/sistema', SistemaControllers.store);
router.put('/sistema/:codigo', SistemaControllers.update);
router.delete('/sistema/:codigo', SistemaControllers.delete);

module.exports = router;