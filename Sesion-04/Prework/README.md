# Prework

## Objetivo

Comprender los fundamentos de las bases de datos y su importancia en los sistemas de software.

## Instrucciones

Ver los siguientes videos y posteriormente contestar el cuestionario adjunto.

## Desarrollo

# ¿Qué es una base de datos relacional?

Una base de datos relacional es un tipo de base de datos que almacena y proporciona acceso a puntos de datos relacionados entre sí. Las bases de datos relacionales se basan en el modelo relacional, una forma intuitiva y directa de representar datos en tablas. En una base de datos relacional, cada fila de la tabla es un registro con un ID único llamado clave. Las columnas de la tabla contienen atributos de los datos, y cada registro generalmente tiene un valor para cada atributo, lo que facilita el establecimiento de las relaciones entre los puntos de datos.

## ¿Cómo se estructuran las bases de datos relacionales?

El modelo relacional significa que las estructuras lógicas de **datos**, las **tablas de datos**, **vistas** e **índices** están separadas de las estructuras físicas de almacenamiento. Esta separación significa que los administradores de bases de datos pueden administrar el almacenamiento físico de datos sin afectar el acceso a esos datos como una estructura lógica. Por ejemplo, cambiar el nombre de un archivo de base de datos no cambia el nombre de las tablas almacenadas en él.

La distinción entre lógica y física también se aplica a las operaciones de la base de datos, que son acciones claramente definidas que permiten a las aplicaciones manipular los datos y las estructuras de la base de datos. Las operaciones lógicas permiten que una aplicación especifique el contenido que necesita, mientras que las operaciones físicas determinan cómo se debe acceder a esos datos y luego realizan la tarea.

Para garantizar que los datos sean siempre precisos y accesibles, las bases de datos relacionales siguen ciertas reglas de integridad.

## El modelo relacional

En los primeros años de las bases de datos, cada aplicación almacenaba datos en su propia estructura única. Cuando los desarrolladores querían crear aplicaciones para usar esos datos, tenían que saber mucho sobre la estructura de datos particular para encontrar los datos que necesitaban. Estas estructuras de datos eran ineficientes, difíciles de mantener y difíciles de optimizar para ofrecer un buen rendimiento de la aplicación. El modelo de base de datos relacional se diseñó para resolver el problema de varias estructuras de datos arbitrarias.

El modelo relacional proporcionó una forma estándar de representar y consultar datos que cualquier aplicación podría utilizar. Desde el principio, los desarrolladores reconocieron que la principal fortaleza del modelo de base de datos relacional estaba en el uso de tablas, que eran una forma intuitiva, eficiente y flexible de almacenar y acceder a información estructurada.

Con el tiempo, cuando los desarrolladores comenzaron a utilizar el lenguaje de consulta estructurado **(SQL)** para escribir y consultar datos en una base de datos, surgió otra fortaleza del modelo relacional. Durante muchos años, se utilizó ampliamente el SQL como lenguaje para **consultas de bases de datos**. SQL, que se basa en el álgebra relacional, proporciona un lenguaje matemático internamente consistente que facilita la mejora del rendimiento de todas las consultas de la base de datos. En comparación, otros enfoques deben definir consultas individuales.

## Beneficios de las bases de datos relacionales

Las organizaciones de todo tipo y tamaño utilizan el modelo relacional simple pero poderoso para una amplia variedad de necesidades de información. Las bases de datos relacionales se utilizan para hacer seguimiento de los inventarios, procesar transacciones de comercio electrónico, administrar grandes cantidades de información de clientes de misión crítica y mucho más. Se puede considerar una base de datos relacional para cualquier necesidad de información en la que los puntos de datos se relacionen entre sí y se deban administrar de una manera segura, consistente y basada en reglas.

Las bases de datos relacionales existen desde la década de 1970. Actualmente, las ventajas del modelo relacional continúan convirtiéndolo en el modelo más aceptado para bases de datos.

## Consistencia de los datos

El modelo relacional es el mejor para mantener la consistencia de los datos en todas las aplicaciones y copias de la base de datos **(denominadas instancias)**. Por ejemplo, cuando un cliente deposita dinero en un cajero automático y, luego, mira el saldo de la cuenta en un teléfono móvil, el cliente espera ver que ese depósito se refleje inmediatamente en un saldo de cuenta actualizado. Las bases de datos relacionales se destacan en este tipo de consistencia de datos, lo que garantiza que múltiples instancias de una base de datos tengan los mismos datos todo el tiempo.

