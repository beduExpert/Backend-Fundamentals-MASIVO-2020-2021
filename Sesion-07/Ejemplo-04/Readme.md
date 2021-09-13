[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Ejemplo 4`

# Ejemplo 4

## Objetivo

Definir el controlador de usuarios utilizando el manejo de sesiones.

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 4.

## Desarrollo

    
1. Ahora implementaremos los métodos que nos proporciona Mongoose en nuestro controlador <b>usuarios</b>, es decir:  `controllers/usuarios.js`. 

- Abre el archivo <b>controllers/usuarios.js</b> y comenta el código.
- Copia el siguiente código. 
- Analiza las funciones, encontrarás aquellas que te permitirán hacer operaciones <b>CRUD</b> sobre tu modelo Usuario.
- Recuerda: <b>C - Create, R - Read, U - Update, D - Delete</b>.

    ```jsx
    // controllers/usuarios.js
    const mongoose = require("mongoose")
    const Usuario = mongoose.model("Usuario")
    const passport = require('passport');

    function crearUsuario(req, res, next) {
      // Instanciaremos un nuevo usuario utilizando la clase usuario
      const body = req.body,
        password = body.password

      delete body.password
      const usuario = new Usuario(body)
      usuario.crearPassword(password)
      usuario.save().then(user => {                                         //Guardando nuevo usuario en MongoDB.
        return res.status(201).json(user.toAuthJSON())
      }).catch(next)
    }

    function obtenerUsuarios(req, res, next) {                              //Obteniendo usuario desde MongoDB.
      Usuario.findById(req.usuario.id, (err, user) => {
        if (!user || err) {
          return res.sendStatus(401)
        }
        return res.json(user.publicData());
      }).catch(next);
    }

    function modificarUsuario(req, res, next) {
      console.log(req.usuario)
      Usuario.findById(req.usuario.id).then(user => {
        if (!user) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.username !== 'undefined')
          user.username = nuevaInfo.username
        if (typeof nuevaInfo.bio !== 'undefined')
          user.bio = nuevaInfo.bio
        if (typeof nuevaInfo.foto !== 'undefined')
          user.foto = nuevaInfo.foto
        if (typeof nuevaInfo.ubicacion !== 'undefined')
          user.ubicacion = nuevaInfo.ubicacion
        if (typeof nuevaInfo.telefono !== 'undefined')
          user.telefono = nuevaInfo.telefono
        if (typeof nuevaInfo.password !== 'undefined')
          user.crearPassword(nuevaInfo.password)
        user.save().then(updatedUser => {                                   //Guardando usuario modificado en MongoDB.
          res.status(201).json(updatedUser.publicData())
        }).catch(next)
      }).catch(next)
    }

    function eliminarUsuario(req, res) {
      // únicamente borra a su propio usuario obteniendo el id del token
      Usuario.findOneAndDelete({ _id: req.usuario.id }).then(r => {         //Buscando y eliminando usuario en MongoDB.
        res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
      })
    }

    function iniciarSesion(req, res, next) {
      if (!req.body.email) {
        return res.status(422).json({ errors: { email: "no puede estar vacío" } });
      }

      if (!req.body.password) {
        return res.status(422).json({ errors: { password: "no puede estar vacío" } });
      }

      passport.authenticate('local', { session: false }, function (err, user, info) {
        if (err) { return next(err); }

        if (user) {
          user.token = user.generarJWT();
          return res.json({ user: user.toAuthJSON() });
        } else {
          return res.status(422).json(info);
        }
      })(req, res, next);
    }

    module.exports = {
      crearUsuario,
      obtenerUsuarios,
      modificarUsuario,
      eliminarUsuario,
      iniciarSesion
    }
    ```

7. Por último, actualizar el archivo `routes/usuarios.js` utilizando los middleware de autorización para proteger información sensible de los usuarios.

- Abre el archivo de configuración de endopoints de usuarios, es decir: <b>routes/usuarios.js</b>
- Comenta el código encontrado.
- Inserta el siguiente codigo:

    ```jsx
    const router = require('express').Router();
    const {
      crearUsuario,
      obtenerUsuarios,
      modificarUsuario,
      eliminarUsuario,
      iniciarSesion
    } = require('../controllers/usuarios')
    const auth = require('./auth');

    router.get('/', auth.requerido, obtenerUsuarios)
    router.get('/:id', auth.requerido, obtenerUsuarios);
    router.post('/', crearUsuario)
    router.post('/entrar', iniciarSesion)
    router.put('/:id', auth.requerido, modificarUsuario)
    router.delete('/:id', auth.requerido, eliminarUsuario)

    module.exports = router;
    ```
- Analiza el código, observa en que endpoints será necesario el <b>JWT</b> (Su contenido definirá si un usuario tiene o no autorización sobre el endpoint, así como que información puede ver. )

[`Atrás`](../Ejemplo-03) | [`Siguiente`](../Reto-01)
