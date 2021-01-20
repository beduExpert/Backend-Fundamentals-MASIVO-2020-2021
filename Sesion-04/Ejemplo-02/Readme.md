[`Backend Fundamentals`](../../README.md) > [`Sesión 04: API`](../README.md) > `Ejemplo 2`

# Ejemplo 2

## Objetivo

Entender los objetos de petición y respuesta que nos provee ExpressJS y cómo utilizarlos para agregar funcionalidad a nuestra API.

## Requerimientos

Se recomienda tener NodeJS LTS instalado y funcionando correctamente. También es recomendable estar familiarizado con Javascript y programación orientada a objetos.

## Desarrollo

En nuestra carpeta `models/` crearemos las clases de nuestras tres entidades con su respectivo nombre de archivo. Revisa que cada archivo tenga un código similar al siguiente

1. Archivo `models/Mascota.js`

```jsx
// Mascota.js
/** Clase que representa un animalito a adoptar */
class Mascota {
  constructor(id, nombre, categoria, fotos, descripcion, anunciante, ubicacion) {
    this.id = id;
    this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
    this.categoria = categoria; // perro | gato | otro
    this.fotos = fotos; // links a las fotografías
    this.descripcion = descripcion; // descripción del anuncio
    this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
    this.ubicacion = ubicacion; // muy importante
  }

}

module.exports = Mascota;
```

2. Archivo `models/Usuario.js`

```jsx
// Usuario.js
/** Clase que representa a un usuario de la plataforma*/
class Usuario {
  constructor(id, username, nombre, apellido, email, password, ubicacion, telefono, bio, fotos, tipo) {
    this.id = id;
    this.username = username;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.ubicacion = ubicacion;
    this.telefono = telefono;
    this.bio = bio;
    this.fotos = fotos;
    this.tipo = tipo; // tipo normal o anunciante
  }
}

module.exports = Usuario;
```

3. Archivo `models/Solicitud.js`

```jsx
// Solicitud.js
/** Clase que representa una solicitud de adopción */
class Solicitud {
  constructor(id, idMascota, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) {
    this.id = id;
    this.idMascota = idMascota;
    this.fechaDeCreacion = fechaDeCreacion;
    this.idUsuarioAnunciante = idUsuarioAnunciante;
    this.idUsuarioSolicitante = idUsuarioSolicitante;
    this.estado = estado;
  }

}

module.exports = Solicitud;
```

### Creando nuestros controladores

4. En la carpeta `controllers/` crearemos el archivo `usuarios.js` con la siguiente estructura:

```jsx
/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Usuario = require('../models/Usuario')

function crearUsuario(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var usuario = new Usuario(req.body)
  res.status(201).send(usuario)
}

function obtenerUsuarios(req, res) {
  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario(1, 'Juan', 'Vega', 'juan@vega.com')
  var usuario2 = new Usuario(2, 'Monserrat', 'Vega', 'mon@vega.com')
  res.send([usuario1, usuario2])
}

function modificarUsuario(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var usuario1 = new Usuario(req.params.id, 'Juan', 'Vega', 'juan@vega.com')
  var modificaciones = req.body
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}

function eliminarUsuario(req, res) {
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario
}
```

En el código anterior jugamos con las clases de Javascript para simular el comportamiento esperado de nuestra API en las primeras tres funciones.

Es importante entender los dos argumentos de nuestras funciones, (req y res).

El objeto [Request (req)](http://expressjs.com/es/4x/api.html#req) contiene un gran número de propiedades referentes a la petición HTTP como los parámetros, los *headers,* el cuerpo de la petición y más.

[Response (res)](http://expressjs.com/es/4x/api.html#res) es el objeto que utilizamos para componer la respuesta que enviaremos  con el método *send*.

[`Atrás: Reto 01`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/blob/master/Sesion-04/Reto-01) | [`Siguiente: Reto 02`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-04/Reto-02)
