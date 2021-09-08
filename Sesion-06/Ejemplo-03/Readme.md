[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Ejemplo 3`

# Ejemplo 3

## Objetivo

Definir controladores para la conexión con la base de datos.

## Requerimientos

Contar con el código de la API que se encuentra en desarrollo desde la Sesión 4.

## Desarrollo

1. Nuestros controladores hasta este momento no eran persistentes, lo que quiere decir que en realidad no alteraban el estado de mi programa, simplemente simulaban hacerlo. Llego la hora de volverlos persistentes gracias a nuestra base de datos.

Ahora implementaremos los métodos que nos proporciona Mongoose en nuestro controlador <b>mascotas</b>, es decir:  `controllers/mascotas.js`. 

- Estudiaremos aquellas funciones que te permitirán hacer operaciones <b>CRUD</b> sobre tu modelo Mascotas.
- Recuerda: <b>C - Create, R - Read, U - Update, D - Delete</b>.


1. Primero importamos `mongoose` y el modelos de mascota que definimos en el ejemplo anterior. 

```jsx
const mongoose = require("mongoose")
const Mascota = mongoose.model("Mascota")
```

1. Definimos el **CRUD** Instanciaremos una nueva mascota utilizando el esquema que definimos y luego la guardaremos en la base de datos con la función `save()`.

- `crearMascota`

```jsx
function crearMascota(req, res, next){
  var mascota = new Mascota(req.body)
    mascota.estado = 'disponible'
    mascota.save().then(mascota => {
      res.status(201).send(mascota)
    }).catch(next)
}
```

- `obtenerMascota` Primero vemos si estamos recibiendo un `id` si es el caso se busca la mascota con `findById()` y en caso de encontrarla la regresamos, en otro caso enviamos un error. Si el cliente no nos pasa el `id` entonces regresamos todas las mascotas.

```jsx
function obtenerMascota(req, res, next){
  if(req.params.id){
    Mascota.findById(req.params.id).then(mascota => {
        res.send(mascota)
      }).catch(next)
  } else {
    Mascota.find().then(mascotas => {
      res.send(mascotas)
    }).catch(next)
  } 
}
```

- `modificarMascota` Se busca la mascota, y se modifican los campos que se envían desde el front sobre ella, una vez que terminamos ese proceso, lo guardamos.

```jsx
function modificarMascota(req, res,next){
   Mascota.findById(req.params.id).then(mascota => {
      if (!mascota) { return res.sendStatus(401); }
      let nuevaInfo = req.body
      if (typeof nuevaInfo.nombre !== 'undefined')
        mascota.nombre = nuevaInfo.nombre
      if (typeof nuevaInfo.categoria !== 'undefined')
        mascota.categoria = nuevaInfo.categoria
      if (typeof nuevaInfo.fotos !== 'undefined')
        mascota.fotos = nuevaInfo.fotos
      if (typeof nuevaInfo.descripcion !== 'undefined')
        mascota.descripcion = nuevaInfo.descripcion
      if (typeof nuevaInfo.anunciante !== 'undefined')
        mascota.anunciante = nuevaInfo.anunciante
      if (typeof nuevaInfo.ubicacion !== 'undefined')
        mascota.ubicacion = nuevaInfo.ubicacion
      mascota.save().then(updated => {                                   
        res.status(201).json(updated.publicData())
      }).catch(next)
    }).catch(next)
}
```

- `eliminarMascota` se usa la función `findOneAndDelete()` a la que se le pasa el `id` de la mascota a eliminar.

```jsx
function eliminarMascota(req, res, next){
  Mascota.findOneAndDelete({ _id: req.params.id }).then(r => {
      res.status(200).send(`Mascota ${req.params.id} eliminada: ${r}`);
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

1. Hay que probar que todo funcione en insomnia o postman 😰.

## Agregaciones

En la sesión anterior hablamos de las agregaciones que son una herramienta en mongo que nos permite estructurar nuestras consultas. Esta herramienta puede usarse también a través de `mongoose` usando la función `aggregate()`.

1. Vamos a definir un servicio que nos regrese el total de mascotas que tenemos en una categoría especifica que vamos a recibir por parte del cliente. 

1. Primero vamos a resolver esta consulta directamente en Compass usando agregaciones para el caso en particular de los gatos.

  - Se hace un match para filtrar solo los documentos que corresponden con los gatos.
  - Agrupamos todos los documentos sumando cuantos son. 

> Nota 💡
> se puede usar la instrucción `$count` en lugar de `$group` para contar los documentos.

1. Ahora lo vamos a resolver directamente desde la API. Definimos una nueva función `count` en el controlador de mascotas.

Para esta función vamos a usar `aggregate()` que es una función de `mongoose` y su único parámetro es el pipeline de nuestra agregación modelado como un arreglo de instrucciones y cada instrucción es un objeto de JavaScript.

Por ejemplo la agregación que definimos es la siguiente:

```jsx
[
  {
    '$match': {
      'categoria': 'Gato'
    }
  }, {
    '$count': 'total'
  }
]
```
Entonces la definición de `count` queda es la siguiente.


```jsx
function count(req,res,next) {
  var categoria = req.params.cat
  Mascota.aggregate([
    {'$match': { 'categoria': categoria}}, 
    {'$count': 'total'}
  ]).then(r => {
    res.status(200).send(r)
  })
}
```

1. Hay que agregar la función `count` a las exportaciones del modulo:
```jsx
module.exports = {
  crearMascota,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
  count
}
```

1. Por último vamos a agregar la ruta al archivo `routes/mascotas.js`. 

```jsx
router.get('/count/:cat', count);
```
 
Recuerda que es importante importar la función `count` desde el controlador. 

También hay que notar que el orden en el que definimos las rutas si importa en el resultado de nuestra API.

1. Probemos que funciona en insomnia.


[`Atrás`](../Reto-01) | [`Siguiente`](../Reto-02)
