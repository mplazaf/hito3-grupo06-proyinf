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
  charset: "utf8mb4",
});

app.get("/api/pais", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM pais");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT_API;
app.listen(PORT, () => {
  console.log("Server running!");
});
