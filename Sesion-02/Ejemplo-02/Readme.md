[`Backend Fundamentals`](../../README.md) > [`Sesión 02`](../README.md) > `Ejemplo 2`

# Ejemplo 2

## Objetivo

Entender los objetos de petición y respuesta que nos provee ExpressJS y cómo utilizarlos para agregar funcionalidad a nuestra API.

## Requerimientos

Se recomienda tener NodeJS LTS instalado y funcionando correctamente. También es recomendable estar familiarizado con Javascript y programación orientada a objetos.

## Desarrollo

### Recibiendo Parámetros

1. Las rutas también pueden utilizarse de forma dinámica, esto se puede lograr en Express con los *route parameters*, estos son segmentos de la ruta de petición y se definen en la API comenzando con `:` en la definición de la ruta. Por ejemplo `/gods/:id`, esta ruta va a hacer match con la petición sobre `gods/6` y también con `gods/456`.

Express extrae los valores de los parámetros para que podamos usarlos en la definición del servicio.

```javascript
const gods = { 
  Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
  Hades : { live : 'Underworld', symbol: 'Cornucopia' } 
};

app.get('/gods/:name', (req, res, next) => {
  res.send(gods[req.params.name]);
});
```

en el código anterior `req.params.name` guarda el valor del parámetro `name` enviado en la ruta de la petición. Y la petición `GET` sobre la ruta `/gods/Zeus` va a regresar `{ live: 'Olympus', symbol: 'Thunderbolt' }`.


2. Recordemos que todas las respuestas de un servidor tienen un código HTTP asociada que describe la ejecución. Hasta ahora Express se ha encargado de definir el código de respuesta por nosotros, pero también podemos decirle explícitamente cuál queremos enviar. Para eso existe el método `.status()` del objeto `res` (*response*). Por ejemplo, podemos enviar un código 404 si nos piden un dios que no tenemos registrado, entonces nuestro servicio se define como sigue:

```javascript
app.get('/gods/:name', (req, res, next) => {
  const good = gods[req.params.name];
  if (good) {
    res.send(good);
  } else {
    res.status(404).send('Good Not Found');
  }
});
```

3. Prueba estos servicios en Insomnia.

<!-- SS DE INSOMNIA -->


4. Otra forma de pasarle información al servicio directamente en la url de petición es mediante *query strings*, éstas aparecen al final de la url y se indican con un signo `?` y se separan por un `&`. Por ejemplo 

```
localhost:4001/gods/Zeus?live=Underworld&symbol=eagle
```

Para acceder a la *query string* desde el servicio se utiliza el atributo `req.query` que nos regresa un objeto con la información recibida, en el ejemplo anterior el objeto sería:

```javascript
{
  live : 'Underworld',
  symbol : 'eagle'
}
```

5. También podemos recibir información en el cuerpo de la petición, ésta es la forma mas segura de transferir información pues no viene directamente en la url sino que viene como parte de la petición. En este caso es el cliente el encargado de generar este cuerpo cuando hace su petición y para acceder a ella usamos el atributo `req.body`.

En la primera sesión del módulo vimos como definir el body directamente en psotman. ENLACE AL EJEMPLO EN DONDE SE VE ESO.
 
[`Atrás`](../Reto-01) | [`Siguiente`](../Reto-02)
