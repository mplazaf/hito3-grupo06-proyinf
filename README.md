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

# Aspectos técnicos

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías:

- Node.js
- Express
- MySQL
- Docker
- Docker Compose

El proyecto base considera las siguientes API:

- `API_EJEMPLO`: API utilizada para comprobar el correcto funcionamiento del proyecto base.
- `API_TRAMITACION`: API destinada a los procesos asociados a la tramitación.
- `API_VALIDACIONES`: API destinada a los procesos asociados a las validaciones.

Cada API utiliza Node.js y Express, y se conecta a una base de datos MySQL.

---

## Dependencias

Las tres API utilizan las siguientes dependencias:

- `dotenv` `^16.3.1`: permite cargar las variables de entorno definidas en los archivos `.env`.
- `express` `^4.18.2`: framework utilizado para implementar las API.
- `morgan` `^1.10.0`: permite registrar las solicitudes HTTP recibidas por las API.
- `mysql2` `^3.0.0`: permite establecer la conexión entre Node.js y MySQL.

Las dependencias son instaladas automáticamente al construir las imágenes Docker mediante:

```bash
npm install
```

Por lo tanto, siguiendo el procedimiento con Docker descrito en este README no es necesario ejecutar `npm install` manualmente.

---

## Versiones

El proyecto utiliza:

- Node.js `18`, mediante la imagen `node:18-alpine`.
- Express `^4.18.2`.
- dotenv `^16.3.1`.
- morgan `^1.10.0`.
- mysql2 `^3.0.0`.

El procedimiento fue verificado por el equipo utilizando:

```text
Docker version 29.8.0
Docker Compose version v5.5.1
```

El proyecto utiliza la imagen:

```text
mysql
```

en Docker Compose. El archivo `docker-compose.yml` del proyecto base no fija una versión específica de MySQL.

---

# Variables de configuración

Las API utilizan variables de entorno para definir su puerto y establecer la conexión con MySQL.

Las variables utilizadas son:

```text
PORT_API
DB_USER
DB_PASSWORD
DB_NAME
DB_PORT
DB_HOST
```

Los archivos `.env` no deben contener credenciales institucionales ni información sensible.

La contraseña `password` indicada a continuación corresponde únicamente a la configuración local entregada con el proyecto base y no corresponde a una credencial institucional o de producción.

## API_EJEMPLO

Crear o verificar el archivo:

```text
API_EJEMPLO/.env
```

con:

```env
PORT_API=8082
DB_USER="root"
DB_PASSWORD="password"
DB_NAME="BD_EJEMPLO"
DB_PORT=3306
DB_HOST="host.docker.internal"
```

## API_TRAMITACION

Crear o verificar el archivo:

```text
API_TRAMITACION/.env
```

con:

```env
PORT_API=8080
DB_USER="root"
DB_PASSWORD="password"
DB_NAME="BD06_TRAMITACION"
DB_PORT=3306
DB_HOST="host.docker.internal"
```

## API_VALIDACIONES

Crear o verificar el archivo:

```text
API_VALIDACIONES/.env
```

con:

```env
PORT_API=8081
DB_USER="root"
DB_PASSWORD="password"
DB_NAME="BD06_VALIDACIONES"
DB_PORT=3306
DB_HOST="host.docker.internal"
```

Los nombres `BD06_TRAMITACION` y `BD06_VALIDACIONES` corresponden al número del grupo, en este caso **Grupo 06**.

---

# Cómo levantar el proyecto

## 1. Requisitos previos

Se debe contar con:

- Git
- Docker Desktop
- Docker Compose

Docker Desktop debe estar abierto y en ejecución.

Versiones utilizadas durante la verificación del equipo:

```text
Docker version 29.8.0
Docker Compose version v5.5.1
```

## 2. Clonar el repositorio

```bash
git clone https://gitlab.inf.utfsm.cl/inf236-cc-2026-2/grupo06-2026-proyinf.git
cd grupo06-2026-proyinf
```

## 3. Configurar variables de entorno

Verificar que los archivos `.env` de cada API contengan las variables indicadas en la sección **Variables de configuración**.

El proyecto utiliza:

```text
PORT_API
DB_USER
DB_PASSWORD
DB_NAME
DB_PORT
DB_HOST
```

## 4. Levantar API_EJEMPLO y MySQL

Desde la carpeta principal ejecutar:

```bash
docker compose up --build
```

Esperar hasta visualizar:

```text
Server running!
```

Luego verificar:

```text
http://localhost:8082/api/pais
```

Si la ejecución es correcta, la API responderá con información en formato JSON.

## 5. Levantar las demás API

Para `API_TRAMITACION`:

```bash
cd API_TRAMITACION
docker compose up --build -d
```

Disponible en:

```text
http://localhost:8080
```

Para `API_VALIDACIONES`:

```bash
cd ../API_VALIDACIONES
docker compose up --build -d
```

Disponible en:

```text
http://localhost:8081
```

## 6. Verificar los servicios

```bash
docker ps
```

| Servicio | Puerto |
|---|---:|
| API_TRAMITACION | 8080 |
| API_VALIDACIONES | 8081 |
| API_EJEMPLO | 8082 |
| MySQL | 3306 |

# Cómo detener el proyecto

Ejecutar:

```bash
docker compose down
```

en la carpeta correspondiente a cada servicio levantado.
```

Si anteriormente se detuvo una instancia local de MySQL, volver a iniciarla desde PowerShell como administrador:

```powershell
Start-Service MySQL80
```
docker compose up --build
```

Cuando la API esté funcionando aparecerá el mensaje:

```text
Server running!
```