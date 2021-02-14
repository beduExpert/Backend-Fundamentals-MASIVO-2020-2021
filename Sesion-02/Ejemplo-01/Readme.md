[`Backend Fundamentals`](../../README.md) > [`Sesión 02: Administración de servidores`](../README.md/#sesión-2---administración-de-servidores) > `Ejemplo 1`

# Ejemplo 1: Usuarixs y permisos

**Objetivos:**

- Conocer lxs distintos tipos de usuarixs de un sistema operativo UNIX.
- Entender los diferentes tipos de permisos de un archivo y cómo modificarlos.

**Requerimientos**

Tener **instalado** sistema operativo **Linux** o **MacOS**.

## Desarrollo

En UNIX contamos con los siguientes tipos de **usuarixs**:

Tipo | Explicación
-- | --
owner (propietario) | Quien creeo el archivo
group (grupo) | 	Todos lxs usuarixs que son miembros del mismo grupo.
others (otros) | Todos lxs demás usuarixs del sistema que no son propietarixs ni miembros del grupo.

Cada uno de estxs usuarixs tiene un tipo de permiso específico sobre cada archivo.

Los permisos son:

- `r`: Lectura (**r**ead)
- `w`: Escritura (**w**rite)
- `x`: Ejecución (e**x**ecute)

## Iniciando sesión como usuario root

Para cambiar los privilegios y propietarixs de nuestros archivos necesitamos los permisos suficientes.

Para esto necesitamos **autentificarnos cómo usuarixs root**

Para iniciar sesión en **ubuntu con usuarix root ingresaremos el siguiente comando:**

`su -i` 

Seguido de nuestro **password** si éste es requerido.

**Cuidado:** Al estar autenticados como usuarixs root contaremos con todos los privilegios, así que podremos hacer CUALQUIER modificación al sistema operativo.

>💡 **Nota:**
>
>Podemos salir de la sesión escribiendo la palabra `exit` y dando enter.

## Listando privilegios en los archivos

Cada archivo tiene un **tipo de acceso para cada usuarix.**

Entraremos a nuestra **carpeta bedu** de los ejemplos anteriores y ejecutaremos el comando:

`ls -l`

![src/Untitled.png](src/Untitled.png)

**Ejemplo**

Utilizaremos los valores del archivo `hola.sh`.

- **-rw-r--r--** En la primera columna obtendremos una representación de los bits de permisos cuyo primer caracter nos indica el **tipo de archivo puede ser folder** `d`, **archivo regular** `-`, o **symbolic link** `l`, los siguientes 3 caracteres serán los **permisos que lx propietarix tiene sobre ese archivo**, luego los permisos del grupo y al final los permisos globales.

- **1** – Una cantidad de **enlaces fijos**(hard links). Básicamente, un enlace fijo es un nombre adicional para un archivo existente.
- **danyparc staff** – Muestra lx **propietarix** y lx **propietarix del grupo** del archivo.

- **30** – Esto muestra el **tamaño** del archivo.

- **Mar 21 27:05** – Muestra la **fecha** de la última modificación.

- **hola.sh** – Proporciona el **nombre** del archivo/carpeta.

### Comando `chown`

El comando `chown` nos permite cambiar de propietarix a un archivo

**Sintaxis:**

`chown [owner/group owner] [nombre del archivo]`

Si tenemos un archivo **«demo.txt»** y queremos que el propietario del archivo sea **«juan»** y que el propietari del grupo sea **«clientes»**, usaríamos este comando:

```
chown juan:clientes demo.txt
```

> 💡 **Nota:**
>
> Para listar los grupos puedes usar el comando `groups` o para ver los grupos a los que un usuario pertenece puedes usar `groups <nombre_de_usuario>`

## Cambiando privilegios de un archivo

### Comando `chmod`

El comando `chmod` nos permite cambiar los privilegios a los archivos.

Cada tipo de permiso tiene su propio **número**:

- **r** (read) – 4
- **w** (write) – 2
- **x** (execute) – 1

estos valores numéricos se suman para **asignar permisos** a un tipo de usuario.

Entonces, para cambiar los permisos de **hola.sh** a estos:

**-rwxr–rw- 1 danyparc staff 0 Mar 21 27:05 hola.sh**

Ejecutaremos este comando:

```bash
chmod 746 hola.sh
```

Donde **7** es la **suma de los valores numéricos** de los permisos para el propietarix, **4** para el **grupo** y **6** para el **público en general**.

Así que tendríamos un archivo dónde el propietarix tiene todos los permisos, el grupo solamente puede leer y otrxs únicamente pueden leer y escribir.

Si quisieramos **cambiar** los permisos de un **folder** junto con todos los archivos que contiene, podemos utilizar la opción `-R` para aplicar el comando de manera recursiva.

```bash
chmod -R 744 claseDos
```

-------

[`Atrás: Sesión 02`](../README.md) | [`Siguiente: Reto 01`](../Reto-01)
