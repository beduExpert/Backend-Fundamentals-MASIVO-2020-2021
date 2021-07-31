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

## 🧮 Bases de datos no relacionales (NoSQL) 

<img src="img/nosql.jpg.webp" align="right" height="200">

NoSQL es un enfoque de diseño de bases de datos que nos permite crear esquemas mas flexibles para el almacenamiento de datos en comparación con las tradicionales tablas de SQL. 

Las bases de dato no relacionales fueron presentadas en 1998 por Carl Strozz, sin embargo ha sido recientemente que han adquirido mayor popularidad y esto se debe principalmente a que vivimos en una era de **Cloud**, **Big Data** y **web** con información difícil de estandarizar que debe viajar a gran velocidad. 

NoSQL significa *Not Only SQL*, no es nada en contra de SQL 😅. Esto es importante pues muchos modelos de bases de datos no relacionales soportan SQL. 

## 🧵 Tipos de DB NoSQL

- **De documentos** Se almacenan los datos en estructuras llamadas documentos, estos contienen casa atributo como pares de clave-valor.

- **De grafos**  se utilizan para almacenar información sobre redes de datos, como las conexiones sociales.

- **De clave-valor** son las bases de datos NoSQL más simples. Cada elemento de la base de datos se almacena como un nombre de atributo junto con su valor.

- **Orientadas a columnas** estas bases de datos permiten realizar consultas en grandes conjuntos de datos y almacenan los datos en columnas, en lugar de filas.

![](img/schemas.png)

## 🍃 MongoDB 

MongoBD es un gestor de bases de datos no relacionales basada en documentos. Utiliza sintaxis de JSON para modelar su esquema.

### Clusters

- [`Ejemplo 1: Creando un cluster en MongoDB Atlas`](Ejemplo-01/#ejercicio-1)

##### <ins>Operaciones con bases de datos</ins>
<img src="imagenes/imagen5.png" align="right" height="200" width="300">

Una vez configurado el *cluster* a partir de __MongoDB Atlas__, podemos conectarnos a través de __MongoDB Compass__ y por lo tanto podremos crear bases de datos desde aquí.

Lo único que solicita __MongoDB Compass__, a través de una interfaz gráfica, es el nombre de la base de datos.

Por cierto, __MongoDB Compass__ no es el único cliente de __MongoDB__, también existen otras herramientas como __Robo 3T__ o el *shell* de __MongoDB__.

- [`Ejemplo 2: Creando bases de datos`](Ejemplo-02/Readme.md)
- [`Reto 1: Creando bases de datos`](Reto-01/Readme.md)

##### <ins>Operaciones con bases de datos</ins>
<img src="imagenes/imagen5.png" align="right" height="200" width="300">

Una vez configurado el *cluster* a partir de __MongoDB Atlas__, podemos conectarnos a través de __MongoDB Compass__ y por lo tanto podremos crear bases de datos desde aquí.

Lo único que solicita __MongoDB Compass__, a través de una interfaz gráfica, es el nombre de la base de datos.

Por cierto, __MongoDB Compass__ no es el único cliente de __MongoDB__, también existen otras herramientas como __Robo 3T__ o el *shell* de __MongoDB__.

- [`Ejemplo 3: Poblando la base de datos`](Ejemplo-03/Readme.md)
- [`Reto 2: Cargando sample datasets`](Reto-02/Readme.md)

#### <ins>Colecciones, Documentos y Proyecciones</ins>
<img src="imagenes/imagen2.jpg" align="right" height="200" width="300">

En __MongoDB__ los datos son almacenados en *colecciones* que incluyen documentos. Estos documentos se representan usando el formato de intercambio de información __JSON__. El formato __JSON__ se conforma de un conjunto de elementos de la forma *clave-valor* separados por comas y delmitados por llaves. Los tipos de datos de __JSON__ son:

- Números
- Booleanos
- Cadenas
- Arreglos
- Objetos

Para realizar consultas u otras operaciones en __MongoDB__ debe usarse este formato a manera de lenguaje (no es un lenguaje por sí mismo, pero lo usaremos como si lo fuera). En particular, para realizar proyecciones, se usa este formato. Debe indicarse el campo a proyectar y colocar un uno si queremos mostrarlo o cero en caso contrario.

- `{campo: 0}`
- `{campo: 1}`

- [**`EJEMPLO 4`**](Ejemplo-04/Readme.md)
- [**`RETO 3`**](Reto-03/Readme.md) 


