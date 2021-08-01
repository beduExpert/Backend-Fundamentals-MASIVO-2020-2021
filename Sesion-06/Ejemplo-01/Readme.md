# Ejemplo 1

## Objetivo

Definir la configuración del proyecto con Mongoose para conectarnos a la base de datos.

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 3.

## Desarrollo

[Mongoose](https://mongoosejs.com/) es una biblioteca que nos ayuda a trabajar con MongoDB y Node de manera más dinámica, permitiéndonos comunicarnos con el servidor de MongoDB y crear Modelos con una estructura y reglas que se adaptan a nuestra base de datos.

1. Podemos instalar mongoose con npm, entra a la carpeta de tu proyecto desarrollado en la Sesión 3, en ella instalaremos mongoose con el comando:

    ```bash
    npm install mongoose
    ```

Nosotros ya lo habíamos instalado en el prework.

1. En los siguientes puntos del ejemplo, importaremos mongoose en nuestros modelos agregando la siguiente línea cuando sea necesario: 

    ```jsx
    const mongoose = require('mongoose');
    ```
1. En nuestro archivo <b>app.js</b>, agrega las líneas que importan y configuran <b>mongoose</b>. En ellas podraś encontrar la invocacióna la función <b>connect</b> donde configuramos nuestra conexión a mongo, habilitamos el modo de debugeo en true.

Nota: 
- Agrega las líneas justo arriba de la declaración de nuestro <b>router</b>.
- Recuerda reemplazar los campos que están entre `<>` en la url de conexión con los datos correctos de tu cluster encontrado en MongoDB Atlas.

    ```jsx
    
    /*********************** Mongoose Configuration *******************************/
    const mongoose = require("mongoose");

    mongoose.connect(
        "mongodb+srv://<usuario>:<password>@cluster0-xmea4.mongodb.net/<dbname>?retryWrites=true&w=majority"
    );

    mongoose.set("debug", true);

    /*********************** Mongoose Configuration *******************************/
    
    ```

Hasta este punto solo configuramos Mongoose y le dijimos con que base de datos debe relacionarse. Sin embargo necesitamos un mecanismo que nos permita modelar los documentos de nuestra base de datos en el código de la API.

[`Atrás: Sesión 07`](../README.md) | [`Siguiente: Reto 01`](../README.md)
