[`Backend Fundamentals`](../../README.md) > [`Sesión 02: Administración de servidores`](../README.md) > `Postwork`

# Postwork: 

## Requerimientos

- Tener Git Bash si usas Windows
- Acceso a un servidor remoto, su dirección IP y el archivo `.pem` de la llave para realizar la conexión

Recuerda que todo lo trabajado en tu prework, así como en el work, puede ser aplicado a tu proyecto personal; Para lo cual, toma las siguientes consideraciones:

**Asegúrate de comprender:**

- Las herramientas que te permitirán listar los permisos de archivos y directorios en tu file system.
- Las herramientas que te permitirán modificar los permisos de archivos y directorios en tu file system.
- Las herramientas que te permitirán llevar a cabo una conexión vía ssh.

## Objetivo

- Aprender a utilizar SCP y conocer FTP cómo protocolo para la transferencia de información a un servidor.

Adicionalmente te aconsejamos leer los siguientes contenidos que ampliarán tus conocimientos:

## Desarrollo

## ¿Qué es la Transferencia de archivos a un servidor (SCP y FTP)?

Para transferir archivos de nuestro ordenador a un servidor remoto podemos utilizar diversas opciones. La más simple y parecida a SSH es la herramienta SCP.

### Copiando archivos con SCP

SCP (secure copy) utiliza SSH para hacer copias  de archivos transfiriéndolos con una conexión cifrada.

**Sintaxis:**

```bash
scp [ruta archivo] [usuario]@[host]:[ruta destino]
```

Parámetros necesarios:

- **Usuario:** el nombre de usuario que utilicemos en el servidor.
- **Host:** dirección IP o dominio del servidor remoto.
- **Ruta archivo origen:** ruta del archivo que queremos copiar.
- **Ruta archivo destino:** ruta donde queremos copiar el archivo.

**Ejemplo:**

Si queremos subir el archivo **`archivo.txt`** de nuestro ordenador a la carpeta **`/home/usuario`** del servidor, la sintaxis es la siguiente

```bash
scp archivo.txt usuario@dominio.com:/home/usuario
```

si queremos copiar un archivo del servidor a nuestro ordenador

```bash
scp usuario@dominio.com:/home/usuario/archivo.txt Documentos
```

Para copiar un archivo de un servidor a otro, hacemos lo siguiente:

```bash
scp usuario1@dominio1.com:/home/usuario1/archivo.txt usuario2@dominio2.com:/home/usuario2/
```

Para copiar un directorio completo añadimos un **`-r`** para que se copie de manera recursiva:

```
scp -r /home/bedu/proyecto usuario@dominio.com:/home/usuario
```

Si contamos con archivo de identidad (llave privada) tenemos que utilizar la opción `-i` seguido de la dirección de nuestro archivo `.pem`

**Ejemplo:**

```
scp -i llaves/llave_host2.pem /home/bedu/proyecto/archivo.txt ubuntu@18.209.88.100:/home/usuario
```

## FTP (File Transfer Protocol)

Cuando hacemos transferencias de archivos de manera constante, otra opción para enviarlos es configurando un servidor FTP.

Si quieres configurar un servidor FTP en linux aquí puedes [encontrar una guía](https://medium.com/@oscarricardosan/montar-servidor-ftp-en-linux-37accc96571f)
