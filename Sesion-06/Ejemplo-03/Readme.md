# Ejemplo 3

## Objetivo

Definir controladores para la conexión con la base de datos.

## Requerimientos

Contar con el código de la API que se encuentra en desarrollo desde la Sesión 4.

## Desarrollo

1. Nuestros controladores hasta este momento no eran persistentes, lo que quiere decir que en realidad no alteraban el estado de mi programa, simplemente simulaban hacerlo. Lego la hora de volverlos persistentes gracias a nuestra base de datos.

Ahora implementaremos los métodos que nos proporciona Mongoose en nuestro controlador <b>usuarios</b>, es decir:  `controllers/usuarios.js`. 

- Abre el archivo <b>controllers/usuarios.js</b> y comenta el código.
- Estudiaremos aquellas funciones que te permitirán hacer operaciones <b>CRUD</b> sobre tu modelo Usuario.
- Recuerda: <b>C - Create, R - Read, U - Update, D - Delete</b>.


1. Primero importamos `mongoose` y el modelos de usuario. 

```jsx
  const mongoose = require("mongoose")
  const Usuario = mongoose.model("Usuario")
```

1. Definimos el **CRUD** Instanciaremos un nuevo usuario utilizando la clase usuario y luego lo guardaremos en la base de datos con la función `save()`.

- `crearUsuario`

```jsx
  function crearUsuario(req, res, next) {
    const body = req.body

    const usuario = new Usuario(body)
    usuario.save().then(user => {                                        
      return res.status(201).json(user.toAuthJSON())
    }).catch(next)
  }
```

- `obtenerUsuario` Se busca el usuario con `findById()` y en caso de encontrarlo lo regresamos, en otro caso enviamso un error.

```jsx
  function obtenerUsuarios(req, res, next) {                              
    Usuario.findById(req.usuario.id, (err, user) => {
      if (!user || err) {
        return res.sendStatus(401)
      }
      return res.json(user.publicData());
    }).catch(next);
  }
```

- `modificarUsuario` Se busca al usuario, y se modifican los campos que se envían desde el front sobre el usuario, una vez que terminamos ese proceso, lo guardamos.

```jsx
  function modificarUsuario(req, res, next) {
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
        user.password = nuevaInfo.password
      user.save().then(updatedUser => {                                   
        res.status(201).json(updatedUser.publicData())
      }).catch(next)
    }).catch(next)
  }
```

- `eliminarUsuario` se usa la función `findOneAndDelete()` a la que se le pasa el `id` del usuario a eliminar.

```jsx
  function eliminarUsuario(req, res) {
    Usuario.findOneAndDelete({ _id: req.usuario.id }).then(r => {
      res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
    })
  }
```

1. Por último exportamos las funciones del **CRUD**.

```jsx
  module.exports = {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario,
  }
```

[`Atrás: Reto 02`](../Reto-02) | [`Siguiente: Reto 03`](../Reto-03)
