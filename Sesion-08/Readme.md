# Sesión 8 - Deploy

🎯 **Objetivo:**

- Utilizar un ORM para manipular una base de datos relacional
- Publicar una API en producción. 
- Técnicas y mejores prácticas para publicar un sistema de manera estable.


<!-- ## 🧳 Sequelize 

Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.

Para instalar sequelize en nuestro proyecto de node solo tenemos que escribir las siguientes lineas en la consola:

```bash
npm install --save sequelize
```

Y se tiene que instalar la extensión del gestor de bases de datos que se vaya a utilizar. En este caso **MySQL**. 

```bash
npm install --save mysql2
```

Otras opciones son:

- **Postgres** `pg pg-hstore`
- **SQLite** `sqlite3`
- **MsSQL** `tedious`

### 🐼 Uso de Sequelize

- [`Ejemplo 1: Configuración y definición`](Ejemplo-00/#ejemplo-1)
- [`Reto 01: Sequelize`](Reto-00/#reto-1)
 -->
--- 



## 🪂 Deployment

![](img/launch.png)

Uno de los procesos mas importantes en el desarrollo de API es el **deploy** de ésta, es decir, el proceso que se da cuando terminamos de desarrollarla y  la hacemos publica para que las personas la utilicen.

Los pasos que en la mayoría de los casos se siguen para lanzar a producción las API son:

1. **Desarrollo** el crear la API, todo el proceso que hemos hecho hasta ahora.
2. **Testing** probar que la API en realidad funcione, encontrar y corregir *bugs* 🪲.
3. **Preparación** el código con el que trabajamos en la etapa de desarrollo no es necesariamente el que se va a subir al servidor, tiene que pasar por una serie de transformaciones que lo hacen mas compacto y manejable.
4. **Launch** lazar la API, para este paso se recomienda usar herramientas como *Heroku* que simplifican este proceso. 
5. **Uso** comenzar a utilizar la API ya en producción.

### ⚒ Preparación 

- [`Ejemplo 1: Preparando nuestra API para producción`](Ejemplo-01/#ejemplo-1---preparando-nuestra-api-para-producción)
- [`Reto 01: Deploy`](Reto-01/#reto-1)


### 🚀 Launch 

- [`Ejemplo 2: Deploy con Heroku`](Ejemplo-02/#ejemplo-2---deploy-con-heroku)
<!-- - [`Reto 02: Deploy de tu API`](Reto-02/#reto-2)  -->

<!-- ###  Uso 

- [`Ejemplo 3: Demostración - Publicación en Dominio`](Ejemplo-03/#ejemplo-3---últimos-pasos)
- [`Reto 03: Certificado SSL`](Reto-03/#reto-3) -->


## 🛡 Postwork

**Conocer conceptos para cerrar el curso y continuar aprendiendo.**

Recuerda que todo lo trabajado en tu prework, así como durante la sesión, puede ser aplicado a tu proyecto personal. Para lo cual, toma las siguientes consideraciones...[`leer más`](Postwork/#postwork)
