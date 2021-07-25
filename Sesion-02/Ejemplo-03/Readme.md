[`Backend Fundamentals`](../../README.md) > [`Sesión 02`](../README.md) > `Ejemplo 3`

# Ejemplo 3

## Objetivo

Entender los objetos de petición y respuesta que nos provee ExpressJS y cómo utilizarlos para agregar funcionalidad a nuestra API.

## Requerimientos

Se recomienda tener NodeJS LTS instalado y funcionando correctamente. También es recomendable estar familiarizado con Javascript y programación orientada a objetos.

## Desarrollo

### Recibiendo Parámetros

1. Las rutas también pueden utilizarse de forma dinámica, esto se puede lograr en Express con los *route parameters*, estos son segmentos de la ruta de petición y se definen en la API comenzando con `:` en la definición de la ruta. Por ejemplo `/goods/:id`, esta ruta va a hacer match con la petición sobre `goods/6` y también con `goods/456`.

Express extrae los valores de los parámetros para que podamos usarlos en la definición del servicio.

```javascript
const goods = { 
  Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
  Hades : { live : 'Underworld', symbol: 'Cornucopia' } 
};

app.get('/goods/:name', (req, res, next) => {
  res.send(goods[req.params.name]);
});
```

en el código anterior `req.params.name` guarda el valor del parámetro `name` enviado en la ruta de la petición. Y la petición `GET` sobre la ruta `/goods/Zeus` va a regresar `{ live: 'Olympus', symbol: 'Thunderbolt' }`.


2. Recordemos que todas las respuestas de un servidor tienen un código HTTP asociada que describe la ejecución. Hasta ahora Express se ha encargado de definir el código de respuesta por nosotros, pero también podemos decirle explícitamente cuál queremos enviar. Para eso existe el método `.status()` del objeto `res` (*response*). Por ejemplo, podemos enviar un código 404 si nos piden un dios que no tenemos registrado, entonces nuestro servicio se define como sigue:

```javascript
app.get('/goods/:name', (req, res, next) => {
  const good = goods[req.params.name];
  if (good) {
    res.send(good);
  } else {
    res.status(404).send('Good Not Found');
  }
});
```
 
[`Atrás`](../Reto-02) | [`Siguiente`](../Reto-03)
