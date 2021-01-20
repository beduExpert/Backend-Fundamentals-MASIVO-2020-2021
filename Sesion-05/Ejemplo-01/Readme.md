# Ejemplo 1 - Instalando MySQL

## Objetivo

Comprender que es una base de datos relacional e instalar un sevidor de bases de datos relacionales.

## Requerimientos

Contar con almacenamiento suficiente y conexión a internet para instalar MySQL.

## Desarrollo

**¿Qué es una base de datos?**

El término base de datos se remonta a 1963. Una base de datos se puede definir como un conjunto de información relacionada que se encuentra agrupada ó estructurada. 

**¿Qué es un base de datos relacional?**

Son bases de datos que almacenan información relacionándola por medio de tablas con columnas para la definición de atributos y filas para definir valores donde cada tabla represente a una entidad u objeto y cada columna a un atributo de esta entidad. Por lo general cada dato de una tabla cuenta con un identificador único, con el cual puede relacionarse con uno o más datos.

Los fundamentos de las bases de datos relacionales son la teoría de conjuntos.

**¿Qué es MySQL?**

MySQL es un sistema para gestionar bases de datos que cuenta con una amplia popularidad.

## Instalar MySQL server

### Instalación en Ubuntu

Instala el paquete mysql-server y luego ejecuta el script de seguridad incluido.

```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

Para asegurar que esté instalado ejecuta

```bash
sudo mysql
```

Y deberás ver una interfaz como esta

![img/Screen_Shot_2020-06-08_at_6.58.16.png](img/Screen_Shot_2020-06-08_at_6.58.16.png)

### Instalación con Docker

Si tienes [docker](https://docs.docker.com/engine/install/) instalado puedes ejecutar Mysql desde un contenedor instalandolo con el siguiente comando:

```bash
$ docker run -d -p 33060:3306 --name=mysql-db -e MYSQL_ROOT_PASSWORD=secret mysql
```

- **-d**: Detached Mode es la forma en que indicamos que corra en segundo plano.
- **-p** : Puerto, el contenedor corre en el puerto 3306 pero hacemos un *bind* para que lo escuchemos en Host el puerto 33061.
- **–name** : Para no tener que hacer referencia al hash le asignamos un nombre.
- **-e** : Environment le asignamos **la contraseña**.

Entra a Mysql con el siguiente comando:

```bash
docker exec -it mysql-db mysql -p
```

### Instalación en MacOS

1. Dirígete al siguiente [link para descargar MySQL server](https://dev.mysql.com/downloads/mysql/)
2. Selecciona tu sistema operativo y descarga el archivo `.dmg`. Para instalar de esta manera tal vez sea necesario crear una cuenta en Oracle.
3. Ejecuta el `.dmg` y sigue los pasos.

[`Atrás: Sesión 05`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-05) | [`Siguiente: Ejemplo 02`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-05/Ejemplo-02)
