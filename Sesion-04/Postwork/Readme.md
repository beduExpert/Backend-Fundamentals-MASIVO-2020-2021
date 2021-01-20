# Postwork

Recuerda que todo lo trabajado en tu prework, así como durante la sesión, puede ser aplicado a tu proyecto personal. Para lo cual, toma las siguientes consideraciones:

**Asegurate de comprender:**

- Para qué son útiles herramientas como Insomnia y Postman en el desarrollo de un API.

## Objetivo

- Comprender los conceptos fundamentales de las técnicas para el manejo de sesiones y autenticación en una API.

Adicionalmente te aconsejamos leer los siguientes contenidos que ampliarán tus conocimientos:

## Desarrollo:

- Crea las clases que conformarán tu modelo, los controladores y rutas que te permitirán interactuar con ellos.

## Sesiones en una API

Para mantener el control de quién realiza peticiones a nuestra API necesitamos una manera de identificar quién está peticionando. Una vez que una API ha sido publicada cualquier humano o bot podría realizar peticiones y si no utilizamos técnicas para controlar el acceso, podríamos tener fugas de información confidencial o importante para nuestra organización.

### ¿Porque es importante manejar sesiones?

El uso de sesiones permite que la información del usuario sea persistente (con estado) en todas las páginas de un sitio web o aplicación. 

Con el manejo de sesiones podemos también limitar el alcance de nuestros usuarios a la información de otros usuarios. Si tenemos una API más madura y con un gran número de usuarios, podríamos comenzar a preocuparnos por limitar el número de peticiones que un usuario puede realizar en un lapso de tiempo, y así protegernos de cierta manera de bots que únicamente quieran extraer información.

### ¿Cómo manejar las sesiones de un usuario en una API?

Actualmente existen diversas técticas para el manejo de sesiones y autenticación.

### Cookies

Cookies son archivos de texto que se guardan en el cliente (computadora de escritorio, tablet, smartphone) con la intención de recordar las preferencias de un visitante sobre una página determinada.

Más información:

[¿Qué son las Cookies y Sesiones? (desde 0 y con ejemplos)](https://programacionymas.com/blog/cookies-y-sesiones)

[¿Cómo configurar sesiones en ExpressJS?](https://devcode.la/tutoriales/como-configurar-sesiones-en-expressjs/)

### JWT

JSON Web Token (JWT) es un estándar abierto basado en JSON para la creación de tokens de acceso que permiten la propagación de identidad y privilegios.

[¿Qué es JWT y cómo se diferencia de Cookies y Sesiones?](https://programacionymas.com/blog/jwt-vs-cookies-y-sesiones)

### OAuth

OAuth permite a un usuario compartir su información en el sitio A (proveedor de servicio) con el sitio B (llamado consumidor) sin compartir toda su identidad. 

Es utilizado por compañías como Google, Facebook, Microsoft, Twitter y Github para permitir a los usuarios compartir información sobre sus cuentas con aplicaciones de terceros o sitios web.

[Una introducción a OAuth 2 | DigitalOcean](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es)
