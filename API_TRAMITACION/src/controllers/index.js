const database = require('../db');

// HU-04 CA2: aprobar una propuesta cambia su estado
const aprobarPropuesta = (req, res) => {
  const propuestaId = req.params.id;
  const updateQuery = "UPDATE propuesta_tt SET estado_aprobacion = 'aprobada' WHERE id = ?";

  database.query(updateQuery, [propuestaId], (err) => {
    if (err) throw err;
    database.query("SELECT * FROM propuesta_tt WHERE id = ?", [propuestaId], (err2, rows) => {
      if (err2) throw err2;
      if (!rows[0]) {
        res.status(404).send('Propuesta no encontrada');
        return;
      }
      res.status(200).json(rows[0]);
    });
  });
};

module.exports = {
  aprobarPropuesta,
};;
