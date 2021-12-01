const express = require('express');
const router = express.Router();
const AdministradorControllers = require('../controllers/AdministradorControllers.js');

router.get('/administrador', AdministradorControllers.index);
router.post('/administrador', AdministradorControllers.store);
router.put('/administrador/:codigo', AdministradorControllers.update);
router.delete('/administrador/:codigo', AdministradorControllers.delete);

module.exports = router;