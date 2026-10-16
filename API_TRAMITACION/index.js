require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql2/promise");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// HU-04 CA2
app.put("/api/propuestas/:id/aprobar", async (req, res) => {
  try {
    await pool.query(
      "UPDATE propuesta_tt SET estado_aprobacion = 'aprobada' WHERE id = ?",
      [req.params.id]
    );
    const [rows] = await pool.query(
      "SELECT * FROM propuesta_tt WHERE id = ?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT_API;
app.listen(PORT, () => {
  console.log("Server running!");
});