Es difícil para otros tipos de bases de datos mantener este nivel de coherencia oportuna con grandes cantidades de datos. Algunas bases de datos recientes, como NoSQL, solo pueden proveer **“consistencia eventual.”** Bajo este principio, cuando la base de datos se escala o cuando varios usuarios acceden a los mismos datos al mismo tiempo, los datos necesitan algo de tiempo para “ponerse al día.” La consistencia eventual es aceptable para algunos usos, como para mantener listados en un catálogo de productos, pero para operaciones comerciales críticas como transacciones de un carrito de compras, la base de datos relacional sigue siendo el estándar de oro.

## Procedimientos almacenados y bases de datos relacionales

El acceso a los datos implica muchas acciones repetitivas. Por ejemplo, una consulta simple para obtener información de una tabla de datos puede necesitar repetirse cientos o miles de veces para producir el resultado deseado. Estas funciones de acceso a los datos requieren algún tipo de código para acceder a la base de datos. Los desarrolladores de aplicaciones no desean escribir un código nuevo para estas funciones en cada aplicación nueva. Afortunadamente, las bases de datos relacionales permiten procedimientos almacenados, que son bloques de código a los que se puede acceder con una simple llamada de aplicación. Por ejemplo, un solo procedimiento almacenado puede proporcionar un etiquetado de registro consistente para usuarios de varias aplicaciones. Los procedimientos almacenados también pueden ayudar a los desarrolladores a garantizar que ciertas funciones de datos en la aplicación se implementen de una manera específica.

## Bloqueo de bases de datos y concurrencia

Pueden surgir conflictos en una base de datos cuando varios usuarios o aplicaciones intentan cambiar los mismos datos al mismo tiempo. Las técnicas de bloqueo y concurrencia reducen la posibilidad de conflictos mientras mantienen la integridad de los datos.

El **bloqueo** evita que otros usuarios y aplicaciones accedan a los datos mientras se actualizan. En algunas bases de datos, el bloqueo se aplica a toda la tabla, lo que crea un impacto negativo en el rendimiento de la aplicación. Otras bases de datos, como las bases de datos relacionales de Oracle, aplican bloqueos a nivel de registro, lo que deja disponibles los otros registros dentro de la tabla, lo que ayuda a garantizar un mejor rendimiento de la aplicación.

La **concurrencia** gestiona la actividad cuando varios usuarios o aplicaciones realizan consultas al mismo tiempo en la misma base de datos. Esta capacidad proporciona el acceso correcto a los usuarios y las aplicaciones de acuerdo con las políticas definidas para el control de datos.

## ¿Qué buscar a la hora de seleccionar una base de datos relacional?

El software que se utiliza para almacenar, administrar, consultar y recuperar datos almacenados en una base de datos relacional se denomina sistema de gestión de bases de datos relacionales (RDBMS). RDBMS proporciona una **interfaz** entre **usuarios** y **aplicaciones** y la base de datos, así como funciones administrativas para administrar el almacenamiento, el acceso y el rendimiento de los datos.

Varios factores pueden guiar su decisión al momento de elegir entre tipos de bases de datos y productos de bases de datos relacionales. El RDBMS que elija dependerá de las necesidades de su negocio. Hágase las siguientes preguntas:

+ **¿Cuáles son nuestros requisitos de precisión de datos?** ¿El almacenamiento de datos y la precisión dependerán de la lógica empresarial? ¿Nuestros datos tienen requisitos estrictos de precisión (por ejemplo, datos financieros e informes gubernamentales)?

+ **¿Necesitamos escalabilidad?** ¿Cuál es la escala de los datos a administrar y cuál es su crecimiento previsto? ¿Será necesario que el modelo de base de datos admita copias de base de datos duplicadas (como instancias separadas) para la escalabilidad? Si es así, ¿puede mantener la consistencia de los datos en esas instancias?

+ **¿Qué tan importante es la concurrencia?** ¿Varios usuarios y aplicaciones necesitarán un acceso simultáneo a los datos? ¿El software de la base de datos admite concurrencia mientras protege los datos?

