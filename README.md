# GRUPO06-2026-PROYINF

Repositorio correspondiente al proyecto de la asignatura INF236 - Análisis y Diseño de Software.

## Integrantes

- Sebastián Contreras - 202473041-K
- Miguel Plaza - 202473058-4
- María José Alvarez - 202473045-2
- Noelia Opazo - 202473069-K

## Ayudante  - Tutor

- Fernanda Araya

## Wiki

La documentación correspondiente al proyecto se encuentra disponible en la Wiki del repositorio.

[Ir a la Wiki](https://gitlab.inf.utfsm.cl/inf236-cc-2026-2/grupo06-2026-proyinf/-/wikis/home)

## Aspectos técnicos

### Tecnologías

- Node.js
- Express
- MySQL
- Docker
- Docker Compose

### Dependencias

- dotenv
- express
- morgan
- mysql2

### Versiones

- Node.js 18
- Express ^4.18.2
- dotenv ^16.3.1
- morgan ^1.10.0
- mysql2 ^3.0.0

### Indicaciones para levantar el proyecto

Con Docker Desktop abierto, desde la carpeta principal del proyecto ejecutar:

```bash
docker compose up --build
```

Cuando la API esté funcionando aparecerá el mensaje:

```text
Server running!
```