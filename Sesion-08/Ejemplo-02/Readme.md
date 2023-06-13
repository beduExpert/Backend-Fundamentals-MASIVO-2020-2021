[`Backend Fundamentals`](../../README.md) > [`Sesión 08`](../Readme.md) > `Ejemplo 2`

# Ejemplo 2 - Deploy con Fly.io

## Objetivo

Conocer una de las plataformas más sencillas para lanzamiento de aplicaciones de Node.js

## Requerimientos

- Línea de comandos
- Ejecuta los pasos necesarios para llevarlo a cabo.

## Desarrollo

Fly.io es una plataforma que nos permite saltarnos muchos pasos de configuración de arquitectura y lanzar una aplicación en sencillos pasos.

Aunque no es lo óptimo para proyectos grandes y con necesidades muy específicas, nos permite probar aplicaciones de manera rápida y sin dolores de cabeza, y también acercarnos a comprender muchos conceptos de deploy de manera rápida, aunque no estemos conscientes de todas las implicaciones que conlleva por detrás cada configuración.

En pocas palabras, es recomendable utilizar Fly.io cuando estamos en una etapa de desarrollo y validación de una idea para un proyecto.

1. Entra al sitio oficial de Fly.io: [https://www.fly.io/](https://www.fly.io/)
2. Crea tu cuenta en Fly.io
3. Instalar la línea de comandos flyctl
4. Autenticarse contra el servicio de fly.io con la línea de comandos `flyctl auth login`
5. Cambiarse a la carpeta del proyecto y correr `flyctl launch`
6. Abrir la aplicación si todo fue exitoso `flyctl open`

Es recomendable que en `MONGODB_URI` cambies el nombre de la base de datos para así comenzar con una base de datos limpia donde solo se almacenará información del ambiente de producción.
ej. `MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-production>.mongodb.net/<nombre_db_production>?retryWrites=true&w=majority`


[`Atrás`](../Reto-01) | [`Siguiente`](../Readme.md)
