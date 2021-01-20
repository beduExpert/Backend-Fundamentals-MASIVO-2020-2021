# Ejemplo 3 - Ejecutando Queries

## Objetivo

Comprender los fundamentos del lenguaje SQL y ejecutar consultas a la DB.

## Requerimientos

Haber completado la instalación y configuración de MySQL.

## Desarrollo

### Crear una base de datos

1. Listar las bases de datos creadas:

```sql
show databases;
```

```json
+--------------------+
| Database           |
+--------------------+
| information_schema |
| innodb             |
| mysql              |
| performance_schema |
+--------------------+
4 rows in set (0.061 sec)
```

El resultado dependerá de la versión de MySQL instalada o si anteriormente ya se han creado bases de datos.

2. Para crear una base de datos ocuparemos el siguiente comando:

```sql
create database restaurante;
```

```json
Query OK, 1 row affected (0.063 sec)
```

Y listaremos nuevamente para asegurar la creación de la BD

```sql
show databases;
```

```json
+--------------------+
| Database           |
+--------------------+
| information_schema |
| innodb             |
| mysql              |
| performance_schema |
| restaurante        |
+--------------------+
5 rows in set (0.060 sec)
```

3. Luego, será necesario seleccionar la BD en la que vamos a trabajar

```sql
use restaurante;
```

```json
Database changed
```

### Crear una tabla

Antes de crear una tabla hay ciertos puntos que debemos estudiar:

- Tipos de datos

    Los tipos de datos soportados en MySQL según la documentación:

    [MySQL :: MySQL 8.0 Reference Manual :: 11 Data Types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)

- Restricciones de Integridad

    Recordando en la clase anterior se trató de estas restricciones:

    - Valores nulos:

        ```sql
        *atributo* *tipo* NOT NULL | NULL
        ```

    - Valores por defecto:

        ```sql
        *atributo* *tipo* DEFAULT *expresión*
        ```

    - Clave primaria

        Nivel columna:

        ```sql
        *atributo tipo* PRIMARY KEY
        ```

        Nivel tabla:

        ```sql
        PRIMARY KEY(*columna1, columna2, ...*)
        ```

    - Claves alternativas:

        ```sql
        *atributo tipo* UNIQUE
        ```

    - Claves foráneas:

        Nivel columna:

        ```sql
        *atributo tipo* REFERENCES *tabla*[(*columna*)]
        ```

        Nivel tabla:

        ```sql
        FOREIGN KEY(*columna1, columna2, ...*) REFERENCES *tabla*[(*columna1, columna2, ...*)]
        ```

Para crear una tabla ocupamos la siguiente sintaxis:

```sql
CREATE TABLE *nombre_tabla*(*atributo1 tipo* [*restricción*], *atributo2...);*
```

Para verificar que la tablas se ha creado:

```sql
SHOW TABLES;
```

Y para ver la cómo se creo la tabla:

```sql
DESC *nombre_tabla;*
```

### Ejemplo

Vamos a crear las tablas de la BD de restaurante para ello vamos a utilizar el diseño que se realizó.

1. Sucursal

```sql
CREATE TABLE sucursal(
     razonSocial VARCHAR(50),
     rfc CHAR(13) UNIQUE NOT NULL,
     nombre VARCHAR(50),
     ubicacion VARCHAR(80) NOT NULL,
     PRIMARY KEY(razonSocial)
 );
DESC sucursal;
```

```sql
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| razonSocial | varchar(50) | NO   | PRI | NULL    |       |
| rfc         | char(13)    | NO   | UNI | NULL    |       |
| nombre      | varchar(50) | YES  |     | NULL    |       |
| ubicacion   | varchar(80) | NO   |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
4 rows in set (0.063 sec)
```

2. Empleado

```sql
CREATE TABLE empleado(
    rfc CHAR(13),
    nombre VARCHAR(100) NOT NULL,
    fechaNcto DATE NOT NULL,
    direccion VARCHAR(80) NOT NULL,
    tel CHAR(11),
    razonSocial VARCHAR(50),
    PRIMARY KEY(rfc),
    FOREIGN KEY(razonSocial) REFERENCES sucursal(razonSocial)
  );
DESC empleado;
```

```sql
+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+-------------+--------------+------+-----+---------+-------+
| rfc         | char(13)     | NO   | PRI | NULL    |       |
| nombre      | varchar(100) | NO   |     | NULL    |       |
| fechaNcto   | date         | NO   |     | NULL    |       |
| direccion   | varchar(80)  | NO   |     | NULL    |       |
| tel         | char(11)     | YES  |     | NULL    |       |
| razonSocial | varchar(50)  | YES  | MUL | NULL    |       |
+-------------+--------------+------+-----+---------+-------+
6 rows in set (0.065 sec)
```

