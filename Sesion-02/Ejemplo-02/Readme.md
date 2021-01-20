# Ejemplo 2: SSH

**Objetivo**

Conocer SSH y conectarnos a un servidor remoto.

**Requisitos**

El experto debe proveer la dirección del servidor y el archivo de la llave con la cual nos conectaremos.

## Desarrollo

1. Verifica que **ssh** esté **instalado** en tu sistema

    Dentro de la terminal ejecutaremos el comando `man ssh`

    Si está instalado veremos algo cómo esto:

    ![img/Untitled.png](img/Untitled.png)

2. Cambiar los permisos de nuestra llave privada (archivo `.pem`)

Ejecutaremos el comando `chmod`

`sudo chmod 400`

![img/Untitled%201.png](img/Untitled%201.png)

3. Conectarnos con ssh por medio de la dirección y el usuario de nuestro servidor remoto

**Sintaxis:**

`ssh -i [ruta archivo .pem] [usuario]@[dirección]`

**Ejemplo:**

```bash
ssh -i ./ec2-bedu-bkfun.pem ubuntu@ec2-52-43-163-239.us-west-2.compute.amazonaws.com
```

Si todo salió bien podremos ver algo como esto

![img/Screen_Shot_2020-04-06_at_18.00.01.png](img/Screen_Shot_2020-04-06_at_18.00.01.png)

**Lo cual significa que hemos iniciado sesión dentro de una máquina remota.**

-------

[`Atrás: Reto 01`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-02/Reto-01) | [`Siguiente: Reto-02`](../Reto-02)
