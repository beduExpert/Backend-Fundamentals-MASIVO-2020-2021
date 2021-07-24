`Backend Fundamentals` > `S6 - Fundamentos de Base de Datos NoSQL (Mongo)` 
	
## Reto 2


1. Investiga cuál es el tamaño máximo de un documento que se puede almacenar en MongoDB.
2. Crea una base de datos para Adoptapet.
3. Modela las entidades Mascota y Solicitud, eligiendo entre usar un modelo embebido o uno referencial.
4. Justifica por qué elegiste el modelo seleccionado en el punto anterior.

Puedes basarte en los ejemplos explicados anteriormente para crear los modelos.

**Modelo Referencial**

```json
{
   "name": "O'Reilly Media",
   "founded": 1980,
   "location": "CA",

   "books": [123456789, 234567890, ...]

}

{
    "_id": 123456789,
    "title": "MongoDB: The Definitive Guide",
    "author": [ "Kristina Chodorow", "Mike Dirolf" ],
    "published_date": ISODate("2010-09-24"),
    "pages": 216,
    "language": "English"
}

{
   "_id": 234567890,
   "title": "50 Tips and Tricks for MongoDB Developer",
   "author": "Kristina Chodorow",
   "published_date": ISODate("2011-05-06"),
   "pages": 68,
   "language": "English"
}
```

**Modelo Embebido**

```json
{
   "_id": "joe",
   "name": "Joe Bookreader",
   "addresses": [
        {
          "street": "123 Fake Street",
          "city": "Faketon",
          "state": "MA",
          "zip": "12345"
        },
        {
          "street": "1 Some Other Street",
          "city": "Boston",
          "state": "MA",
          "zip": "12345"
        }
    ]
 }
```

[`Atrás: Ejemplo 02`](../Ejemplo-02) | [`Siguiente: Ejemplo 03`](../Ejemplo-03)