+ **¿Cuáles son nuestras necesidades de rendimiento y confiabilidad?** ¿Necesitamos un producto de alto rendimiento y alta confiabilidad? ¿Cuáles son los requisitos para el rendimiento de la consulta-respuesta? ¿Cuáles son los compromisos de los proveedores para los acuerdos de nivel de servicio (SLA) o tiempo de inactividad no planificado?

# ¿Qué es SQL?

<img src="https://cambiodigital-ol.com/wp-content/uploads/2020/02/sql_portada_opt.png" width="500">

El Lenguaje de **Consulta Estructurado** popularmente conocido por sus siglas en inglés como **SQL**, es un tipo de lenguaje de programación que ayuda a solucionar problemas específicos o relacionados con la definición, manipulación e integridad de la información representada por los datos que se almacenan en las bases de datos.

Algunos aspectos de SQL están basados en el cálculo relacional, algunos en el álgebra relacional que provienen del modelo relacional y otros a ninguno de los dos sino que son parte de SQL.

## Creación y evolución de SQL

En ingeniería de software toda buena historia comienza con la necesidad de resolver un problema. En los **años 70** las bases de datos comenzaban a ser el quebradero de cabeza de muchos desarrollos. La falta de un estándar claro y que cada empresa competía por imponer su solución de software hacía muy difícil, sino casi imposible, la coexistencia entre sí.

En **1974**, basándose en el modelo correlacional establecido por Edgard Codd, IBM comienza a trabajar en las bases de lo que sería su base de datos SEQUEL. La idea de fondo era resolver los problemas anteriores ofreciendo una solución estandarizada a los problemas de la época.

El éxito de su propuesta fue inminente entre sus clientes y entre los años **1974 a 1977** aparecieron diferentes versiones que popularizaron su integración en diferentes sistemas. Posteriormente por causas legales IBM se vió obligada a rebautizar el nombre de su proyecto a SQL

Pronto las empresas de todo el mundo comenzaron a demandar soluciones de software que hicieran uso de las bondades del sistema **SQL**. Esto hizo que pronto aparecieran alternativas procedentes de otras compañias. **Oracle**, **Sybase** fueron las primeras compañías en comercializar sus productos basados en SQL lo cual contribuyó a reforzar las bases del ecosistema que estaría por crearse.

SQL ya era por 1981 considerado un **estándar** pero no fue hasta 1986 cuando el **ANSI** adoptó SQL como estándar de facto para los lenguajes relacionales. Esto hizo que un año después se publicase el conjunto de normas que lo convertirán en un estándar **ISO (SQL/86)** dando lugar a diferentes revisiones hasta la fecha.

## Fundamentos de SQL

Con SQL podemos realizar diferentes operaciones para consultar o manipular datos. A estas operaciones solemos referirnos como operaciones **CRUD** (de Create, Read, Update y Delete). Para ello hacemos uso de cuatro instrucciones para realizar estas tareas:

+ **INSERT:** inserta filas en una tabla. Se corresponde con la “C” de CRUD.
+ **SELECT:** Muestra información sobre los datos almacenados en la base de datos. Dicha información puede pertenecer a una o varias tablas. Es la “R”.
+ **UPDATE:** Actualiza información de una tabla. Es, obviamente, la “U”.
+ **DELETE:** Borra filas de una tabla. Se corresponde con la “D”.

Por ejemplo y para mostrar cómo funciona su sintaxis lo mejor es ver un ejemplo con SELECT. Es sin duda el comando más versátil del lenguaje SQL.

```sql
SELECT *
FROM Nombre_Tabla_Vista
WHERE Condiciones
ORDER BY ListaColumnas [ ASC / DESC ]
```
**Por ejemplo:**
```sql
| nombre | apellido1 | apellido2 |

  JUAN	   PEREZ	     MENDEZ
  MARIA	   GARCIA	     BENITO
  LUIS	   GARCIA	     PEREZ
```
## DDL, DML y DCL

Cuando pensamos en una base de datos tenemos solemos verla como un conjunto de datos ordenados en tablas, registros e índices pero en realidad el primer paso es definir sus estructuras de datos. El lenguaje SQL permite a programadores realizar esta tarea de manera eficiente a través de un gestor de bases de datos como MySQL o PostgreSQL.

Para ello SQL como estándar se estructura a su vez en 3 lenguajes independientes con las siglas **DDL**, **DML** y **DCL**.

## Lenguaje de Definición de Datos DDL (Data Definition Language)

