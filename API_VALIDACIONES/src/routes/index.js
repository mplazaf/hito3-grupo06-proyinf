const express = require('express');
const router = new express.Router();

const index = require('../controllers/index');

router.get('/api/trabajos/:id/estado', index.getEstadoTrabajo);
router.post('/api/versiones/:id/anotaciones', index.registrarAnotacion);

module.exports = router;
