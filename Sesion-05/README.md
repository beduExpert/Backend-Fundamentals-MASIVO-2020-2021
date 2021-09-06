# Sesión 5 - Bases de datos NoSQL (MongoDB)

🎯 **Objetivo:**

- Reconocer características de las bases de datos NoSQL, configurar y utilizar MongoDB.
- Comprender en qué casos es conveniente utilizar esta B.D. y cómo usarla. 

## ⏳ Antes de empezar 

Es importante que hayas cargado los **sample datasets** al final de la sesión anterior, pues los estaremos utilizando a lo largo de ésta.

## Desarrollo

### <ins>Filtros básicos</ins>
<img src="imagenes/imagen3.png" align="right" height="200" width="300">

Al igual que con las proyecciones, los filtros se construyen usando __JSON__. En su forma más básica se debe escribir el nombre del campo, dos puntos y el valor que queremos filtrar. Existen varias funciones que se pueden combinar con los filtros y las iremos estudiando a lo largo del módulo.

```json
{campo: "valor"}
```

- [`Ejemplo 1`](Ejemplo-01/Readme.md)
- [`Reto 1`](Reto-01/Readme.md)

---

### <ins>Expresiones regulares</ins>
<img src="imagenes/imagen1.jpg" align="right" height="200" width="300">

Las expresiones regulares permiten reconocer patrones en un texto, de forma similar a como lo hacía la cláusula `LIKE` en __SQL__, mediante el reconocimiento de distintos patrones.

Existen distintos estándares que los lenguajes de programación y sistemas gestores de bases de datos deben seguir para definir expresiones regulares. El estándar que usa mongo es: [JavaScript RegExp Reference](https://www.w3schools.com/jsref/jsref_obj_regexp.asp).

- [`Ejemplo 2`](Ejemplo-02/Readme.md)

---

#### <ins>Introducción a las agregaciones</ins>
<img src="imagenes/imagen5.png" align="right" height="200" width="300">

Una agregación se compone de un conjunto de *capas* que en conjunto realizan consultas sobre una colección de documentos. Cada capa puede aplicar nuevos filtros o modificaciones a la capa anterior. Al flujo de cambios entre las distintas capas se le conoce como *pipeline*.

El principio de cada *pipeline* siempre es la colección completa.

- [**`EJEMPLO 3`**](Ejemplo-03/Readme.md)
- [**`RETO 3`**](Reto-03/Readme.md)	

---

#### <ins>Agrupamientos</ins>
<img src="imagenes/imagen1.jpg" align="right" height="200" width="300">

Al igual que en __SQL__ en __MongoDB__ podemos realizar agrupamientos. Se realizan mediante la agregación `$group` y tienen la siguiente sintaxis:

```json
{
  $group:
    {
      _id: <expression>, // Group By Expression
      <field1>: { <accumulator1> : <expression1> },
      ...
    }
 }
```

- [**`EJEMPLO 4`**](Ejemplo-04/Readme.md)
- [**`RETO 4`**](Reto-04/Readme.md)

---
#### <ins>Asociación de colecciones</ins>
<img src="imagenes/imagen2.jpg" align="right" height="200" width="300">

 En __MongoDB__ se tiene la operación `$lookup` que permite relacionar colecciones. Es una agregación y su sintaxis es la siguiente:

```json
{
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}
```

- [**`EJEMPLO 5`**](Ejemplo-05/Readme.md)