Es el conjunto de instrucciones agrupadas en un lenguaje que nos permite definir estas estructuras que almacenarán los datos así como los procedimientos y funciones que permitirán consultarlos.

Para definir las estructura disponemos de tres sentencias:

+ **CREATE**, se usa para crear una base de datos, tabla, vistas, etc.
+ **ALTER**, se utiliza para modificar la estructura, por ejemplo añadir o borrar columnas de una tabla.
+ **DROP**, con esta sentencia, podemos eliminar los objetos de la estructura, por ejemplo un índice o una secuencia.

## Lenguaje de Manipulación de Datos (DML) Data Manipulation Language (DML)

Se resume en el conjunto de instrucciones SQL que permite a los usuarios introducir datos para posteriormente realizar tareas de consultas o modificación de los datos que contienen las Bases de Datos.

Los elementos que se utilizan para manipular los datos, son los siguientes:

+ **SELECT**, esta sentencia se utiliza para realizar consultas sobre los datos.
+ **INSERT**, con esta instrucción podemos insertar los valores en una base de datos.
+ **UPDATE**, sirve para modificar los valores de uno o varios registros.
+ **DELETE**, se utiliza para eliminar las finas de una tabla

## Lenguaje de Control de Datos (DCL)

Hasta aquí hemos visto las sentencias usadas para crear y manipular datos pero también es necesario su control y administración. De esto se encarga el lenguaje DLC (Data Control Languaje) mediante el conjunto de comandos que permiten a un administrador del sistema de bases de datos controlar el acceso a usuarios mediante la asignación de permisos o roles para realizar determinadas tareas.

Los comandos para controlar los permisos son los siguientes:

+ **GRANT**, permite otorgar permisos.
+ **REVOKE**, elimina los permisos que previamente se han concedido.

## Sistemas de gestión de bases de datos más conocidos

Desde la aparición de los primeros modelos de bases de datos relacionales a comienzos de la década de los 70 hasta nuestros días la industria del software a visto nacer y morir múltiples propuestas. En una evolución constante en la actualidad podemos decir que los principales sistemas gestores de bases de datos relacionales en la actualidad son:

## **MySQL:**

<img src="https://www.dydserveis.com/wp-content/uploads/2019/01/MYSQL.jpg" width="500">

Es el sistema gestor de bases de datos relacional por excelencia y utilizado en la gran parte de las aplicaciones web actuales. Se ofrece bajo licencia GNU/GPL y aunque es posible adquirir una versión licenciada por Oracle (actualmente la empresa responsable de su desarrollo).

**Las principales ventajas son:**

+ Base de datos multihilo y multiusuario
+ Facilidad de uso y gran rendimiento
+ Facilidad para instalar y configurar
+ Soporte multiplataforma
+ Soporte SSL

## **MariaDB:**

<img src="https://downloads.mariadb.org/devmedia/images/v2/MariaDB-Foundation-500x500.png?version=782492dca4047c851a115ac32c9ea427f9c79fce" width="500">

Este sistema de gestión de bases de datos fue en origen un fork o derivación de MySQL debido a los modelos de licencia que Oracle lleva imponiendo a su desarrollo desde la adquisición de Sun Microsystems. Esto hizo que la comunidad moviera sus esfuerzos en la creación de un desarrollo independiente.

**Entre sus principales características se encuentran:**

+ Aumento de motores de almacenamiento
+ Gran escalabilidad
+ Seguridad y rapidez en transacciones
+ Extensiones y nuevas características relacionadas con su aplicación para Bases de datos NoSQL.

## **SQLite:**

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png" width="500">

Utilizada por multitud de aplicaciones en la actualidad se trata de una librería escrita en C que implementa la gestión de un sistema de base de datos sin necesidad de un servidor ni configuraciones. Esto lo hace muy versátil para el desarrollo de pequeñas aplicaciones de software reduciendo significativamente sus requerimientos de hardware.

**Las principales características de SQLite son:**

+ El tamaño, al tratarse de una biblioteca, es mucho menor que otros sistemas de gestión de bases de datos.
+ Reúne los cuatro criterios ACID
(Atomicidad, Consistencia, Aislamiento y Durabilidad) logrando gran estabilidad
+ Gran portabilidad y rendimiento

## **PostgreSQL:**

<img src="https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2017/10/postgresql.png?width=1200&enable=upscale" width="500">

