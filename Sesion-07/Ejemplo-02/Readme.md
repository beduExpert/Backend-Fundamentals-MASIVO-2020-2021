# Ejemplo 2

## Objetivo

Crear un nuevo modelo (Mascota) junto con la lógica de sus controladores

## Requerimientos

Contar con el código de la API que se encuentra en desarrollo desde la lección 4.

## Desarrollo

1. Creando modelo Mascota:

- Abre el archivo:`models/Mascota.js` 
- En este archivo se encuentra la configuración del modelo <b>Mascota</b> previa a utilizar mongoose.
- Comenta el código en el archivo e inserta la declaración del esquema <b>Mascota</b>: 

```jsx
const mongoose = require("mongoose");

const MascotaSchema = new mongoose.Schema({
  nombre: {type: String, required: true}, // nombre de la mascota (o titulo del anuncio)
  categoria: { type: String, enum: ['perro', 'gato', 'otro'] }, // perro | gato | otro
  fotos: [String], // links a las fotografías
  descripcion: {type:String, required: true}, // descripción del anuncio
  anunciante: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}, // contacto con la persona que anuncia al animalito
  ubicacion: { type: String }, // muy importante
  estado:{type: String, enum:['adoptado', 'disponible', 'pendiente']},
}, { timestamps: true })

MascotaSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    categoria: this.categoria,
    fotos: this.fotos,
    descripcion: this.descripcion,
    anunciante: this.anunciante,
    ubicacion: this.ubicacion,
    estado: this.estado
  };
};

mongoose.model('Mascota', MascotaSchema)
```

- Para la propiedad categoría utilizaremos un `enum` el cuál nos permite pasar únicamente los valores 'perro', 'gato' u 'otro'.
- Para la propiedad anunciante, crearemos una referencia el modelo Usuario que contendrá el id de un usuario y nos servirá más adelante.

2. Recuerda importar el modelo en `app.js` debajo de dónde importamos el modelo Usuario.


```jsx
...
require('./models/Usuario');
require('./config/passport');
require('./models/Mascota');
...
```

3. Modifica las rutas del archivo `routes/mascotas.js`,  agregar las siguientes autorizaciones:
```jsx
const router = require('express').Router();
const {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
} = require('../controllers/mascotas')
var auth = require('./auth');

router.get('/', auth.opcional,obtenerMascotas)
router.get('/:id', auth.opcional, obtenerMascotas)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearMascota)
router.put('/:id',auth.requerido, modificarMascota)
router.delete('/:id',auth.requerido, eliminarMascota)

module.exports = router;
```

4. En el controlador mascotas, es decir: `controllers/mascotas.js`, actualiza la función `crearMascota` con el siguiente código:

```jsx
const mongoose = require('mongoose')
const Mascota = mongoose.model('Mascota')

function crearMascota(req, res, next) {
  var mascota = new Mascota(req.body)
  mascota.anunciante = req.usuario.id
  mascota.estado = 'disponible'
  mascota.save().then(mascota => {
    res.status(201).send(mascota)
  }).catch(next)
}

```

5. En el controlador mascotas, es decir: `controllers/mascotas.js`, actualiza la función `obtenerMascotas` con el siguiente código:

```jsx
function obtenerMascotas(req, res, next) {
  Mascota.find().then(mascotas=>{
    res.send(mascotas)
  }).catch(next)
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
7. Recomendación: [`Pasa al Ejemplo 3:`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07/Ejemplo-03)

[`Atrás: Reto 01`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07/Ejemplo-03) | [`Siguiente: Reto 02`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07/Reto-02)
