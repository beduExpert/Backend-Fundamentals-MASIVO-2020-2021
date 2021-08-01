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

### Populate

El método populate nos sirve para *poblar* documentos que son integrados dentro de otros documentos.

6. Cuando queramos obtener una mascota en específico, en el endpoint 'v1/mascotas/:id'. Será necesario mostrar la información de su anunciante, así que agregaremos una condición para que cuándo un id esté presente se agreguen los campos username, nombre, apellido, bio y foto del anunciante.

- De nuevo, actualiza el controlador mascotas, es decir: `controllers/mascotas.js`, muestra los datos del anunciante de una mascota, modificando la función `obtenerMascotas` con el siguiente código:

```jsx
function obtenerMascotas(req, res, next) {
  if(req.params.id){
    Mascota.findById(req.params.id)
      .populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
        res.send(mascotas)
      }).catch(next)
  } else {
    Mascota.find().then(mascotas=>{
      res.send(mascotas)
    }).catch(next)
  }
}
```

Obtendremos una respuesta como está:

```json
{
  "categoria": [
    "gato"
  ],
  "fotos": [
    "https://images.app.goo.gl/MsX6R9aTWfQKjsvW6"
  ],
  "estado": [
    "disponible"
  ],
  "_id": "5ee8f79d2ab51833d2147e26",
  "nombre": "Kalita",
  "descripcion": "Gatito bebé encontrado debajo de un carro necesita hogar",
  "anunciante": {
    "_id": "5ee7101ee584287c9d4d44ce",
    "username": "karly",
    "nombre": "Karla",
    "apellido": "Ivonne",
    "bio": "Yo soy Karly, look at me!",
    "foto": "http://pictures/foto-de-perfil"
  },
  "createdAt": "2020-06-16T16:47:25.900Z",
  "updatedAt": "2020-06-16T16:47:25.900Z",
  "__v": 0
}
```

[`Atrás: Reto 02`](../Reto-01) | [`Siguiente: Reto 03`](../Reto-02)
