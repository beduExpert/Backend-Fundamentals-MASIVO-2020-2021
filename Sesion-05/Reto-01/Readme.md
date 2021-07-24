`Backend Fundamentals` > `S6 - Fundamentos de Base de Datos NoSQL (Mongo)` 
	
## Reto 1

### Instalar MongoDB Shell

MongoDB Shell es una interfaz para MongoDB, se puede usar para consultar datos, actualizar datos, así como realizar operaciones administrativas.

**MacOS X**

Instalación con Homebrew:

Prerequisitos: 

- [Nodejs](https://nodejs.org/es/) versión mínima de 12.0.0

1. Instalar Homebrew

    Para seguir los pasos de instalación [Homebrew](https://brew.sh/)

2. Copia y el siguiente comando

    ```bash
    brew tap mongodb/brew
    ```

3. Instalar **mongosh** package:

    ```bash
    brew install mongosh
    ```

**Windows**

1. Ir a [MongoDB Download Center](https://www.mongodb.com/try/download/shell) y descargar el archivo para tu sistema operativo.
2. Extraer los archivos del archivo descargado en la ubicación deseada de tu sistema de archivos.
3. Agregar una variable de entorno para el binario de MongoDB Shell:
    1. Abrir **Panel de Control.**
    2. En **Sistema y Seguridad** dar clic en **Sistema.**
    3. Clic en **Configuración Avanzada del Sistema**. Luego, **Propiedades del Sistema** en la ventana desplegada.
    4. Clic en **Variables de Entorno**.
    5. En *Variables del sistema*, select **Path** and clic en **Edit**. Luego, **Editar variable de entorno** en la ventana desplegada.
    6. Clic **New** y agrega la ruta del archivo binario **mongosh**.
    7. Clic **Ok** para confirmar los cambios. Luego **Ok** de nuevo.
    8. Para verificar que la configuración haya tenido éxito, abre la terminal y ejecuta:

        ```bash
        mongosh --help
        ```

**Linux**

1. Ir a [MongoDB Download Center](https://www.mongodb.com/try/download/shell) y descargar el archivo para tu sistema operativo
2. Extraer los archivos del archivo descargado en la ubicación deseada de tu sistema de archivos
3. Extraer los archivos del archivo descargado

    ```bash
    tar -zxvf path/to/archive
    ```

4. Agregar variable de entorno para el binario de MongoDB Shell:
    - Ejecuta:

         Actualiza **/path/to/mongosh** de acuerdo al directorio de instalación

        ```bash
        sudo cp /path/to/mongosh /usr/local/bin/
        ```

    - Ejecuta

        ```bash
        sudo ln -s  /path/to/mongosh /usr/local/bin/
        ```
### Instalar MongoDB Compass

MongoDB Compass es un GUI para MongoDB, nos permitirá visualizar y explorar los datos en nuestras colecciones. Instala <b>MongoDB Compass</b> tomando en cuenta las siguientes instrucciones:

Guía de instalación: <b>https://docs.mongodb.com/compass/master/install</b>


[`Atrás: Sesión 06`](../README.md) | [`Siguiente: Sesión 06`](../README.md)
