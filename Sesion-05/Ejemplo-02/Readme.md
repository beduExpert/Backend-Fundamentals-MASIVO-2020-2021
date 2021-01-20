# Ejemplo 2 - Diagramas entidad relación y Modelo Relacional

## Objetivo

Aprender a realizar diagramas entidad relación y utilizarlo como herramienta para modelar bases de datos de alto nivel con representaciones de esquemas conceptuales.

## Requerimientos

Herramienta de software de diagramación, para esta sesión ocuparemos [draw.io](https://www.draw.io)

## Desarrollo

### Modelo ER

El modelo entidad-relación se basa en los conceptos: entidad, tipo de entidad, atributo y relación.

- **Entidad**: Representación de un objeto que puede ser real o abstracto. Ej., de un restaurante se podría crear las entidades: **Empleado**, **menú**, **cocina**, **ingrediente**, **receta**, etc.

    Una entidad se representa en un diagrama conceptual en forma de rectángulos, como los siguientes:

    <img src="img/Screen_Shot_2020-06-12_at_22.38.42.png" width="500">


- **Tipo de entidad**: Es el conjunto de entidades que comparte los mismos atributos.
- **Atributo**: Es el componente o característica que determina una entidad. Ej., de la entidad **empleado** podemos determinar como atributos: **nombre**, **apellidos**, **teléfono**, **domicilio**, etc.

    Los atributos tienen la forma de óvalo como a continuación:

    <img src="img/Screen_Shot_2020-06-12_at_23.08.39.png" width="500">

    El concepto de **clave** viene ejemplificado en este diagrama, *RFC* será el atributo con el cual identificaremos univocamente cada entidad y que mediante relaciones podremos acceder a la entidad.

- **Relación**: Es una asociación entre varias entidades. Ej., en un restaurante una receta **tiene** ingredientes.

    En un diagrama podemos observar una relación en forma de rombo:

    <img src="img/Screen_Shot_2020-06-12_at_23.21.15.png" width="500">

    En este ejemplo podemos hablar de que un ingrediente **pertenece** a una receta y ese mismo ingrediente puede pertenecer a varias recetas, a su vez receta puede tener uno o más ingredientes. Es importante definir la **cardinalidad** en las relaciones ya que especificará el número de entidades con las que se puede asociar otra entidad.

    **1:1**

    <img src="img/Screen_Shot_2020-06-13_at_0.07.53.png" width="500">

    **1:N o N:1**

    <img src="img/Screen_Shot_2020-06-13_at_0.22.03.png" width="500">

    **N:N**

    <img src="img/Screen_Shot_2020-06-13_at_0.24.44.png" width="500">

    ### Modelo Relacional

    El modelo ER facilita las tareas de diseño conceptual de base de datos pero es necesario traducirlo a un esquema que sea compatible con un **Sistema de Gestión de Base de Datos** como lo es MySQL.

    El Modelo relacional es utilizado por la mayoría de los SGDB existentes en el mercado (Oracle, SQL Server, MaríaDB, SQLite).

    En el modelo relacional se utiliza un grupo de **tablas** para representar los datos y las relaciones entre ellos. Cada tabla está compuesta por varias **columnas** que representan los atributos de la entidad y **filas** que serán **registros** o **tuplas**.

    ### Restricciones de integridad

    La integridad de los datos es la propiedad que asegura que información dada es correcta, al cumplir ciertas aserciones. Las restricciones de integridad son propiedades de la base de datos que se deben satisfacer en cualquier momento entre las cuales están:

    - Integridad de clave primaria
    - Integridad referencial
    - Tratamiento de valores nulos
    - Valores por defecto

    ### ¿Cómo pasar del Modelo ER al Modelo Relacional?

    Del ejemplo de la entidad "*Empleado"*

    <img src="img/Screen_Shot_2020-06-12_at_23.08.39.png" width="500">

    Vamos a analizar el siguiente diagrama:

    <img src="img/Screen_Shot_2020-06-13_at_20.02.20.png" width="500">

    Hemos hablado que el modelo relacional son tablas y columnas, en este ejemplo la entidad *"Empleado"* será el nombre de nuestra tabla y cada atributo será una fila.

    Como lo vimos anteriormente el uso de **claves** es importante ya que se utilizan para definir relaciones. Las tablas se relacionan mediante una ***"relación de clave primaria o de clave foránea"***, dónde:

    - **Llave primaria**: Es una columna o conjunto de columnas en una tabla cuyos valores identifican de forma exclusiva un registro de la tabla.
    - **Llave foránea**: Es una columna o conjunto de columnas en una tabla cuyos valores corresponden a los valores de la clave primaria de otra tabla.

    ### Ejemplo 1

    Vamos a poner en práctica todo los conocimientos teóricos adquiridos hasta hora, primero crearemos el diagrama del Modelo ER para un restaurante y luego el Modelo Relacional.

    Ocuparemos [draw.io](https://www.draw.io) que es una herramienta online que nos permite hacer permitir diagramas como los que necesitamos en esta sesión, sólo necesitaremos una cuenta y navegar entre los distintos tipos de diagramas.

    Modelo E/R

    ![img/Screen_Shot_2020-06-14_at_14.18.17.png](img/Screen_Shot_2020-06-14_at_14.18.17.png)

    Modelo Relacional

    ![img/Screen_Shot_2020-06-14_at_21.23.16.png](img/Screen_Shot_2020-06-14_at_21.23.16.png)

[`Atrás: Ejemplo 01`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-05/Ejemplo-01) | [`Siguiente: Reto 01`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-05/Reto-01)
