[`Backend Fundamentals`](../../README.md) > [`Sesión 01: Consola`](../README.md) > `Postwork`

# Postwork

# Requisitos 

- Tener Git Bash si usas Windows.

Recuerda que todo lo trabajado en tu prework, así como en el work, puede ser aplicado a tu proyecto personal; Para lo cual, toma las siguientes consideraciones:

## Asegúrate de comprender:

- Las herramientas que te permitirán listar, mover, crear, copiar, borrar elementos en tu file system.
- Las herramientas que te permitirán editar un archivo de texto desde terminal de línea de comandos.
- Las herramientas que te permitirán instalar paquetes en tu ambiente.

Adicionalmente te aconsejamos leer los siguientes contenidos que ampliarán tus conocimientos:

## **Mejorando nuestra experiencia con la terminal**

### **ZSH**

ZSH es una shell que mejora a bash en aspectos como el autocompletado y la navegación entre directorios.

**Seguir el siguiente tutorial:**

+ **[Instalar y configurar ZSH y Oh My ZSH en Ubuntu](https://www.asanzdiego.com/2018/04/instalar-y-configurar-zsh-y-ohmyzsh-en-ubuntu.html)**

### **Terminator / iTerm**

Terminator para Ubuntu y iTerm para MacOS son terminales que nos permiten trabajar de manera más eficiente con la terminal, con esto instalado podrás utilizar paneles y pestañas con diferentes consolas abiertas, así cómo personalizar a tu manera tu consola en apariencia y comportamiento.

+ **[Instalar Terminator Ubuntu](https://www.ingenieriazeros.com/2018/03/instalar-terminator-ubuntu.html)**

+ **[Configurar una terminal hermosa con iTerm 2 en MAC OS X](https://jonalvarezz.com/articles/configurar-una-terminal-hermosa-con-iterm2/)**

## **Configuración de vim**

1. Para personalizar la configuración de Vim, debemos editar el fichero vimrc situado en la ruta `/etc/vim/vimrc`

En este fichero podemos añadir nuestra propia configuración al final del mismo. Algunas de las configuraciones mas comunes son las siguientes.

| comando      | descripción                                                              |
|--------------|--------------------------------------------------------------------------|
| syn on       | Agrega colores dependiendo del tipo de fichero                           |
| set ts=n     | Establece una indentación de n caracteres                                |
| set nobackup | Evita que se guarden copias en búfer                                     |
| set number   | Provee a nuestro editor de una numeración a todas las líneas del fichero |

Puedes ver todas las opciones disponibles desde su página oficial.

Una vez añadidos los cambios al fichero vimrc, guardaremos y ya tendríamos lista nuestra configuración en vim.

+ **[Instalar y configurar VIM](https://intervia.com/doc/instalar-y-configurar-vim/)**
