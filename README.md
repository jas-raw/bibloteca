# Biblioteca app

Esta aplicacion es una app sencilla que gestiona usuarios, libros y sus prestamos

Hecha con React JS, Node JS, Express y Postgres

## Funcionamiento para produccion

Tenga en cuenta que esta aplicacion usa contenedores de docker y docker-compose para ejecutarse

Por favor lea las siguientes documentaciones para instalar docker y docker-compose

- Docker: https://docs.docker.com/engine/install/
- Docker Compose: https://docs.docker.com/compose/install/

### Para ejecutar la aplicacion, abra una linea de comandos en la carpeta y ejecute:
sudo ./init.sh

## Funcionamiento para desarrollo

Tenga en cuenta que es necesario:

- Tener el motor de base de datos corriendo, en este caso, postgres
- Debe configurar cada .env con las variables de entorno con las que desea configurar la app, se añade un archivo de ejemplo .env.example
- Tener instalado en su computador NodeJS y NPM

### Para ejecutar el front, simplemente abra una terminal de comandos en la carpeta biblo-front y ejecute:

npm install && npm run start

### ### Para ejecutar el front, simplemente abra una terminal de comandos en la carpeta biblo-back y ejecute:

npm install && npm run dev