[`Backend Fundamentals`](../../README.md) > [`Sesión 01: Consola`](../README.md) > `Prework`

# Prework

## ¿Qué es la Terminal?

**Objetivos:**

- Conocer la terminal y sus principales ventajas con respecto a las interfaces gráficas.
- Ejecutar los primeros comandos.

**Índice**

1. Introducción
2. Conceptos fundamentales

## Introducción

La consola también conocida como terminal, shell o línea de comandos (Command-line interface) es una de las primeras maneras con las que hemos podido interactuar con una computadora.

Mucho antes del *mouse*, de la interfaz gráfica y de la metáfora del escritorio, los sistemas operativos contaban con esta interfaz para recibir órdenes por medio de una pantalla y el teclado.

### ¿Por qué es importante saber utilizar la consola?

Las interfaces de línea de comandos son utilizadas por usuarios avanzados, como programadores y administradores de sistemas.

Algunas de sus ventajas son:

1. **Flexibilidad.** Los programas gráficos suelen ser muy adecuados para realizar la tarea para la que han sido creados, pero son difíciles de adaptar para otras tareas. Los programas diseñados para ser usados en la línea de comandos suelen ser más versátiles.
2. **Automatización.** Repetir un proceso para realizar un análisis con un programa gráfico es muy costoso puesto que es difícil describir la secuencia de clicks y dobles clicks que hemos realizado.
3. **Eficiencia.** Las interfaces gráficas suelen consumir muchos recursos mientras que los programas que funcionan en línea de comandos suelen ser extraordinariamente livianos y rápidos.
4. **Documentación.** Los procesos realizados mediante la línea de comandos son más fáciles de documentar puesto que tan sólo debemos guardar el texto que hemos introducido en la pantalla.

### Conociendo la terminal

Abre la aplicación *terminal* en macOS o Linux. Verás una interfaz similar a esta:

+ **Terminal en Ubuntu**

![https://ubuntucommunity.s3.dualstack.us-east-2.amazonaws.com/original/2X/b/ba76cbf3dc8dc2cc94d26dd61c7aad3cedcd5102.png](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.comoinstalarlinux.com%2Fwp-content%2Fuploads%2Fcomo-abrir-la-terminal-en-ubuntu-linux-mint-centos-debian-02.gif&f=1&nofb=1)


+ **Terminal en MacOS**

![Untitled.png](https://raw.githubusercontent.com/mikaelbr/node-notifier/master/example/input-example.gif)

Ahora posiciónate con el mouse y teclea el comando  `pwd`.

> 💡 **Nota:**
>
>El comando `pwd`  imprime el **directorio** (carpeta) en donde estamos posicionados.

## Conceptos fundamentales

### Sistema operativo

>*"es el software principal o conjunto de programas de un sistema informático que gestiona los recursos de hardware y provee servicios a los programas de aplicación de software, ejecutándose en modo privilegiado respecto de los restantes".*

En un sentido muy general el S.O. permite a los usuarios correr otras aplicaciones en un ordenador. Aunque es posible que otro programa se comunique directamente con el hardware, la mayoría de las aplicaciones están escritas para un S.O. en específico, esto les permite tomar ventaja de librerías preestablecidas sin preocuparse sobre detalles específicos del hardware.

**Los recursos que maneja un S.O. son:**

- **Dispositivos de entrada** ej: teclado y mouse.
- **Dispositivos de salida** ej: pantalla, bocinas, impresoras.
- **Dispositivos de red** ej: módems, routers.
- **Dispositivos de almacenamiento** ej: disco duro, usb flash.

También se encarga de eficientar los recursos de memoria para las diversas aplicaciones de software instaladas.

### UNIX

UNIX es un S.O. que nació en los Laboratorios Bell de AT&T en 1969, desarrollado por Ken Thompson y Dennis Ritchie (también creador del lenguaje de programación C).

UNIX fue muy importante para la industria del software, ya que presentó ideas fundamentales que ayudaron al desarrollo de sistemas posteriores.

UNIX es parte de ***Mac OS X***, es lo que se ejecuta en la mayoría de los servidores que te dejan acceder a la web, y está también dentro de millones y millones de smartphones. **GNU/*Linux*** es una clase de UNIX, y a la fecha puedes ejecutar UNIX dentro de un navegador.

Aunque solo los sistemas totalmente compatibles que se encuentran certificados por la especificación única de UNIX, pueden ser llamados UNIX como tal, otros reciben la denominación «UNIX Like«, o similar a UNIX. El **OS X** de Apple está basado en UNIX y está certificado de esa manera, mientras que **Linux** es la versión más popular de sistemas no certificados.

### Shell

En informática, el término Shell se emplea para referirse a aquellos programas que proveen una interfaz de usuario (interfaz de línea de comandos) para acceder a los servicios del sistema operativo. Estos pueden ser gráficos o de **texto simple**, dependiendo del tipo de interfaz que empleen.

Los Shell están diseñados para facilitar la forma en que se invocan o ejecutan los distintos programas disponibles en el computador.

Es decir, un SHELL es una interface con nuestro sistema operativo. Gracias a él podremos dar las órdenes y mandatos necesarios para que nuestro sistema informático realice las tareas que necesitamos. **No debemos confundir al intérprete de comandos con el sistema operativo**. Este es sólo un programa que hará de **mediador** entre nosotros y el Kernel del sistema. Un ejemplo de shell puede ser el *powershell* de windows o *bash* de linux.
