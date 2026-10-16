const database = require('../db');

// HU-01 CA1: consultar estado actual
const getEstadoTrabajo = (req, res) => {
  const trabajoId = req.params.id;
  const query = 'SELECT id, nombre, estado FROM trabajo_de_titulo WHERE id = ?';

  database.query(query, [trabajoId], (err, result) => {
    if (err) throw err;
    if (!result[0]) {
      res.status(404).send('Trabajo de Título no encontrado');
      return;
    }
    res.status(200).json(result[0]);
  });
};

// HU-02 CA2: registrar anotación sobre una versión
const registrarAnotacion = (req, res) => {
  const versionId = req.params.id;
  const { comentario, guia_id } = req.body;
  const query = "INSERT INTO anotacion_tt (comentario, version_id, guia_id, fecha) VALUES (?, ?, ?, NOW())";

  database.query(query, [comentario, versionId, guia_id], (err, result) => {
    if (err) throw err;
    database.query("SELECT * FROM anotacion_tt WHERE id = ?", [result.insertId], (err2, rows) => {
      if (err2) throw err2;
      res.status(201).json(rows[0]);
    });
  });
};

module.exports = {
  getEstadoTrabajo,
  registrarAnotacion,
};
