[`Backend Fundamentals`](../../README.md) > [`Sesión 03: API`](../README.md) > `Ejemplo 1`

# Ejemplo 1

## Objetivo

Repasar los fundamentos de una API REST y configurar nuestro entorno para comenzar a desarrollar una API con NodeJS y Express.

## Requerimientos

Se recomienda tener NodeJS LTS instalado y funcionando correctamente. También es recomendable estar familiarizado con Javascript.

## Desarrollo

### ¿Qué es una API REST?

REST es un acrónimo para **RE**presentational **S**tate **T**ransfer, un estilo de arquitectura pensada para sistemas dedicados a la distribución de *hypermedia*. REST cuenta con los siguientes principios:

- Arquitectura cliente/servidor sin estado, es decir, no se almacena la información de las solicitudes, cada solicitud es independiente.
- Una interfaz uniforme entre los elementos, para que la información se transfiera de forma estandarizada.
- Acciones concretas (POST, GET, PUT y DELETE) para la transferencia de datos.
- Uso de formatos de transferencia para la comunicación. Para este caso en específico utilizaremos JSON como el formato para enviar respuestas y recibir peticiones de objetos. Se puede usar también XLT ó HTML
- Un sistema en capas que organiza en jerarquías invisibles para el cliente y cada uno de los servidores  que participan en la recuperación de la información solicitada.

Si bien parece una arquitectura muy restrictiva, esto sirve para que su uso sea mas sencillo. 

Es importante señalar que REST es un conjunto de normas que se pueden implementar a necesidad de la aplicación. 

## Preparando nuestro entorno de desarrollo

1. Si aún no tienes NodeJS debes descargarlo desde su [sitio oficial](https://nodejs.org/en/download/) e instalarlo

1. Crearemos una nueva carpeta llamada `adoptapet-api` con la siguiente estructura:

```
adoptapet-api/
├── config/
├── models/
├── controllers/
├── routes/
└── app.js
``` 

1. Nos posicionaremos en esa carpeta e iniciaremos un nuevo proyecto con el comando `npm init -y`
1. Ejecutaremos el siguiente código 

    ```bash
    npm install express body-parser cors
    ```

1. Instalar nodemon de manera global

    ```bash
    npm install -g nodemon
    ```

    Nodemon nos servirá para agilizar el desarrollo, ya que recarga nuestro server de manera automática, de esta manera no tendremos que reiniciar el servidor manualmente cada que  realicemos cambios.

    Nota: Si tienes problemas con permisos de instalación, intenta ejecutando el comando con `sudo`

1. Agregar la siguientes dos líneas dentro del objeto "scripts" del archivo `package.json`:

    ```bash
    "start": "node ./app.js",
    "dev": "nodemon ./app.js",
    ```

1. Verifica que tu archivo `package.json` luzca similar a esto:

    ```json
    {
      "name": "adoptapet-api",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start": "node ./app.js",
        "dev": "nodemon ./app.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "body-parser": "^1.19.0",
        "cors": "^2.8.5",
        "express": "^4.17.1"
      }
    }
    ```

    Aquí estarán instaladas las dependencias de nuestro proyecto.

1. Ahora editaremos el archivo `app.js` con el siguiente código:

    ```jsx
    // Importamos las bibliotecas necesarias
    var express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors');

    // Objeto global de la app
    var app = express();

    // configuración de middlewares
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Manejando los errores 404
    app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    // Iniciando el servidor...
    var server = app.listen(process.env.PORT || 3000, function(){
      console.log('Escuchando en el puerto ' + server.address().port);
    });
    ```

1. Ingresaremos el comando `npm run dev` y si la configuración es correcta se ejecutará nodemon y veremos algo como esto en nuestra terminal:

    ![img/Untitled.png](img/Untitled.png)
    
[`Atrás: Sesión 04`](../README.md) | [`Siguiente: Reto 01`](../Reto-01)
