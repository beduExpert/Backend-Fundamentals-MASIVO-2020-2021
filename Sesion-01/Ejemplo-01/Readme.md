[`Backend Fundamentals`](../../README.md) > [`Sesión 01`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Arquitectura cliente-servidor

**Objetivo:**

- Comprender las diferencias entre un cliente y un servidor web, la manera en la que se comunican y los diferentes tipos de servidores y protocolos más comunes de la web.

**Requerimientos:**

- Navegador web y cuaderno o aplicación para tomar notas.

## Desarrollo

La arquitectura que gobierna la web actualmente es la arquitectura cliente-servidor.

### 👥 **Cliente**

El cliente se ocupa de hacer peticiones, recibir respuestas y presentarlas al usuario.  En los primeros días eran ordenadores de uso común, ahora un cliente es cualquier tipo de dispositivo capaz de enviar una petición, esto engloba smartphones y dispositivos inteligentes como bocinas, luces, refrigeradores, relojes, termostatos, etc.

### 💽 **Servidor**

Es un sistema diseñado específicamente para satisfacer las demandas de información de los clientes. El servidor recibe las peticiones del cliente, las procesa y responde la información solicitada.

Los servidores suelen realizar tareas complejas y especializadas, comúnmente también hacen peticiones a otros sistemas como a servidores de bases de datos o servicios externos e internos *(micro-servicios)*.

Algunos ejemplos de servidores son:

- Servidores de base de datos.
- Servidores de correo electrónico.
- Servidores de imágenes.
- Servidores WEB.

<img src="img/Untitled.png" width="500">

Tomando esto en cuenta es común dividir las responsabilidades y los equipos de desarrollo en ***Frontend developers*** y ***Backend developers**,* dónde los primeros se encargan de desarrollar el código que se ejecutará en un navegador, y los segundos el código y las configuraciones del lado del servidor.

<img src="img/Frontend-and-backend-frameworks.png" width="700">

## ✉️ Protocolo HTTP

En computación, un protocolo es únicamente una manera en la que acordamos que se comunicará un sistema.  

Haciendo una analogía podemos decir que un protocolo en la vida real sería la serie de reglas del sistema postal de correo. Si hoy quisiéramos enviar una carta por correo necesitaríamos escribir en un sobre el nombre y la dirección del destinatario, esta dirección a su vez contendría su código postal, también necesitaríamos un timbre y los datos del remitente. 

De manera similar, el protocolo base para el funcionamiento de la web es el protocolo HTTP, que significa *"Hypertext Transfer Protocol"*. Este protocolo de petición-respuesta está basado en otros protocolos que funcionan en un nivel más bajo de la red. 

<img src="img/HTTP__layers.png" width="700">


### 📪 Peticiones

HTTP define un conjunto de métodos de petición *(request method)* para indicar que acción se desea realizar. Los métodos más importantes son:

### `GET`

Solicita una representación de un recurso específico. Las peticiones que usan el método GET únicamente obtienen datos.

### `POST`

El método **POST** se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor. También es común que se utilice para crear nuevos registros de recursos en una API.

### `PUT`

El modo **PUT** reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

### `DELETE`

El método **DELETE** borra un recurso en específico.

Estos métodos proporcionan las llamadas operaciones **CRUD** o simplemente el **CRUD** y son:

- `Create`
- `Read`
- `Update`
- `Delete`

Puedes encontrar todos los métodos existentes en el [siguiente enlace:](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)

### 📫 Respuestas

Las respuestas además de que pueden estar conformadas opcionalmente por un cuerpo o contenido, son definidas por un código de respuesta. Los códigos de respuesta indican si una petición se ha completado exitosamente o no, y nos brindan información sobre el estado de la respuesta. Las respuestas se dividen en 5 categorías:

1. **Informativas (`100`-`199`)** Usualmente se utilizan para informar que se recibió la petición o información .
2. **Éxito (`200`–`299`)** Indica que la petición fue recibida correctamente, entendida y aceptada.
3. **Redirecciones (`300`–`399`)** Le indican al cliente que es necesaria una acción de su parte para completar la petición.
4. **Error del lado del cliente (`400`–`499`)** La solicitud no puede procesarse por un error por parte del cliente, como puede ser un error en sintaxis o falta de algún header.
5. **Error del lado del servidor (`500`–`599`)** La solicitud era aparentemente válida, pero el servidor falló al completarla (errores de conexión, no se encontró la información, etc.).

Algunos de los códigos de respuesta más comunes son:

### `200 OK` 

Todo salio bien, es la respuesta estándar para peticiones correctas.
![](https://http.cat/200)

### `301 MOVED PERMANENTLY`

El servidor se movió y ésta y todas las peticiones futuras deben ser dirigidas a la nueva URL.

![](https://http.cat/301)

### `302 FOUND`

Se requiere que el cliente realice una redirección temporal. 
![](https://http.cat/302)

### `404 NOT FOUND`

El servidor web no puedo encontrar el recurso solicitado.

![](https://http.cat/404)

### `500 Internal Server Error`

Ocurrió un error dentro del servidor al intentar resolver la petición. Es el código de error más común

![](https://http.cat/500)

Puedes encontrar más códigos de respuesta en los 

- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [HTTP Cats](https://http.cat/)


-------

[`Atrás: Sesión 03`](../README.md) | [`Siguiente: Reto-01`](../Reto-01)

