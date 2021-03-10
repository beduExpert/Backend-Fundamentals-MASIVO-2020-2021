`Backend Fundamentals` > `S08 - Deploy` 
	
## Reto 1

Siguiendo el ejemplo anterior, crea el **modelo** de la entidad Mascota, esto en el archivo `models/Mascota.js` 

Recuerda que la definición en **MySQL** de mascota es la siguiente:

```sql
CREATE TABLE mascota (
	id INT PRIMARY KEY,
	nombre VARCHAR(20),
	categoria VARCHAR(20),
	fotos VARCHAR(50),
	descripcion VARCHAR(100),
	anunciante INT,
	ubicacion VARCHAR(20),
	FOREIGN KEY(anunciante) REFERENCES usuario(id)
);
```


[`Atrás: Ejemplo 01`](../Ejemplo-00) | [`Siguiente: Sesión 08`](../README.md)
