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
- [`Reto 2`](Reto-02/Readme.md)	

---

### <ins>Notación punto y arreglos</ins>
<img src="imagenes/imagen2.png" align="right" height="200" width="200">

La notación punto es ampliamente usada en los lenguajes de programación orientados a objetos y permite acceder a los atributos de los mismos. Por ejemplo, si tenemos un objeto persona, usando la notación punto, podemos acceder a su nombre, edad, peso, etc.

Con esta notación podemos obtener los campos de un objeto representado en __JSON__. De la misma forma, podemos acceder a los elementos de un arreglo si se conoce su índice, tal y como se hace en distintos lenguajes de programación.

- [`Ejemplo 3`](Ejemplo-03/Readme.md)
- [`Reto 3`](Reto-03/Readme.md)	




