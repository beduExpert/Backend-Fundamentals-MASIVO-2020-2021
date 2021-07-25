[`Backend Fundamentals`](../../README.md) > [`Sesión 02`](../README.md) > `Ejemplo 2`

# Ejemplo 2

## Objetivo

Repasar los fundamentos de una API REST y configurar nuestro entorno para comenzar a desarrollar una API con NodeJS y Express.

## Requerimientos

Se recomienda tener NodeJS LTS instalado y funcionando correctamente. También es recomendable estar familiarizado con Javascript.

## Desarrollo

### ¿Qué es una API REST?

Cuando se habla de REST API, significa utilizar una API para acceder a aplicaciones backend, de manera que esa comunicación se realice con los estandares definidos por el estilo de arquitectura REST.

REST es un acrónimo para **RE**presentational **S**tate **T**ransfer, fue pensada para sistemas dedicados a la distribución de *hypermedia*. En REST se siguen los siguientes principios:

- Arquitectura cliente/servidor sin estado, es decir, no se almacena la información de las solicitudes, cada solicitud es independiente.
- Una interfaz uniforme entre los elementos, para que la información se transfiera de forma estandarizada.
- Acciones concretas (POST, GET, PUT y DELETE) para la transferencia de datos.
- Uso de formatos de transferencia para la comunicación. Para este caso en específico utilizaremos JSON como el formato para enviar respuestas y recibir peticiones de objetos. Se puede usar también XLT ó HTML
- Un sistema en capas que organiza en jerarquías invisibles para el cliente y cada uno de los servidores  que participan en la recuperación de la información solicitada.

Si bien parece una arquitectura muy restrictiva, esto sirve para que su uso sea mas sencillo. 

Es importante señalar que REST es un conjunto de normas que se pueden implementar a necesidad de la aplicación. 

<!-- 
PREWORK

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
Express.js es un framework de Node para desarrollo backend.
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

Le indica a npm de que forma debe ejecutar nuestro programa. De esta forma le indicamos que debe usar nodemon para ejecutarlo en el modo de desarrollo.
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

Express is a powerful but flexible Javascript framework for creating web servers and APIs. It can be used for everything from simple static file servers to JSON APIs to full production servers.

-->
## Definiendo nuestra API con ExpressJS

1. Para este ejemplo utilizaremos el proyecto que crearon en su prework, el cual tiene la siguiente estructura:

```
adoptapet-api/
├── config/
├── models/
├── controllers/
├── routes/
└── app.js
```

Por ahora nos concentraremos en el archivo `app.js` mas adelante (en la siguiente sesión) entenderemos a que corresponde cada directorio.

1. Express es un módulo de Node, así que es necesario importarlo para poder utilizarlo. Una vez importado creamos una instancia de aplicación de express al cual llamaremos `app`.

```javascript
const express = require('express');
const app = express();
```

1. Con la aplicación que creamos podemos iniciar un servidor que se encargará de escuchar las peticiones que se hagan a nuestra API y responderlas, pero para esto tenemos que indicarle *en dónde escuchar* peticiones dándole un puerto especifico. Para esto contamos con el método `listen()`.

```javascript
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```

como primer parámetro de `listen()` le pasamos el puerto que va a estar escuchando y como segundo un `callback` que se ejecuta una vez que el servidor está corriendo y listo para recibir peticiones.

<!-- 1. 
```javascript
app.use(express.static('public'));
``` -->

1. Y ahora ... ¿Cómo sabe el servidor como atender las peticiones? Para indicarle al servidor como reaccionar a cada petición se definen una serie de rutas. La respuesta de nuestro servidor dependerá de la ruta a la que se hace la petición y el método HTTP (`GET`, `POST`, etc.) que utiliza. La ruta es parte de la url de petición y va después del *hostname*. La url completa tiene la siguiente estructura:

```
<dirección del servidor>:<número de puerto>/<ruta de petición>
```

Por ejemplo, para nuestra aplicación sería

```
localhost:400/goods
```

En donde `goods` es la ruta de petición. Como desarrolladoras y desarrolladores de la API es nuestra tarea decirle al servidor como debe responder en cada una de las rutas. Para esto Express tiene métodos definidos para cada uno de las peticiones HTTP, por ejemplo, si la petición es un GET, usamos el método `app.get()` que funciona de la siguiente forma:

```javascript
app.get('/goods', (req, res, next) => {
  // Aquí construimos y enviamos la respuesta 
});
```

Analicemos los parámetros:

- `'/goods'` es la ruta de petición que estamos definiendo
- `(req, res, next) => {...}` es el callback que define el comportamiento. En el callback `req` representa la petición hecha (*request*) mientras que `res` es la respuesta que eventualmente se tiene que enviar.

Si no está definida la ruta sobre la cual se hace la petición, Express enviará un código 404 como respuesta.

1. Para definir el comportamiento del servidor bajo cierta ruta tenemos que construir la respuesta y enviarla al cliente. 

Para cada petición se espera una única respuesta y todas las peticiones deben ser respondidas. Recordemos que `res` modela la respuesta del servidor, y  tiene un método `.send()` que se encarga de enviarla.

> Nota: Seguir con el ejemplo del restaurante, enviando sopas.

<!-- The client is like a customer at a restaurant ordering a large bowl of soup: the request is sent through the wait staff, the kitchen prepares the soup, and after is it prepared, the wait staff returns it to the customer. In the restaurant, it would be unfortunate if the soup never arrived back to the customer, but it would be equally problematic if the customer was given four large bowls of soup and was asked to consume them all at the exact same time. That’s impossible with only two hands! -->

```javascript
const goods = [
  { name: 'Zeus' }, 
  { name: 'Ades' }, 
  { name: 'Hermes' }
];
app.get('/goods', (req, res, next) => {
  res.send(goods);
});
```

En el código anterior estamos enviando como respuesta un arreglo que tiene los nombres de los dioses.

Cuando se haga una petición `GET` a la ruta `/goods` Express buscara todas las definiciones de `app.get()` hasta encontrar una que haga match con la ruta `/goods` y cuando la encuentre ejecutará el callback definido.

1. Prueba la petición que acabamos de definir usando Insomnia.


    
[`Atrás`](../README.md) | [`Siguiente`](../Reto-02)
