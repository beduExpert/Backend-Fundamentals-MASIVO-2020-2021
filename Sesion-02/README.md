# Sesión 2 - Administración de servidores 🌐

# 🎯  Objetivo:

- Gestionar usuarios y permisos de archivos, cómo conectarse, utilizar un servidor remoto por medio de ssh y enviar archivos remotamente con SCP.


# 👾 Servidor web

<img src="img/server.png" align="right" width="250">

Un servidor web es un conjunto de software y hardware que responden las peticiones que los clientes hacen sobre *World Wide Web*.

Para responder a las peticiones, los servidores utilizan distintos protocolos de transferencia de datos por una red, siendo los principales:

- HTTP/HTTPS
- SMTP 
- FTP

Su propósito principal es permitir el acceso al contenido de los sitios web que requieren lxs usuarixs, para esto, el servidor almacena, procesa y envía las paginas web.

## ¿Cómo funciona un servidor web? 🤔

El hardware del servidor está conectado a la internet y permite el intercambio de información con otros clientes también conectados a la red. Este es una computadora que almacena el contenido del sitio web tales como los archivos HTML, JavaScript, CSS, imagenes, etc, es decir, es un **host**.

Mientras que el software controla el acceso que tienen lxs usuarixs a los archivos del servidor. Todo esto utilizando un modelo cliente servidor. Se accede a este mediante la url (Uniform Resource Locator) del sitio, que sirve como el localizador del sitio y asegura que el contenido será entregado a quienes que lo solicitaron.

Todo este proceso se hace utilizando el modelo **cliente/servidor**.

## Proceso

Cuando entramos al navegador y colocamos la dirección de nuestro sitio web favorito, el navegador hace el siguiente proceso para encontrar la página que le pedimos:

1. Con la url, identifica la dirección IP del servidor en el que se *hostea* el sitio que le pedimos
1. Hace una solicitud de los archivos necesarios con el protocolo HTTP 
1. El servidor acepta la petición, busca los archivos y los envía como respuesta

![](img/proceso.jpg)

## Conceptos clave para utilizar un servidor

### 🧑‍💻 Usuarios y permisos

- [`Ejemplo 1: Usuarios y permisos`](Ejemplo-01/#ejemplo-1-usuarios-y-permisos)
- [`Reto 01: Permisos actuales de tus archivos`](Reto-01/#reto-1)

### 🗝 Establecer conexión con un servidor

- [`Ejemplo 2: SSH`](Ejemplo-02/#ejemplo-2-ssh)
- [`Reto 02: Inicir sesión en una máquina remota`](Reto-02/#reto-2)

### 🕹 Usar servidores remotos

- [`Ejemplo 3: Utilizando el servidor remoto`](Ejemplo-03/#ejemplo-3-utilizando-el-servidor-remoto)
- [`Reto 03: Crea tu propio archivo en el servidor`](Reto-03/#reto-3)




# 🛡 Postwork

**Objetivo:**

- Aprender a utilizar SCP y conocer FTP cómo protocolo para la transferencia de información a un servidor.

Recuerda que todo lo trabajado en tu prework, así como durante la sesión, puede ser aplicado a tu proyecto personal; Para lo cual, toma las siguientes consideraciones...[`leer mas`](Postwork/#postwork-transferencia-de-archivos-a-un-servidor-scp-y-ftp)
