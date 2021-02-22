# Sesión 03 - Arquitectura de software 🕹

🎯 **Objetivo:**

- Gestionar usuarios y permisos de archivos, cómo conectarse, utilizar un servidor remoto por medio de ssh
- Enviar archivos remotamente con SCP.

## 📜 Requerimientos de un proyecto

<img src="img/scrum_board.svg" alt="PostItHistoriaUsuario" align="right" width="450" > 

Los requerimientos nos dicen como desarrolladorxs que es lo que tenemos que tomar en cuenta a la hora de crear una aplicación o programa. Son las especificaciones que nos proporciona el cliente sobre que espera del software que vamos a desarrollar.

Describen a muy alto nivel las especificaciones y funcionalidades del sistema. 

Por ejemplo nosotros vamos a desarrollar un proyecto llamado AdoptPet, que será una aplicación web que permita a la gente adoptar mascotas y poner mascotas en adopción, a grandes rasgos los requerimientos son los siguientes:

- Publicar anuncios de mascotas en adopción
- Visualizar las mascotas que están en adopción
- Permitir a los usuarios interesados en adoptar registrarse y poder enviar solicitudes de adopción
- Permitir a los cuidadores evaluar solicitudes y confirmar una adopción

### Historias de usuario

Para describir los requerimientos de un sistema a menudo se usan historias de usuarix que son **descripciones cortas** y **simples** de una funcionalidad contada desde la perspectiva de la persona que la desea (usuarix o clientx del sistema). 

Estas historias tienen una **estructura simple**

*"Como **[rol de usuario]** quiero **[objetivo]** para **[beneficio]**"*

Y son utilizadas por varias metodologías para poder comprender mejor los requerimientos y alinearlos con el negocio.

***Ejemplo:***

- *Como usuario de adoptaPet, quiero ver a todas las mascotas que hay en adopción para poder elegir la que más me guste.*

- *Como administrador de adoptPet, quiero agregar nuevas mascotas en adopción, para poder buscar hogar a mas animalitos*

Posteriormente estas historias se traducen a funcionalidades de nuestro sistema.

## 🔐 Arquitectura Cliente-servidor

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

## 🧮 Organización de un Proyecto

### Peticiones a un servidor

- [`Ejemplo 01: Arquitectura cliente-servidor`](Ejemplo-01/)
- [`Reto 01: Uso de Postman o Insomnia`](Reto-01/#reto-1)

<!-- ### Requerimientos de un proyecto

- [`Ejemplo 02: AdoptaPet - Iniciando un nuevo proyecto`](Ejemplo-02/)
- [`Reto 02: historias de usuario`](Reto-02/#reto-2) -->

### Modelo Vista Controlador

- [`Ejemplo 02: Modelo Vista Controlador`](Ejemplo-03/)
- [`Reto 02: Clases en javascript `](Reto-03/#reto-3)




## 🛡 Postwork

**Objetivo**

- Entender las ventajas de una arquitectura basada en microservicios.
- Familiarizarse con Docker
- Descargar e instalar imagenes de docker y utilizarlas

**Arquitectura de Microservicios**

Recuerda que todo lo trabajado en tu prework, así como durante la sesión, puede ser aplicado a tu proyecto personal; Para lo cual, toma las siguientes consideraciones...[`leer mas`](Postwork/#postwork---arquitectura-de-microservicios)


