# Sesión 5 - Fundamentos de Base de Datos Relacionales(SQL)

🎯 **Objetivo:**

- Configurar una base de datos relacional, en que casos es conveniente utilizarlas, los fundamentos de los modelos de bases de datos relacionales y el lenguaje SQL.

## 💽 Bases de datos

El término base de datos se remonta a 1963. Una base de datos se puede definir como un conjunto de información relacionada que se encuentra agrupada ó estructurada, la cual se puede consultar y manipular.

El principal propósito de almacenar la información en una base de datos es que sea mas sencilla de manejar y mantener. 

---

## 🌐 Modelo relacional

Son bases de datos que almacenan información relacionándola por medio de tablas con columnas para la definición de atributos y filas para definir valores donde cada tabla represente a una entidad u objeto y cada columna a un atributo de esta entidad. Por lo general cada dato de una tabla cuenta con un identificador único, con el cual puede relacionarse con uno o más datos.

Los fundamentos de las bases de datos relacionales son la teoría de conjuntos.

---

## 💻 Gestores de Bases de Datos (DBMS)

Son programas que funcionan como interfaz entre lxs usuarixs y las bases de datos. Gestionando los datos, el motor de base de datos, y el esquema de la base para facilitar la organización y manipulación de los datos. 

En otras palabras, es un software mediante el cual nosotrxs como usuarixs podemos acceder a la base de daos y hacer consultas, manipular los datos, modificar el esquema y en general administrar la base de datos.   

### MySQL

MySQL es un sistema para gestionar bases de datos relacionales con un modelo cliente-servidor que cuenta con una amplia popularidad.

Hay un gran debate sobre como se  pronuncia **MySQL**, algunas personas lo pronuncian como *MAI-ES-KIU-EL* mientras que otras usan *MAI-SI-KUEL*, ¿cuál es la correcta? 🤷. En el siguiente [artículo](https://learnsql.com/blog/sql-or-sequel) puedes encontrar un análisis detallado de ambas y elegir cual prefieres. 

---

## 🖍 Diseño de Bases de datos

Las fases del diseño de bases de datos relacionales son: Análisis de requisitos, diseño conceptual, elección de un SGBD, diseño lógico, diseño físico, uso y mantenimiento.
     
![de248-fasesdedisenobd (1)](https://user-images.githubusercontent.com/13757596/87999687-40083500-cac1-11ea-8afe-a065ecf15f09.png)

### Instalación 

- [`Ejemplo 1 - Instalando MySQL`](Ejemplo-01/)

### Modelando una Base de datos relacional

- [`Ejemplo 2 - Diagramas entidad relación y Modelo Relacional`](Ejemplo-02/)
- [`Reto 01: Modelo Entidad Relación`](Reto-01/#reto-1)
<!-- - [`Reto 02: Diseño de bases datos relacionales`](Reto-02/#reto-2) -->

### Queries

- [`Ejemplo 3 - Ejecutando Queries`](Ejemplo-03/)
- [`Reto 02: Creación de la base de datos en SQL para Adoptapet.`](Reto-03/#reto-3)

<!-- ### Creación de bases de datos.

- [`Reto 04: Creación de la base de datos en SQL para Adoptapet.`](Reto-04/#reto-4)
 -->
## 🛡 Postwork

**Objetivo:**

- Reflexionar sobre el alcance de las bases de datos relacionales y la importancia de su implementación.

**Funciones y Procedimientos Almacenados**

Recuerda que todo lo trabajado en tu prework, así como durante la sesión, puede ser aplicado a tu proyecto personal. Para lo cual, toma las siguientes consideraciones...[`leer mas`](Postwork/#postwork)
