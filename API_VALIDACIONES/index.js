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

// HU-01 CA1o
app.get("/api/trabajos/:id/estado", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, nombre, estado FROM trabajo_de_titulo WHERE id = ?",
      [req.params.id]
    );
    res.json(rows[0] || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// HU-02 CA2
app.post("/api/versiones/:id/anotaciones", async (req, res) => {
  try {
    const { comentario, guia_id } = req.body;
    await pool.query(
      "INSERT INTO anotacion_tt (comentario, version_id, guia_id, fecha) VALUES (?, ?, ?, NOW())",
      [comentario, req.params.id, guia_id]
    );
    res.status(201).json({ mensaje: "Anotación registrada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT_API;
app.listen(PORT, () => {
  console.log("Server running!");
});
