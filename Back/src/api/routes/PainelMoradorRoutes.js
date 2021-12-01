const express = require('express');
const router = express.Router();
const PainelmoradorControllers = require('../controllers/PainelMoradorControllers.js');

router.get('/painelmorador', PainelmoradorControllers.index);
router.post('/painelmorador', PainelmoradorControllers.store);
router.put('/painelmorador/:codigo', PainelmoradorControllers.update);
router.delete('/painelmorador/:codigo', PainelmoradorControllers.delete);

module.exports = router;