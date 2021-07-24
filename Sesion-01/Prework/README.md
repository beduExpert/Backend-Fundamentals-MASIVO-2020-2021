[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Arquitectura de software`](../README.md) > `Prework`

# Prework - Ciclo de desarrollo de la arquitectura

## Objetivo

+ Conocer y comprender las diferentes etapas del desarrollo de la arquitectura de un sistema o aplicación.

## Requerimientos

Computadora y cuaderno o aplicación para tomar apuntes.

## Instrucciones

Lee el siguiente material y toma apuntes.
Investiga a mayor detalle los conceptos listados y toma notas de ejemplos que encuentres en la web.

## Desarrollo

## **¿Por qué es importante la arquitectura de software?**
La arquitectura de software es de especial importancia ya que la manera en que se estructura un sistema tiene un impacto directo sobre la capacidad de este para satisfacer lo que se conoce como los atributos de calidad del sistema. Ejemplos de atributos de calidad son el **desempeño**, que tiene que ver con el tiempo de respuesta del sistema a las peticiones que se le hacen; la **usabilidad**, que tiene que ver con qué tan sencillo les resulta a los usuarios realizar operaciones con el sistema; o bien la **modificabilidad**, que tiene que ver con qué tan simple resulta introducir cambios en el sistema. 

Los atributos de calidad son parte de los requerimientos (no funcionales) del sistema y son características que deben expresarse de forma cuantitativa. No tiene sentido, por ejemplo, decir que el sistema debe devolver una petición *de manera rápida*, o presentar una página *ligera*, ya que no es posible evaluar objetivamente si el sistema cubre o no esos requerimientos.

La manera en que se estructura un sistema permitirá o impedirá que se satisfagan los atributos de calidad.

Por ejemplo, un sistema estructurado de tal manera que una petición deba transitar por muchos componentes antes de que se devuelva una respuesta podría tener un desempeño pobre. Por otro lado, un sistema estructurado de tal manera que los componentes estén altamente acoplados entre ellos limitará severamente la modificabilidad. Curiosamente, la estructuración tiene un impacto mucho menor respecto a los requerimientos funcionales del sistema.

Además de los atributos de calidad, la arquitectura de software juega un papel fundamental para guiar el desarrollo. Una de las múltiples estructuras que la componen se enfoca en partir el sistema en componentes que serán desarrollados por individuos o grupos de individuos. La identificación de esta estructura de asignación de trabajo es esencial para apoyar las tareas de planeación del proyecto.

Finalmente, los diseños arquitectónicos que se crean en una organización pueden ser reutilizados para crear sistemas distintos. Esto permite reducir costos y aumentar la calidad, sobre todo si dichos diseños han resultado previamente en sistemas exitosos.

## **El ciclo de desarrollo de la arquitectura**

>La arquitectura de software de un sistema es el conjunto de estructuras necesarias para razonar sobre
>el sistema. Comprende elementos de software, relaciones entre ellos, y propiedades de ambos.
>
>(Bass, Clements y Kazman, 2012).

Dentro de un proyecto de desarrollo, e independientemente de la metodología que se utilice, se puede hablar de *desarrollo de la arquitectura de software*. Este desarrollo, que precede a la construcción del sistema, esta dividido en las siguientes etapas: requerimientos, diseño, documentación y evaluación. 

Cabe señalar que las actividades relacionadas con el desarrollo de la arquitectura de software generalmente forman parte de las actividades definidas dentro de las metodologías de desarrollo.

Aunque seamos los mejores programadores, al iniciar a construir una aplicación de software podemos enfrentamos al problema de no saber por dónde comenzar si no tenemos los fundamentos necesarios de arquitectura de software. Por esto es necesario conocer el ciclo de la arquitectura de software y lo que involucra. Este ciclo está compuesto por las siguientes etapas:

+ **Requerimientos:**

La etapa de requerimientos se enfoca en la captura, documentación y priorización de requerimientos que influencian la arquitectura. Como se mencionó anteriormente, los atributos de calidad juegan un papel preponderante dentro de estos requerimientos, así que esta etapa hace énfasis en ellos. Otros requerimientos, sin embargo, son también relevantes para la arquitectura, estos son los requerimientos funcionales primarios y las restricciones.

+ **Diseño:**

La etapa de diseño es la etapa central en relación con la arquitectura y probablemente la más compleja. Durante esta etapa se definen las estructuras que componen la arquitectura. La creación de estas estructuras se hace en base a patrones de diseño, tácticas de diseño y elecciones tecnológicas. El diseño que se realiza debe buscar ante todo satisfacer los requerimientos que influencian a la arquitectura, y no simplemente incorporar diversas tecnologías por que están “de moda”.

+ **Documentación:**

Una vez creado el diseño de la arquitectura, es necesario poder comunicarlo a otros involucrados dentro del desarrollo. La comunicación exitosa del diseño muchas veces depende de que dicho diseño sea documentado de forma apropiada. La documentación de una arquitectura involucra la representación de varias de sus estructuras que son representadas a través de distintas vistas. Una vista generalmente contiene un diagrama, además de información adicional, que apoya en la comprensión de dicho diagrama.

+ **Evaluación:**

Dado que la arquitectura de software juega un papel crítico en el desarrollo, es conveniente evaluar el diseño una vez que este ha sido documentado con el fin de identificar posibles problemas y riesgos. La ventaja de evaluar el diseño es que es una actividad que se puede realizar de manera temprana (aún antes de codificar), y que el costo de corrección de los defectos identificados a través de la evaluación es mucho menor al costo que tendría el corregir estos defectos una vez que el sistema ha sido construido.
