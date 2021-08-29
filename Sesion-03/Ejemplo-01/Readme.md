[`Backend Fundamentals`](../../README.md) > [`Sesión 03`](../README.md) > `Ejemplo 1`

# Modelo Vista Controlador

## Objetivo

Entender la arquitectura Modelo Vista Controlador y su utilidad en la etapa de diseño de una aplicación.

## Requerimientos

Computadora y cuaderno para tomar notas. Estar familiarizado con el concepto de Programación Orientada a Objetos.

## Desarrollo

Una de las maneras para bajar nuestras ideas y comenzar a diseñar la arquitectura de nuestra solución de software es por medio del patrón MVC *(Model View Controller)* 

### ¿Qué es MVC?

Es un patrón de diseño que separa las partes de nuestra aplicación en tres elementos.

- **Modelo:** Contiene una representación de los datos que maneja el sistema, su lógica de negocio, y sus mecanismos de persistencia.
- **Vista:**  Compone y presenta la información que se envía al cliente y los mecanismos interacción con éste por medio de una interfaz de usuario.
- **Controlador:** Actúa como un intermediario entre el Modelo y la Vista, gestionando el flujo de información entre ellos y las transformaciones para adaptar los datos a las necesidades de cada uno.

<img src="https://designlopers.com/views/assets/post/Desarrollo_de_aplicaciones_profesionales_en_PHP_y_MVC.png" width="550">

### Flujo MVC

MVC es un estilo de arquitectura que nos sirve para abstraer el funcionamiento de nuestra aplicación y separar las partes referentes al negocio de la lógica. Actualmente existen varios frameworks que han adaptado este estilo a su manera y que nos ayudan a no perder tiempo y comenzar a desarrollar con reglas preestablecidas. Algunos de estos frameworks son:

- SailJS o Express para NodeJS.
- Django si lo tuyo es Python.
- Ruby on Rails para el lenguaje de programación Ruby.
- Laravel si lo tuyo es PHP.

Los cuales nos permiten entregarle al usuario las vistas (documentos HTML, CSS y Javascript) desde el servidor.

MVC también ha sido adaptado para utilizarse en frontend y en Android.

### Modelo: Utilizando Programación Orientada a Objetos

Continuando con AdoptaPet, podemos identificar cuatro entidades principales:

1. Mascota: Se refiere al animalito que los administradores registran y que los usuarios pueden adoptar.
2. Usuario: hay dos tipos de usuarios de nuestra aplicación, el tipo normal que busca adoptar una mascota y el tipo anunciante que puede ser el cuidador de la mascota o del centro de adopción. Se encarga de registrar a las mascotas y de contactarse con los usuarios cuando estos envían una solicitud, así como de aprobarla y rechazarla.
3. Solicitud: Una solicitud puede ser creada por un usuario para ponerse en contacto con el administrador y adoptar a una mascota. 

Estos cuatro elementos serán nuestros modelos. Utilizando programación orientada a objetos podemos crear una [clase](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes) para cada uno y así posteriormente el usuario podrá utilizar estos modelos creando instancias y obteniéndolas. 

```jsx
// Mascota.js

/** Clase que representa un animalito a adoptar */
class Mascota{
	constructor(nombre, categoria, fotos, descripcion, anunciante, ubicacion){
		this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
		this.categoria = categoria; // perro | gato | otro
		this.fotos = fotos; // links a las fotografías
		this.descripcion = descripcion; // descripción del anuncio
		this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
		this.ubicacion = ubicacion; // muy importante
	}
	
	guardar(){
		// función para guardar un nuevo registro en la base de datos.
	}
	
}
```

>💡**NOTA:**
>
>Este código nos va a permitir instanciar nuevos objetos, pero para que esta información persista debemos guardarla en una base de datos, algo que veremos en las sesiones posteriores.



### Vista

Cuando iniciamos un proyecto desde cero, es recomendable  diseñar y documentar nuestras vistas por medio de bocetos de las interfaces necesarias para un primer prototipo ***(wireframes)***. Este tarea es común que sea encomendada a el equipo de desarrollo y diseño en conjunto, si es que se cuenta con uno.

Los [wireframes](https://www.lucidchart.com/pages/es/que-es-un-wireframe-para-un-sitio-web) se catalogan en tres o cuatro tipos, los cuales van desde lo más básico y de baja calidad hasta lo más detallado y con interacciones prediseñadas.

<img src="https://github.com/beduExpert/A2-Backend-Fundamentals-2020/blob/master/Sesion-03/Ejemplo-03/img/wireframes.png?raw=true" width="700">

Hablando estrictamente de la implementación en código, es posible entregar todas las vistas desde el backend por medio de funciones que generen y devuelvan al usuario un documento html o también ayudándonos de un motor de plantillas.

Si por ejemplo, tenemos un servidor con las mismas características que el de la sesión pasada (ubuntu ejecutando Apache), podríamos configurar el lenguaje de programación PHP, crear nuestros modelos, controladores y generar de manera dinámica nuestras vistas, creando así nuestro propia implementación de MVC, o también podemos utilizar el framework Laravel para seguir el patrón MVC utilizando PHP y no *reinventar la rueda*.

Actualmente es muy común que los *frontend developers* se encarguen de la responsabilidad de programar las vistas, esto de alguna manera nos hace replantearnos la arquitectura MVC y comenzar a utilizar arquitecturas mas complejas pero que nos den ventajas a la hora de trabajar en equipo.

### Controlador

El controlador establece la comunicación entre el cliente y nuestro servidor. Aquí es común encontrarnos con el patrón CRUD para permitirle al cliente realizar operaciones básicas con nuestros modelos. Estas operaciones son:

**C - Create (crear)**

**R - Read (leer)**

**U - Update (actualizar)**

**D - Delete (eliminar)**

Para la finalidad de este curso asumiremos que AdoptaPet contará con una arquitectura cliente-servidor y con equipos independientes de frontend y backend.
Para que el sistema que desarrolle frontend se comunique con nuestro backend crearemos una *"interfaz"* o API en la siguiente sesión.


-------

[`Atrás`](../README.md) | [`Siguiente`](../Ejemplo-02)
