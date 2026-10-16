const express = require('express');
const router = new express.Router();

const index = require('../controllers/index');

router.put('/api/propuestas/:id/aprobar', index.aprobarPropuesta);

module.exports = router;
