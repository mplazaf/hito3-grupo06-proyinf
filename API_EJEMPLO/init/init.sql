CREATE DATABASE IF NOT EXISTS BD_EJEMPLO;

USE BD_EJEMPLO;

CREATE TABLE IF NOT EXISTS paises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    capital VARCHAR(100),
    continente VARCHAR(100)
);

INSERT INTO paises (nombre, capital, continente)
VALUES 
('Chile', 'Santiago', 'America del sur'),
('Noruega', 'Oslo', 'Europa'),
('Mexico', 'Ciudad de Mexico', 'America del norte');



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

CREATE DATABASE IF NOT EXISTS BD06_TRAMITACION;
USE BD06_TRAMITACION;

CREATE TABLE IF NOT EXISTS propuesta_tt (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_tema VARCHAR(100),
    estado_aprobacion VARCHAR(20) DEFAULT 'pendiente'
);
INSERT INTO propuesta_tt (nombre_tema) VALUES ("Propuesta de prueba");
