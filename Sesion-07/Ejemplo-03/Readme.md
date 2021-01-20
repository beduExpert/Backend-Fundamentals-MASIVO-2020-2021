# Ejemplo 3

## Objetivo

Crear un nuevo modelo (Solicitud) junto con la lógica de sus controladores.

## Requerimientos

Contar con el código de la API que se encuentra en desarrollo desde la Sesión 4.

## Desarrollo

1. Crea el modelo Solicitud en: `models/Solicitud.js` 

- Comenta el modelo previamente declarado.
- Inserta el siguiente código.

```jsx
const mongoose = require("mongoose");

var SolicitudSchema = new mongoose.Schema(
  {
    mascota: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Mascota",
    },
    anunciante: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usuario",
    },
    solicitante: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usuario",
    },
    estado: { type: String, enum: ["aceptada", "cancelada", "pendiente"] },
  },
  { collection: "solicitudes", timestamps: true }
);

  SolicitudSchema.methods.publicData = function(){
  return {
     id: this.id,
     idMascota: this.idMascota,
     fechaCreacion: this.fechaCreacion,
     idAnunciante: this.idAnunciante,
     idSolicitante: this.idSolicitante,
     estado: this.estado
    };
  };
  
mongoose.model('Solicitud', SolicitudSchema)
```

>💡 **Nota:**
> Si no se pasa el atributo `collection` en las opciones Mongoose nombrará la colección como `solicituds`, por eso es buena práctica pasar el nombre de la colección.
>

2. No olvides declarar el modelo en el archivo `app.js`

```jsx
...
require('./models/Usuario');
require('./config/passport');
require('./models/Mascota');
require('./models/Solicitud');
...
```

- El orden es importante, ya que los modelos Usuario y Mascota son utilizados dentro del modelo Mascota, entonces debe estar declarado primero.

3. Actualiza las rutas del archivo `routes/solicitudes.js` para usar el middleware de autorización.

```jsx
const router = require('express').Router();
const {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud
} = require('../controllers/solicitudes')
var auth = require('./auth');

router.get('/', auth.requerido, obtenerSolicitud)
router.get('/:id', auth.requerido, obtenerSolicitud)
router.post('/', auth.requerido, crearSolicitud)
router.put('/:id', auth.requerido, modificarSolicitud)
router.delete('/:id', auth.requerido, eliminarSolicitud)

module.exports = router;
```

4. Ahora actualiza la función `crearSolicitud` en `controllers/solicitudes.js`

```jsx
const mongoose = require("mongoose");
const Usuario = mongoose.model('Usuario')
const Solicitud = mongoose.model('Solicitud')
const Mascota = mongoose.model('Mascota')
mongoose.set('useFindAndModify', false);

function crearSolicitud(req, res, next) { // POST v1/solicitudes?mascota_id=021abo59c96b90a02344...
  // Buscamos la mascota a solicitar
  Mascota.findById(req.query.mascota_id, async (err, mascota) => {
    if (!mascota || err) {
      return res.sendStatus(404)
    }
    if (mascota.estado==='adoptado') {
      return res.sendStatus('La mascota ya ha sido adoptada')
    }
    // si está dispobible o pendiente podemos crear la solicitud
    const solicitud = new Solicitud()
    solicitud.mascota = req.query.mascota_id
    solicitud.anunciante = mascota.anunciante
    solicitud.solicitante = req.usuario.id
    solicitud.estado = 'pendiente'
    solicitud.save().then(async s => {
      // antes de devolver respuesta actualizamos el tipo de usuario a anunciante
      await Usuario.findOneAndUpdate({_id: req.usuario.id}, {tipo: 'anunciante'})
      res.status(201).send(s)
    }).catch(next)
  }).catch(next)
}
```

- Para crear una solicitud la compondremos de un id de la mascota, id del anunciante, así como el id del solicitante.

5. Actualiza la función obtenerSolicitud, esta te permitirá obtener todas las solicitudes.

```jsx
function obtenerSolicitud(req, res, next) {
  if (!req.params.id) {
    // sin :id, solo enlistaremos las solicitudes dónde el usuario es anunciante o solicitante
    Solicitud.find({ $or: [{ solicitante: req.usuario.id }, { anunciante: req.usuario.id }] }).then(solicitudes => {
      res.send(solicitudes)
    }).catch(next)
  } else {
    // Al obtener una solicitud individual con el :id poblaremos los campos necesarios
    Solicitud.findOne({ _id: req.params.id, $or: [{ solicitante: req.usuario.id }, { anunciante: req.usuario.id }] })
      .then(async (solicitud) => {
        // añadimos información sobre la mascota
        await solicitud.populate('mascota').execPopulate()
        if (solicitud.estado === 'aceptada') {
          // Si la solicitud ha sido aceptada, se mostrará la información de contacto
          await solicitud.populate('anunciante', 'username nombre apellido bio foto telefono email').execPopulate()
          await solicitud.populate('solicitante', 'username nombre apellido bio foto telefono email').execPopulate()
          res.send(solicitud)
        } else {
          res.send(solicitud)
        }
      }).catch(next)
  }
}
```

Aquí está el resultado de una solicitud que ha sido aceptada:

`GET[/v1/solicitudes/5eeb856741f87e8de15d031a](http://localhost:3000/v1/solicitudes/5eeb856741f87e8de15d031a)`

```json
{
  "_id": "5eeb856741f87e8de15d031a",
  "estado": "aceptada",
  "mascota": {
    "fotos": [
      "https://images.app.goo.gl/MsX6R9aTWfQKjsvW6"
    ],
    "_id": "5ee8f79d2ab51833d2147e26",
    "nombre": "Kalita",
    "descripcion": "Gatito bebé enncontrado debajo de un carro necesita hogar",
    "anunciante": "5ee7101ee584287c9d4d44ce",
    "createdAt": "2020-06-16T16:47:25.900Z",
    "updatedAt": "2020-06-16T16:47:25.900Z",
    "__v": 0
  },
  "anunciante": {
    "_id": "5ee7101ee584287c9d4d44ce",
    "username": "karly",
    "nombre": "Karla",
    "apellido": "Ivonne",
    "email": "karly@gmail.com",
    "telefono": "5512345678",
    "bio": "Yo soy Karly, look at me!",
    "foto": "http://pictures/foto-de-perfil"
  },
  "solicitante": {
    "_id": "5ee8f78b2ab51833d2147e25",
    "username": "sony",
    "nombre": "Sonia",
    "apellido": "Martinez",
    "email": "sony@gmail.com",
    "telefono": "5512345678",
    "bio": "Yo soy Sony, look at me!",
    "foto": "http://pictures/foto-de-perfil"
  },
  "createdAt": "2020-06-18T15:16:55.336Z",
  "updatedAt": "2020-06-18T17:46:45.704Z",
  "__v": 2
}
```
- Así nuestros usuarios podrán ponerse en contacto y concretar la adopción de su nuevo amigo.

6. Recomendación: [`Pasa al Reto 2:`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07/Reto-02)

[`Atrás: Reto 02`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07/Reto-02) | [`Siguiente: Reto 03`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07/Reto-03)
