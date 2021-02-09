[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Arquitectura de software`](../README.md) > `Ejemplo 1`

# Arquitectura cliente-servidor

**Objetivo:**

- Comprender las diferencias entre un cliente y un servidor web, la manera en la que se comunican y los diferentes tipos de servidores y protocolos más comunes de la web.

**Requerimientos:**

- Navegador web y cuaderno o aplicación para tomar notas.

## Desarrollo



### Listando animalitos

Listaremos animales haciendo peticiones a una API pública: 

1. Abriremos una nueva pestaña de nuestro navegador

2. Abrimos el inspector de elementos y nos dirigiremos a la pestaña *Network*

3. Copiamos y pegamos el [siguiente enlace:](https://petstore.swagger.io/v2/pet/findByStatus?status=available)

4. Observar que es lo que sucede

5. En la pestaña de *Network* dar click en la primera petición, analizar los campos del request y de la respuesta.


<img src="img/Untitled1.png" width="1000">

### Utilizando un cliente de peticiones

1. Elegiremos e instalaremos alguno de los siguientes clientes de peticiones HTTP/HTTPS
    - [Insomnia Core](https://insomnia.rest/)
    - [Postman](https://www.postman.com/)

2. Añadiremos una nueva mascota haciendo una petición `POST` en el siguiente URL: [https://petstore.swagger.io/v2/pet](https://petstore.swagger.io/v2/pet)

<img src="img/Untitled2.png" width="700">

    El cuerpo de la petición estará en formato JSON y será cómo el siguiente:

    ```jsx
    {
      "id": 989898,
      "category": {
        "id": 0,
        "name": "dogs"
      },
      "name": "El Firulais",
      "photoUrls": [
      "https://i.pinimg.com/474x/63/96/a2/6396a292169efeb4651278196a81bb6b.jpg"
      ],
      "tags": [
        {
          "id": 4242,
          "name": "memes"
        }
      ],
      "status": "available"
    }
    ```

Una vez ejecutada la petición, obtendremos una respuesta `200` si todo ha salido bien

<img src="img/Untitled3.png" width="900">

-------

[`Atrás: Sesión 03`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-03) | [`Siguiente: Reto-01`](../Reto-01)

