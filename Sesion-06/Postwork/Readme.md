# Postwork

Recuerda que todo lo trabajado en tu prework, así como durante la sesión, puede ser aplicado a tu proyecto personal. Para lo cual, toma las siguientes consideraciones:

**Asegúrate de comprender:**

- La utilidad que tendrá MongoDB en el desarrollo de tu API.
- Los fundamentos para poner en operación y trabajar con MongoDB.
- Las funciones de MongoDB para realizar operaciones CRUD en MongoDB.

## Objetivo

Comprender en qué situaciones utilizar SQL o NoSQL y sus diferentes aplicaciones.

## Desarrollo:

- Habilita un ambiente en MongoDB para persistir la información con la que trabajará tu API.
- Crea el modelo de base de datos en MongoDB con el cual trabajará tu API.

Adicionalmente te aconsejamos leer los siguientes contenidos que ampliarán tus conocimientos:

## SQL vs NoSQL ¿Cuál debo usar?

Las bases de datos NoSQL tienen estructuras que permiten almacenar información en aquellas situaciones en las que las BD relacionales generan ciertos problemas como escalabilidad y rendimiento. Por ejemplo en donde pueda haber una gran cantidad de usuarios concurrentes que accedan a muchos datos.

Empresas como Amazon tuvieron la necesidad de utilizar este tipo de BD NoSQL por la necesidad de crecimiento en su almacenamiento, Amazon por ejemplo, creo DynamoDB.

Al iniciar un proyecto en donde es necesario almacenar información y por lo tanto utilizar una base de datos es necesario hacer la pregunta: ¿debo usar una base de datos SQL o NoSQL? La respuesta tiene que ser analizada según los datos que se van a almacenar.

Esto nos lleva a las siguientes preguntas:

### ¿Cuándo debo utilizar una base de datos NoSQL?

- Los requisitos de los datos son desconocidos, sujetos a cambiar o expandirse con facilidad.
- Se necesita un alto rendimiento de escritura y de lectura de los datos.
- Necesidad de escalabilidad horizontal de la base de datos.

## ¿Cuándo debo utilizar una bases de datos SQL?

- Se necesita que los datos sean consistentes y transacciones atómicas.
- Necesidad de un esquema estricto y gran dependencia de relaciones.

El siguiente artículo da un panorama de lo que conlleva la elección de una base de datos como desarrollador:

## Artículo 1

[¿Cómo saber si necesitas una Base de Datos NoSQL?](https://medium.com/@eugeniomendoza/c%C3%B3mo-saber-si-necesitas-una-base-de-datos-nosql-b6cfd5bb7d9b)

A continuación se muestran algunos ejemplos de donde aplicar las bases de datos NoSQL y SQL.

### SQL:

- Fines educativos: Aportar conocimiento lógico al estudiante.
- Desarrollo web: Para mantener jerarquía de datos, siempre y cuando la capacidad de concurrencia o almacenamiento no sea considerable.
- Negocios: Inteligencia y análisis de negocios, facilita el consumo de la información.
- Empresarial: Tanto el software a la medida y empresarial tiene la característica de mantener los datos consistentes.

### NoSQL:

- Redes sociales: Altamente necesario.
- Desarrollo web: Donde la concurrencia y almacenamiento es alta y por lo tanto la velocidad de lectura y escritura es fundamental.
- BigData: Debido a la administración de grandes cantidades de información.
- Cloud: "Everything as service".

Sin duda un tema muy interesante que se desprende de estas aplicaciones es *Big Data*, este video te da una introducción de qué es *Big Data* y por qué es tan importante, además te da una idea clara de por qué se utilizan bases de datos NoSQL:

- [¿Qué es el Big Data?](https://youtu.be/M26iIqmqWkI)

Ejemplos de *XaaS: Everything as a Service*

- [XaaS: Everything as a Service](https://youtu.be/4G7u-wIpOvE)
