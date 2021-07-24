# Postwork

## Requerimientos

- Computadora y cuaderno o aplicación para tomar apuntes.

Recuerda que todo lo trabajado en tu prework, así como durante la sesión, puede ser aplicado a tu proyecto personal. Para lo cual, toma las siguientes consideraciones:

**Asegurate de comprender:**

- Como instalar y configurar MySQL.
- La sintaxis SQL para crear tu base de datos, tablas, insertar registros, así como consultar estas estructuras.

## Objetivo

Reflexionar sobre el alcance de las bases de datos relacionales y la importancia de su implementación.

## Desarrollo:

- Analiza las necesidades de tu proyecto personal y desarrolla tu diagrama ERD.
- Tomando como base tu ERD, crea la base de datos, tablas e inserta los datos necesarios para tu proyecto.

Adicionalmente te aconsejamos leer los siguientes contenidos que ampliarán tus conocimientos:

## Funciones y Procedimientos Almacenados

**Artículo 1**

[Cómo crear y usar una función almacenada MySQL](https://www.neoguias.com/funciones-almacenadas-mysql/)

Articulo 2

[Cómo crear y usar un procedimiento almacenado MySQL](https://www.neoguias.com/procedimientos-almacenados-mysql/)

## Seguridad

Es importante mantener la seguridad en las bases de datos de lo intentos por robar o modificar datos ya que el impacto puede ser catastrófico. La seguridad en la bases de datos se resumen a autorizaciones de lectura, actualización, eliminación, inserción de los datos, por ello, la administración de usuarios, grupos y roles será fundamental. Los SGBD tienen definida la cláusula *GRANT* que permitirá conceder o revocar privilegios específicos a usuarios, grupos o roles.

**Artículo**

[Asignar permisos en SQL](https://codigofacilito.com/articulos/asignar-permisos-mysql)

Pero más allá de diseñar un control de acceso de la bases de datos, es fundamental la creación de un plan de contingencia que incluye la creación de *backups*.

La seguridad de las bases de datos no solamente es a nivel BD, también debe ser a nivel de red, nivel de sistema operativo, seguridad incluso a nivel humano.

## Optimización de consultas en una BD Relacional

Como ya hemos estudiado, las consultas nos permiten manipular información en una bases de datos y debemos preocuparnos de la eficiencia con que las implementamos, al tener un número extraordinario de datos se vuelve relevante el tiempo en el que se trae esos datos. La optimización de consultas es un tema a estudiar tarde o temprano vamos a utilizarlo. Existen algoritmos y técnicas para la optimización de consultas que van desde la creación hasta la utilización del álgebra relacional, es un tema de especialización que debe estudiarse.

El siguiente video puede ser una breve introducción a esto:

[Administración de Bases de Datos - Tema 3. Procesamiento de consultas - Andrés Muñoz](https://www.youtube.com/watch?v=AC5n-wz3Fx8)

## 🫀 Avances del Proyecto

Realicen los siguientes ejercicios sobre su proyecto del módulo:

1. Con base en las entidades definidas hasta ahora en tu proyecto, define el diagrama entidad relación de éstas.
2. Traduzcan el diagrama del inciso anterior en un modelo relacional.
3. Implementen este modelo como una base de datos relacional en MySQL, guarden todos los comandos que usaron para la creación de la base de datos y tablas en un archivo con nombre `database.sql` y súbanlo a su repositorio. 
4. Tomen un ScreenShot de la descripción de las tablas en su base de datos en MySQL. Recuerden que el comando para describir una tabla es:
```sql
describe <nombre de la tabla>
```
5. **Para reflexionar** ¿El modelo relacional se acopla a las necesidades de su proyecto? ¿Que le agregarían o quitarían para que funcionara mejor para sus necesidades. Estas preguntas se discutirán al inicio de la siguiente sesión.