3. Orden

```sql
CREATE TABLE orden(
     idOrden INT,
     fecha DATE NOT NULL,
     total FLOAT NOT NULL,
     razonSocial VARCHAR(50) NOT NULL,
     rfc CHAR(13) NOT NULL,
     PRIMARY KEY(idOrden),
     FOREIGN KEY(razonSocial) REFERENCES sucursal(razonSocial),
     FOREIGN KEY(rfc) REFERENCES empleado(rfc)
     );
DESC orden;
```

```sql
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| idOrden     | int(11)     | NO   | PRI | NULL    |       |
| fecha       | date        | NO   |     | NULL    |       |
| total       | float       | NO   |     | NULL    |       |
| razonSocial | varchar(50) | NO   | MUL | NULL    |       |
| rfc         | char(13)    | NO   | MUL | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
5 rows in set (0.063 sec)
```

4. Ingrediente

```sql
CREATE TABLE ingrediente(
     idIngrediente INT,
     nombre VARCHAR(40) NOT NULL,
     stock INT DEFAULT 1,
     PRIMARY KEY(idIngrediente)
    );
DESC ingrediente;
```

```sql
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| idIngrediente | int(11)     | NO   | PRI | NULL    |       |
| nombre        | varchar(40) | NO   |     | NULL    |       |
| stock         | int(11)     | YES  |     | 1       |       |
+---------------+-------------+------+-----+---------+-------+
3 rows in set (0.059 sec)
```

5. Categoría

```sql
CREATE TABLE categoria(
     idCategoria INT,
     nombre VARCHAR(30) NOT NULL,
     PRIMARY KEY(idCategoria)
    );
DESC categoria
```

```sql
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| idCategoria | int(11)     | NO   | PRI | NULL    |       |
| nombre      | varchar(30) | NO   |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
2 rows in set (0.062 sec)
```

6. Platillo

```sql
CREATE TABLE platillo(
     idPlatillo INT,
     nombre VARCHAR(30) NOT NULL,
     costo FLOAT NOT NULL,
     idCategoria INT NOT NULL,
     PRIMARY KEY(idPlatillo),
     FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria)
    );
DESC platillo;
```

```sql
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| idPlatillo  | int(11)     | NO   | PRI | NULL    |       |
| nombre      | varchar(30) | NO   |     | NULL    |       |
| costo       | float       | NO   |     | NULL    |       |
| idCategoria | int(11)     | NO   | MUL | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
4 rows in set (0.378 sec)
```

7. Orden Platillo

```sql
CREATE TABLE orden_platillo(
     cantidad INT NOT NULL,
     idOrden INT NOT NULL,
     idPlatillo INT NOT NULL,
     FOREIGN KEY(idOrden) REFERENCES orden(idOrden),
     FOREIGN KEY(idPlatillo) REFERENCES platillo(idPlatillo)
    );
DESC orden_platillo;
```

```sql
+------------+---------+------+-----+---------+-------+
| Field      | Type    | Null | Key | Default | Extra |
+------------+---------+------+-----+---------+-------+
| cantidad   | int(11) | NO   |     | NULL    |       |
| idOrden    | int(11) | NO   | MUL | NULL    |       |
| idPlatillo | int(11) | NO   | MUL | NULL    |       |
+------------+---------+------+-----+---------+-------+
3 rows in set (0.060 sec)
```

8. Platillo Ingrediente

```sql
CREATE TABLE platillo_ingrediente(
     idIngrediente INT NOT NULL,
     idPlatillo INT NOT NULL,
     FOREIGN KEY(idIngrediente) REFERENCES ingrediente(idIngrediente),
     FOREIGN KEY(idPlatillo) REFERENCES platillo(idPlatillo)
    );
DESC platillo_ingrediente;
```

```sql
+---------------+---------+------+-----+---------+-------+
| Field         | Type    | Null | Key | Default | Extra |
+---------------+---------+------+-----+---------+-------+
| idIngrediente | int(11) | NO   | MUL | NULL    |       |
| idPlatillo    | int(11) | NO   | MUL | NULL    |       |
+---------------+---------+------+-----+---------+-------+
2 rows in set (0.062 sec)
```

### Agregar, Eliminar, Modificar una tabla

Para agregar, eliminar o modificar columnas en una tabla existente se ocupa la sintaxis:

- Agregar

    ```sql
    ALTER TABLE *nombre_tabla* ADD (*atributo tipo restricción*);
    ```

    Ejemplo, si quisiéramos agregar una columna a la tabla empleado

    ```sql
    ALTER TABLE empleado ADD (sexo CHAR(1) NOT NULL);
    ```

