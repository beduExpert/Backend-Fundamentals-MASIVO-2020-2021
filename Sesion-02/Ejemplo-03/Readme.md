[`Backend Fundamentals`](../../README.md) > [`Sesión 02`](../README.md) > `Ejemplo 3`

# Ejemplo 3

## Objetivo

Entender los objetos de petición y respuesta que nos provee ExpressJS y cómo utilizarlos para agregar funcionalidad a nuestra API.

## Requerimientos

Se recomienda tener NodeJS LTS instalado y funcionando correctamente. También es recomendable estar familiarizado con Javascript y programación orientada a objetos.

## Desarrollo

### CRUD

1. En el primer ejemplo dijimos que para que nuestra API fuera REST era necesario que tuviera el CRUD completo y hasta ahora solo hemos trabajado con `GET`. Así como existe `.get()` Express tiene un método para cada petición de HTTP que funcionan de la misma forma.

|   | HTTP   | Express   |
|---|--------|-----------|
| C | `POST`   | `.post()`   |
| R | `GET`    | `.get()`    |
| U | `PUT`    | `.put()`    |
| D | `DELETE` | `.delete(`) |

El funcionamiento del servicio dependerá del tipo de petición, pero todos estos métodos funcionan como ya vimos, recibiendo una ruta y un *callback* que define como reaccionar. También en cada caso debe regresarse una respuesta y un código HTTP.

2. El servicio para modificar los dioses griegos que tenemos guardados seria:

```javascript
app.put('/gods/:name', (req,res,next) => {
  const god = req.query;
  gods[req.params.name] = god
  res.send(god);
})
```

En este servicio suponemos que los nuevos valores nos los pasan como *query string* y el nombre del dios es parte de la ruta dinámica.

3. Para agregar un nuevo dios definimos el siguiente servicio:

```javascript
app.post('/gods', (req, res, next) => {
  const newGod = req.body;
  gods.push(newGod);
  res.status(200).send(newGod);
})
```

Para este servicio la información del dios que crearemos viene en el `body` de la petición

4. Por último definimos el servicio que elimina un dios.

```javascript
app.delete('/goods/:name', (req, res, next) =>{
  const name = req.params.name;
  deleteByKey(gods, name);
  res.sed('God deleted.')
})
```

Este servicio en especial no hace nada, pues no tenemos persistencia de datos, eso lo corregiremos en un par de sesiones.

5. Prueba todos estos servicios en insomnia. 

SS DE INSOMNIA

 
[`Atrás`](../Reto-02) | [`Siguiente`](../Reto-03)
