[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Arquitectura de software`](../README.md) >[`Ejemplo-03`](../Ejemplo-03) > `Reto 3`
	
### Reto 3

Crea las 3 clases restantes en javascript para representar nuestros modelos. Recuerda preguntarte para cada clase

- **¿Qué propiedades necesito guardar en el sistema?** 

- **¿Que funciones y atributos son necesarios para cumplir con mis historias de usuario?**

<img src="https://user-images.githubusercontent.com/13757596/87735418-138baa80-c79b-11ea-9824-1690872acd64.png" width="600">


>💡**Recurda:**
>
>### Vista
>
>Cuando iniciamos un proyecto desde cero, es recomendable  diseñar y documentar nuestras vistas por medio de bocetos de las interfaces necesarias para un primer prototipo ***(wireframes)***. Este tarea es común que sea encomendada a el equipo de desarrollo y diseño en conjunto, si es que se cuenta con uno.
>
>Los [wireframes](https://www.lucidchart.com/pages/es/que-es-un-wireframe-para-un-sitio-web) se catalogan en tres o cuatro tipos, los cuales van desde lo más básico y de baja calidad hasta lo más detallado y con interacciones prediseñadas.
>
><img src="https://github.com/beduExpert/A2-Backend-Fundamentals-2020/blob/master/Sesion-03/Ejemplo-03/img/wireframes.png?raw=true" width="700">
>
>Hablando estrictamente de la implementación en código, es posible entregar todas las vistas desde el backend por medio de funciones que generen y devuelvan al usuario un documento html o también ayudándonos de un motor de plantillas.
>
>Si por ejemplo, tenemos un servidor con las mismas características que el de la sesión pasada (ubuntu ejecutando Apache), podríamos configurar el lenguaje de programación PHP, crear nuestros modelos, controladores y generar de manera dinámica nuestras vistas, creando así nuestro propia implementación de MVC, o también podemos utilizar el framework Laravel para seguir el patrón MVC utilizando PHP y no *reinventar la rueda*.
>
>Actualmente es muy común que los *frontend developers* se encarguen de la responsabilidad de programar las vistas, esto de alguna manera nos hace replantearnos la arquitectura MVC y comenzar a utilizar arquitecturas mas complejas pero que nos den ventajas a la hora de trabajar en equipo.
>
>### Controlador
>
>El controlador establece la comunicación entre el cliente y nuestro servidor. Aquí es común encontrarnos con el patrón CRUD para permitirle al cliente realizar operaciones básicas con nuestros modelos. Estas operaciones son:
>
>**C - Create (crear)**
>
>**R - Read (leer)**
>
>**U - Update (actualizar)**
>
>**D - Delete (eliminar)**
>
>Para la finalidad de este curso asumiremos que AdoptaPet contará con una arquitectura cliente-servidor y con equipos independientes de frontend y backend.
Para que el sistema que desarrolle frontend se comunique con nuestro backend crearemos una *"interfaz"* o API en la siguiente sesión.

[`Atrás: Ejemplo 03`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-03/Ejemplo-03)