Bajo licencia BSD este sistema de base de datos relacional está orientado a objetos. Esto ofrece a desarrolladores la posibilidad de poder trabajar de un modelo más robusto de gestión de grandes volúmenes de datos.

**Sus principales características son:**

+ Control de Concurrencias multiversión (MVCC)
+ Flexibilidad en cuanto a lenguajes de programación que soporta
+ Es multiplataforma y opera bajo una licencia libre
+ Robustez, Eficiencia y Estabilidad

## **Microsoft SQL Server:**

<img src="https://d1.awsstatic.com/logos/partners/microsoft/logo-SQLServer-vert.c0cb0df0cd1d6c8469d792abb5929239da36611a.png" width="500">

Es un sistema propietario licenciado por Microsoft y se basa en el lenguaje Transact-SQL, capaz de poner a disposición de muchos usuarios grandes cantidades de datos de manera simultánea.

**Sus principales características son:**

+ Soporte exclusivo por parte de Microsoft.
+ Escalabilidad, estabilidad y seguridad.
+ Posibilidad de cancelar consultas.
+ Potente entorno gráfico de administración que permite utilizar comandos DDL y DML.
+ Puede utilizarse en otras plataformas como Linux o Docker.

## **Oracle:**

<img src="https://i1.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/01/oracle-logo.png?fit=1024%2C559&ssl=1" width="500">

Además de MySQL Oracle ofrece su propia gestión de bases de datos para el mundo empresarial. En la actualidad se considera como el más robusto y completo y es utilizado habitualmente en soluciones de banca o en grandes empresas.

**Sus principales características:**

+ Soporte de transacciones.
+ Estabilidad.
+ Escalabilidad.
+ Multiplataforma.

## Comandos y sintaxis de SQL

+ **CREATE**

Este comando crea un objeto dentro del gestor de base de datos. Puede ser una base de datos, tabla, índice, procedimiento almacenado o vista.

**Ejemplo (crear una tabla):**

```sql
# CREATE TABLE Empleado
(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
Nombre VARCHAR(50),
Apellido VARCHAR(50),
Direccion VARCHAR(255),
Ciudad VARCHAR(60),
Telefono VARCHAR(15),
Peso VARCHAR (5),
Edad (2),
Actividad Específica (100),
idCargo INT
)
```

+ **ALTER**

Con este comando podemos modificar la estructura de un objeto. Se pueden agregar/quitar campos a una tabla, modificar el tipo de un campo, agregar/quitar índices a una tabla, modificar un trigger, etc.

**Ejemplo (agregar columna a una tabla):**

```sql
ALTER TABLE 'NOMBRE_TABLA' ADD NUEVO_CAMPO INT;
ALTER TABLE 'NOMBRE_TABLA' DROP COLUMN NOMBRE_COLUMNA;
```
+ **DROP**

Este comando elimina un objeto de la base de datos. Puede ser una tabla, vista, índice, trigger, función, procedimiento o cualquier otro objeto que el motor de la base de datos soporte. Se puede combinar con la sentencia ALTER.

**Ejemplo:**

```sql
DROP TABLE 'NOMBRE_TABLA';
DROP SCHEMA 'ESQUEMA;'
DROP DATABASE 'BASEDATOS';
```

+ **INSERT**

Una sentencia INSERT de SQL agrega uno o más registros a una (y sólo una) tabla en una base de datos relacional.

**Forma básica:**

```sql
INSERT INTO ''tabla'' (''columna1'', [''columna2,... '']) VALUES (''valor1'', [''valor2,...''])
```

**Ejemplo:**

```sql
INSERT INTO agenda_telefonica VALUES (Pedro Aguilar, 881412339);
```

+ **UPDATE**

Utilizada para modificar los valores de un conjunto de registros existentes en una tabla.

**Ejemplo:**

```sql
UPDATE mi_tabla SET campo1 = 'nuevo valor campo1' WHERE campo2 = 'N';
```

+ **DELETE**

Borra uno o más registros existentes en una tabla.

**Forma básica:**

```sql
DELETE FROM 'tabla' WHERE 'columna1' = 'valor1'
```

**Ejemplo:**

```sql
DELETE FROM My_table WHERE field2 = 'N';
```

En el siguiente articulo conocerás 
[¿Que es NoSQL?](https://aws.amazon.com/es/nosql/)

