[`Introducción a Bases de Datos`](../../README.md) > [`Sesión 05`](../Readme.md) > `Ejemplo 1`

## Ejemplo 1: Colecciones, Documentos y Proyecciones

<div style="text-align: justify;">

### 1. Objetivos :dart:

- Usar la interfaz de MongoDB para listar las colecciones y documentos de una base de datos.
- Realizar filtros por proyección.

### 2. Requisitos :clipboard:

1. MongoDB Compass instalado.

### 3. Desarrollo :rocket:

---

> :warning: *Recuerda haber cargado las bases de datos de muestra de __MongoDB Atlas__ tal y como se indica en tu Prework.*

---

1. Abre MongoDB Compass. En esta primera pantalla se muestran las bases de datos contenidas en el servidor. Da clic en la base de datos `sample_mflix`. A partir de ahora usaremos esa base de datos para los retos y ejemplos dentro de la sesión.

   ![imagen](imagenes/s4e21.png)

2. En la ventana que apareció se muestran las **colecciones** para la base de datos que elegiste. También puedes navegar entre las colecciones con el menú desplegable de la izquierda. Da clic en la colección `users`.
   
   ![imagen](imagenes/s4e22.png)

3. Ahora estás apreciando los documentos que hay dentro de la colección `users`. En el menú que se encuentra sobre los documentos, puedes cambiar el formato en que se muestran por defecto, la forma de visualizarlos es en formato de lista aunque hay otras opciones como JSON o formato de tabla como en __SQL__.

   ![imagen](imagenes/s4e23.png)
   
4. Por defecto, la interfaz de __MongoDB Compass__ muestra todos los campos de todos los documentos, esto es equivalente a ejecutar la siguiente instrucción de __SQL__:

   ```sql
   SELECT *
   FROM users;
   ```
   
   Para mostrar algún campo en específico, como lo hacíamos en __SQL__, usaremos proyecciones. Para usar una proyección, hay que dar clic en el botón `OPTIONS`. Se abrirá un formulario, llenaremos el campo llamado `PROJECT`. 
   
   En las bases de datos relacionales, la forma de comunicarnos con la base es mediante __SQL__, en __MongoDB__ lo haremos a través de __JSON__. De esta forma, para proyectar los datos, usaremos un __JSON__, separando cada campo deseado, con un valor de 1. Por ejemplo, si queremos obtener únicamente el nombre y correo del usuario, escribimos lo siguiente.
   
   ```json
   {name:1, email:1}
   ```
   
   Para mostrar la proyección, damos clic en el botón `FIND`.
   
   ![imagen](imagenes/s4e24.png)

**¡Felicidades! Haz realizado tu primera consulta en una base de datos con MongoDB**

[`Anterior`](../Readme.md) | [`Siguiente`](../Reto-01/Readme.md)

</div>
