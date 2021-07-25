[`Backend Fundamentals`](../../README.md) > [`Sesión 03`](../README.md) > `Ejemplo 2`

# Ejemplo 2

## Objetivo

Modularizar el el proyecto para seguir el MVC.

## Requerimientos

Se recomienda tener NodeJS LTS y ExpressJS.

## Desarrollo

Con lo que vimos en la sesión anterior ya podemos definir la API completa y los servicios web para completar el CRUD de los modelos definidos en el ejemplo y reto anterior.

![gif](https://blog-cdn.crowdcontent.com/crowdblog/gif-yay-7.gif)

El problema con esto es que todo lo hemos definido en el mismo archivo `app.js` y mientras mas servicios o rutas queramos definir se volverá intratable. Pero este no es el único problema de tener toda la API definida en un archivo, vimos también que para que nuestra API sea REST debe implementar el MVC, entonces nuestra API tiene que estar perfectamente modularizada. 

Para lograr esto vamos a usar `Express.Router`, los `Routers` son como pequeñas aplicaciones de `Express` que se encargan de definir el comportamiento para el CRUD de un módulo en especifico. De esta forma se separan los servicios que le corresponden a ese módulo en un `Router` diferente en lugar de tenerlos todos en el archivo `app.js`.

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

// importamos el modelo de usuarios
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
  // simulando un usuario previamente existente que el cliente modifica
  var usuario1 = new Usuario(req.params.id, 'Juan', 'Vega', 'juan@vega.com')
  var modificaciones = req.body
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}

function eliminarUsuario(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario
}
```

En el código anterior jugamos con las clases de Javascript para simular el comportamiento esperado de nuestra API en las primeras tres funciones.


[`Atrás`](../Reto-01) | [`Siguiente`](../Reto-02)
