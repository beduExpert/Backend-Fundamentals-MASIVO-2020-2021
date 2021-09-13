[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Ejemplo 1`

# Ejemplo 1

## Objetivo

- Completar el esquema descrito para usuarios en la sesión anterior con restricciones y seguridad.

## Requerimientos

## Desarrollo

1. El esquema generado para el modelo <b>Usuario</b> en la sesión anterior, utilizando la clase `Schema` de mongoose se ve de la siguiente forma:

    ```jsx
   // Usuario.js
   const mongoose = require('mongoose');            //Importando mongoose.
    //Definiendo el objeto UsuarioSchema con el constructor Schema.
    //Definiendo cada campo con su respectivo tipo de dato.
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
   }, { timestamps: true });  

   //Define el modelo Usuario, utilizando el esquema UsuarioSchema.
   mongoose.model("Usuario", UsuarioSchema);        
    ```    
- El modelo ahora no tiene un id ya que por defecto Mongoose le agrega el atributo `_id` a un documento cuando es creado.
- La opción `{ timestamps: true }` agrega automáticamente la hora y fecha de creación (`createdAt` and `updatedAt`) cada que se crea o actualiza un documento.
    
2. Añadiendo validaciones al modelo de <b>Usuario</b>. 

    ```jsx
    // Usuario.js
   const mongoose = require('mongoose');                         //Importando mongoose.
   const uniqueValidator = require("mongoose-unique-validator"); //Importando módulo mongoose-unique-validator, pendiente de instalar.

   //Definiendo cada campo con sus tipos de dato y las validaciones sobre este.
   const UsuarioSchema = new mongoose.Schema({                   
    username: {                                                  
      type: String,
      unique: true, //este campo no se puede repetir
      lowercase: true,
      required: [true, "no puede estar vacío"],
      match: [/^[a-zA-Z0-9]+$/, "es inválido"],
      index: true,
    },                                           
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: {
      type: String,
      unique: true, //este campo no se puede repetir
      lowercase: true,
      required: [true, "no puede estar vacío"],
      match: [/\S+@\S+\.\S+/, "es inválido"],
      index: true,
    },
    ubicacion: String,
    telefono: String,
    bio: String,
    foto: String,
    tipo: { type: String, enum: ['normal', 'anunciante'] },
    hash: String, //este campo se utilizará para la sesión
    salt: String, //este campo se utilizará para la sesión
    },
    { timestamps: true }
    );

    // usando plugin de validación para que no se repitan correos ni usernames
    UsuarioSchema.plugin(uniqueValidator, { message: "Ya existe" }); 
    mongoose.model("Usuario", UsuarioSchema);    //Define el modelo Usuario, utilizando el esquema UsuarioSchema.
    ```

    - La opción `{index: true}` optimizará los queries para el campo username e email.
    - La opción `match` nos permite hacer validaciones sobre la estructura de la cadena de texto utilizando expresiones regulares.
    - En cada caso se nos permite definir un mensaje de error por si la estructura del usuario no es la esperada.

3. Se utiliza `uniqueValidator` de mongo para hacer las validaciones sobre `username` y `email` para que no se permitan valores repetidos en estos campos. Para lo cual es necesario instalar el paquete <b>mongoose-unique-validator</b>.

```bash
npm install mongoose-unique-validator
```

[`Atrás`](../README.md) | [`Siguiente`](../Ejemplo-02)