- Modificar

    ```sql
    ALTER TABLE *nombre_table* MODIFY *atributo tipo restricción*;
    ```

    Ejemplo, al crear la tabla *empleado* consideramos que la columna *razonSocial* puede tener un valor nulo y además es una llave foránea y por regla de negocio nos piden que no puede tener un valor nulo entonces haremos:

    ```sql
    ALTER TABLE empleado MODIFY razonSocial VARCHAR(50) NOT NULL;
    DESC empleado;
    ```

    ```json
    +-------------+--------------+------+-----+---------+-------+
    | Field       | Type         | Null | Key | Default | Extra |
    +-------------+--------------+------+-----+---------+-------+
    | rfc         | char(13)     | NO   | PRI | NULL    |       |
    | nombre      | varchar(100) | NO   |     | NULL    |       |
    | fechaNcto   | date         | NO   |     | NULL    |       |
    | direccion   | varchar(80)  | NO   |     | NULL    |       |
    | tel         | char(11)     | YES  |     | NULL    |       |
    | razonSocial | varchar(50)  | NO   | MUL | NULL    |       |
    +-------------+--------------+------+-----+---------+-------+
    6 rows in set (0.247 sec)
    ```

- Eliminar

    ```sql
    ALTER TABLE *nombre_columna* DROP COLUMN *atributo;*
    ```

    Ejemplo, agregamos a empleado la columna *sexo* y necesitamos eliminar la columna

    ```sql
    ALTER TABLE empleado DROP COLUMN sexo;
    ```

### Inserción de registros

La función de una base de datos es persistir información, en las bases de datos relacionales son registros en las tablas existentes para hacer esta tarea en SQL se ocupa la sintaxis:

```sql
INSERT INTO *nombre_tabla*(atributo1, ...) **VALUES(*valor1,...);*
```
Ejemplo: Se requiere registrar una <b>sucursal</b> nueva.

```sql
INSERT INTO sucursal VALUES ("El Taquito Feliz SA de CV", "TAF261020666", "Taco Feliz", "CDMX");
```

Ejemplo. Se requiere registrar un nuevo empleado en la sucursal antes creada.

```sql
INSERT INTO empleado VALUES(
     "DEFL930301T43",
     "Daniel Ernesto FLores",
     "1993-03-01",
     "Bosque del Tesoro N.345 Col. Miguel Hidalgo, Ciudad de México, México CP.56070",
     "5510673492",
     "El Taquito Feliz SA de CV"
    );
```

### Consultas a la BD

> Una consulta sirve para extraer información de una base de datos. Permite manipular datos: agregar, eliminar y cambiar. Así es como usaremos esta palabra.

Para traer información de una o varias tablas ocuparemos:

```sql
SELECT *columna1, columna2, ...* FROM *nombre_table;* 
```

¿Qué pasa si sólo nos interesa obtener información de un empleado?

SQL nos permite utilizar condiciones, a través de la cláusula WHERE:

Ej. Queremos la información del empleado con RFC "DEFL930301T43"

```sql
SELECT * from empleado WHERE rfc = "DEFL930301T43"
```

Si requerimos ordenar o agrupar la información, por ejemplo, podemos utilizar los operadores "ORDER BY", "GROUP BY" respectivamente.

Más acerca de la sentencia SELECT:

```sql
SELECT
    [ALL | DISTINCT | DISTINCTROW ]
    [HIGH_PRIORITY]
    [STRAIGHT_JOIN]
    [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]
    [SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]
    select_expr [, select_expr] ...
    [into_option]
    [FROM table_references
      [PARTITION partition_list]]
    [WHERE where_condition]
    [GROUP BY {col_name | expr | position}, ... [WITH ROLLUP]]
    [HAVING where_condition]
    [WINDOW window_name AS (window_spec)
        [, window_name AS (window_spec)] ...]
    [ORDER BY {col_name | expr | position}
      [ASC | DESC], ... [WITH ROLLUP]]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
    [into_option]
    [FOR {UPDATE | SHARE}
        [OF tbl_name [, tbl_name] ...]
        [NOWAIT | SKIP LOCKED]
      | LOCK IN SHARE MODE]
    [into_option]

into_option: {
    INTO OUTFILE 'file_name'
        [CHARACTER SET charset_name]
        export_options
  | INTO DUMPFILE 'file_name'
  | INTO var_name [, var_name] ...
}
```

Y encontramos esta información en la documentación de MySQL:

[MySQL :: MySQL 8.0 Reference Manual :: 13.2.10 SELECT Statement](https://dev.mysql.com/doc/refman/8.0/en/select.html)

[`Atrás: Reto 02`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-05/Reto-02) | [`Siguiente: Reto 03`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-05/Reto-03)
