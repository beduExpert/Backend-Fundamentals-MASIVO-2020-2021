[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Ejemplo 2`

# Ejemplo 2

## Objetivo

Crear un nuevo modelo (Mascota) junto con la lógica de sus controladores

## Requerimientos

Contar con el código de la API que se encuentra en desarrollo desde la lección 4.

## Desarrollo

1. Para definir la estrucutra que tendrán los documentos de una colección en MongoDB, es necesario definir un <b>schema</b> con mongoose. 

Un **Schema** es un objeto que modela la estructura (los campos) que tienen los documentos de nuestra base de datos. Lo podemos pensar como una traducción de los documentos en el lenguaje de Mongo a Javascript para usarlos desde el código de nuestro backend.

1. Generemos el schema para el modelo <b>Usuario</b>, utilizando la clase `Schema` de mongoose. Abre el código de tu modelo Usuario, comenta el código actual. Primero se importa la biblioteca `Mongoose` que vamos a estar utilizando.

  ```jsx
  const mongoose = require('mongoose');
  ```

1. Ahora definimos el `Schema`  la definición de un `schema` incluye todos los campos que se almacenan en el documento que están representando junto con su tipo de dato, el `schema` para Usuario es el siguiente:

  ```jsx
   const UsuarioSchema = new mongoose.Schema({      
     username: String,                              
     nombre: String,
     apellido: String, 
     email: String,
     password: String,
     ubicacion: String,
     telefono: String,
     bio: String,
     foto: String,
     tipo: String,
   }, { timestamps: true, collection: 'usuarios' });         
  ```    

- El modelo ahora no tiene un id ya que por defecto Mongoose le agrega el atributo `_id` a un documento cuando es creado.
- La opción `{ timestamps: true }` agrega automáticamente la hora y fecha de creación (`createdAt` and `updatedAt`) cada que se crea o actualiza un documento.
- `collection` es en donde se define la colección de la base de datos a donde apunta este esquema.

1. Al definir un schema es necesario definir también una función llamada `publicData` para este, esta función devuelve únicamente los datos públicos del `Schema`. 

```jsx
  UsuarioSchema.methods.publicData = () => {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      nombre: this.nombre,
      apellido: this.apellido,
      bio: this.bio,
      foto: this.foto,
      tipo: this.tipo,
      ubicacion: this.ubicacion,
      telefono: this.telefono,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  };
```

Como se ve en la definición, la contraseña no se regresa pues se trata de información privada.

1. Por último definimos la correspondencia entre la colección Usuario y el schema `UsuarioSchema`

```jsx 
   mongoose.model("Usuario", UsuarioSchema); 
```

Y de esta forma ya sabe como manejar los usuarios tanto en la base de datos como en la API.

1. Ahora vamos a crear el modelo para Mascota:

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
}, { timestamps: true , collection : 'mascotas'})

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

Observemos un par de cosas.

- En esta definición se agregaron restricciones sobre algunos de los campos como lo es `required: true` que lo que dice es que no se puede crear una Mascota sin ese campo.
- Para la propiedad categoría utilizaremos un `enum` el cuál nos permite pasar únicamente los valores 'perro', 'gato' u 'otro'.
- Para la propiedad anunciante, crearemos una referencia el modelo Usuario que contendrá el id de un usuario y nos servirá más adelante.

2. Por último, es necesario  importar los modelos que acabamos de crear  en  el archivo`app.js` junto con el resto de nuestros `import`. Esto es para que en `app.js` se conozca la definición de los modelos y puedan utilizarse.


```jsx
...
require('./models/Usuario');
require('./models/Mascota');
...
```



[`Atrás`](../README.md) | [`Siguiente`](../Reto-01)
