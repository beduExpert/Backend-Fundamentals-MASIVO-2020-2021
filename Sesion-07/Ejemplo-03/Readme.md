[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Ejemplo 3`

# Ejemplo 3

## Objetivo

Utilizar PassportJS para la autenticación de usuarios.

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 4.

## Desarrollo

## Configurando sesiones con Passport.js

Passport es un paquete de autenticación para simplificar el manejo de sesiones en nuestras aplicaciones.

1. Para hacer algunas configuraciones de nuestro ambiente, agregarás el archivo <b>index.js</b> debajo de la carpeta <b>config</b>, es decir: `config/index.js`

- Inserta las siguientes líneas. Quedará clara su utilidad en la siguiente sesión.

    ```jsx
    module.exports = {
      secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
    };
    ```

2. Crea un nuevo archivo `config/passport.js`con lo siguiente  

    ```jsx
    const passport = require('passport');                       //Importando passport, middleware para autenticación.
    const LocalStrategy = require('passport-local').Strategy;   //Importando estrategia autenticación. --> passport-local
    const mongoose = require('mongoose');
    const Usuario = mongoose.model('Usuario');

    passport.use(new LocalStrategy({                            //Configurando elementos utilizados para habilitar sesión.
      usernameField: 'email',
      passwordField: 'password'
    }, function (email, password, done) {
      Usuario.findOne({ email: email }).then(function (user) {
        if (!user || !user.validarPassword(password)) {
          return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
        }
        return done(null, user);
      }).catch(done);
    }));
    ```

    `LocalStrategy` inspecciona los campos `username` y `password` de las peticiones que vienen del frontend, esperando que la petición tenga el siguiente formato:

    ```json
    {
      "email": "yo@juanitovega.com",
      "password": "mipassword"
    }
    ```

4. Registra passport en `app.js`

    ```jsx
    require('./config/passport');
    ```

5. Para configurar autorizaciones sobre los distintos endpoints de nuestro proyecto, crearemos dos *middlewares* en el archivo `routes/auth.js`. Estos nos permitiran decodificar el código JWT.

- Crea el archivo <b>auth.js</b> debajo de la carpeta routes.
- Copia el siguiente código en el archivo recién creado.

    ```jsx
    const jwt = require('express-jwt');
    const secret = require('../config').secret;


    // Obtenemos el jwt del header de la petición y verificamos su existencia.
    function getTokenFromHeader(req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      }

      return null;
    }

    const auth = {
      requerido: jwt({
        secret: secret,
        algorithms: ['HS256'],
        userProperty: 'usuario',
        getToken: getTokenFromHeader
      }),
      opcional: jwt({
        secret: secret,
        algorithms: ['HS256'],
        userProperty: 'usuario',
        credentialsRequired: false,
        getToken: getTokenFromHeader
      })
    };

    module.exports = auth;
    ```

    - El *middleware* `requerido` se utilizará para endpoints donde se requiera tener una sesión y `opcional` donde no sean necesarios.
    - La función `getTokenFromHeader()` es una función que utlizarán los dos middlewares para extraer el token del header de `Authorization` de una petición http.
    - La propiedad `userProperty` es donde vendrá el JWT descifrado y que podrémos utilizar después en el objeto request por medio de `req.usuario`.
    

[`Atrás`](../Ejemplo-02) | [`Siguiente`](../Ejemplo-04)
