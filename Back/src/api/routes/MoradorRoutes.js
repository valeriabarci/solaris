const express = require('express');
const router = express.Router();
const MoradorControllers = require('../controllers/MoradorControllers.js');

router.get('/morador', MoradorControllers.index);
router.post('/morador', MoradorControllers.store);
router.put('/morador/:codigo', MoradorControllers.update);
router.delete('/morador/:codigo', MoradorControllers.delete);

module.exports = router;