CREATE TABLE IF NOT EXISTS pais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

INSERT INTO pais (nombre) VALUES ("Chile"), ("Argentina"), ("Perú");


CREATE DATABASE IF NOT EXISTS BD06_TRAMITACION;
USE BD06_TRAMITACION;
CREATE TABLE IF NOT EXISTS propuesta_tt (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_tema VARCHAR(100),
    estado_aprobacion VARCHAR(20) DEFAULT 'pendiente'
);
INSERT INTO propuesta_tt (nombre_tema) VALUES ("Propuesta de prueba");

CREATE DATABASE IF NOT EXISTS BD06_VALIDACIONES;
USE BD06_VALIDACIONES;

CREATE TABLE IF NOT EXISTS trabajo_de_titulo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    estado VARCHAR(20) DEFAULT 'en_desarrollo'
);
INSERT INTO trabajo_de_titulo (nombre) VALUES ("TT de prueba");

CREATE TABLE IF NOT EXISTS anotacion_tt (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comentario TEXT,
    version_id INT,
    guia_id INT,
    fecha DATETIME
);

CREATE TABLE IF NOT EXISTS hito (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha DATE,
    estado VARCHAR(20) DEFAULT 'pendiente',
    trabajo_de_titulo_id INT NOT NULL,
    FOREIGN KEY (trabajo_de_titulo_id) REFERENCES trabajo_de_titulo(id)
);

INSERT INTO hito (nombre, fecha, estado, trabajo_de_titulo_id) VALUES
    ("TT1 - Propuesta de Trabajo de Título", "2026-05-10", "completado", 1),
    ("TT2 - Desarrollo del Trabajo de Título", NULL, "en_revision", 1),
    ("Examen de Título", NULL, "pendiente", 1);


