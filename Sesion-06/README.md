# Sesión 6 - Mongoose

🎯 **Objetivo:**

- Comprender la utilidad de un ORM. 
- Modelar e Integrar nuestra API basada en Express con una base de datos por medio de Mongoose para MongoDB.

## 📡 Interactuar con la base de datos

Hay dos opciones.

- Utilizar el lenguaje de consulta nativo de la base de datos.
- Utilizar un **ORM**/ **ODM** (*Object Relational Mapping*/*Object Data Mapping*) que representa los datos como objetos de JavaScript.

La principal diferencia es cómo vamos a escribir las consultas.

### ¿Cuál es la mejor opción? 😮

Si nos interesa el desempeño de las consultas (que tan rápido se hacen ⏳) entonces la mejor opción es usar el lenguaje nativo de la base de datos. 

Pero si queremos facilitar el escribir las consultas, lo mejor es usar un **ORM**/ **ODM** pues siempre pensamos y escribimos en el mismo lenguaje. También nos ayudan a simplificar el proceso de validación y verificación de los datos.

> 💡 Usar **ORM**/ **ODM** nos ayuda también en el mantenimiento del código, a menos de que el desempeño sea de suma importancia se recomienda mas el uso de estas herramientas.

## 🦦 Mongoose

`Mongoose` es una biblioteca de **ODM** para MongoDB y Node.js. Nos ayuda a manejar las relaciones entre los datos, cuenta con un esquema de validaciones y se usa para la traducción entre objetos en código y su representación en MongoDB.

### Instalación 

- [`Ejemplo 1: Configuración de Mongoose`](Ejemplo-01/)


- [`Ejemplo 2: Definición de los Modelos`](Ejemplo-02/)
- [`Reto 01: Definición de los modelos restantes`](Reto-01/#reto-1)


- [`Ejemplo 3: Definición de los Controladores`](Ejemplo-03/)
- [`Reto 01: Definición de los controladores restantes`](Reto-02/#reto-1)


- [`Ejemplo 4: Routers`](Ejemplo-04/)
- [`Reto 03: Probando los endpoints`](Reto-03/#reto-1)





### Creando modelos y métodos

- [`Ejemplo 2: Crear un nuevo modelo (Mascota) junto con la lógica de sus controladores`](Ejemplo-02/)
<!-- - [`Reto 02: Crear el método modificarMascota`](Reto-02/#reto-2) -->
<!-- 
- [`Ejemplo 3: Crear un nuevo modelo (Solicitud) junto con la lógica de sus controladores`](Ejemplo-03/)
- [`Reto 03: Crea el método modificarSolicitud`](Reto-03/#reto-3)


### Probando endpoints

- [`Reto 04: Probando endpoints.`](Reto-04/#reto-4) -->
