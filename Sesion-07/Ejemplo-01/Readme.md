# Ejemplo 1

## Objetivo

Instalar Mongoose y crear nuestro primer modelo que integraremos a nuestra API.

Aprender a asegurar endpoints por medio de sesiones con JWT utilizando passport.js

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 4.

## Desarrollo

### Creando el modelo Usuario con Mongoose

[Mongoose](https://mongoosejs.com/) es una librería ODM que nos ayuda a trabajar con MongoDB y Node de manera más dinámica, permitiéndonos comunicarnos con el servidor de MongoDB y crear Modelos con una estructura y reglas que se adaptan a nuestra base de datos.

1. Entra a la carpeta de tu proyecto desarrollado en la Sesión 4, en ella instalaremos mongoose con el comando:

    ```bash
    npm install mongoose
    ```

    En los siguientes puntos del ejemplo, importaremos mongoose en nuestros modelos agregando la siguiente línea: 

    ```jsx
    const mongoose = require('mongoose');
    ```

2. Para definir la estrucutra que tendrán los documentos de una colección en MongoDB, es necesario definir un <b>schema</b> con mongoose. 

- Generemos el schema para el modelo <b>Usuario</b>, utilizando la clase `Schema` de mongoose. Abre el código de tu modelo Usuario, comenta el código actual e inserta la siguiente definición de schema.

    ```jsx
   // Usuario.js
   const mongoose = require('mongoose');            //Importando mongoose.

   const UsuarioSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
     username: String,                              //Definiendo cada campo con su respectivo tipo de dato.
     nombre: String,
     apellido: String, 
     email: String,
     password: String,
     ubicacion: String,
     telefono: String,
     bio: String,
     foto: String,
     tipo: String,
   }, { timestamps: true });                    

   mongoose.model("Usuario", UsuarioSchema);        //Define el modelo Usuario, utilizando el esquema UsuarioSchema.
    ```    
- El modelo ahora no tiene un id ya que por defecto Mongoose le agrega el atributo `_id` a un documento cuando es creado.
- La opción `{ timestamps: true }` agrega automáticamente la hora y fecha de creación (`createdAt` and `updatedAt`) cada que se crea o actualiza un documento.
    
3. Añadiendo validaciones al modelo de <b>Usuario</b>. 

    ```jsx
    // Usuario.js
   const mongoose = require('mongoose');                         //Importando mongoose.
   const uniqueValidator = require("mongoose-unique-validator"); //Importando módulo mongoose-unique-validator, pendiente de instalar.

   const UsuarioSchema = new mongoose.Schema({                   //Definiendo el objeto UsuarioSchema con el constructor Schema.
    username: {                                                  //Definiendo cada campo con sus tipo sde datos y validaciones.
      type: String,
      unique: true, //este campo no se puede repetir
      lowercase: true,
      required: [true, "no puede estar vacío"],
      match: [/^[a-zA-Z0-9]+$/, "es inválido"],
      index: true,
    },                                           
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: {
      type: String,
      unique: true, //este campo no se puede repetir
      lowercase: true,
      required: [true, "no puede estar vacío"],
      match: [/\S+@\S+\.\S+/, "es inválido"],
      index: true,
    },
    ubicacion: String,
    telefono: String,
    bio: String,
    foto: String,
    tipo: { type: String, enum: ['normal', 'anunciante'] },
    hash: String, //este campo se utilizará para la sesión
    salt: String, //este campo se utilizará para la sesión
    },
    { timestamps: true }
    );

    // usando plugin de validación para que no se repitan correos ni usernames
    UsuarioSchema.plugin(uniqueValidator, { message: "Ya existe" }); 
    mongoose.model("Usuario", UsuarioSchema);    //Define el modelo Usuario, utilizando el esquema UsuarioSchema.
    ```

    - La opción `{index: true}` optimizará los queries para el campo username e email.

4. Para crear un nuevo usuario con password y autenticación añadiremos algunos <b>helper methods</b> a nuestro modelo. Estos nos permitirán:

- Crea y valida contraseñas, así como generar el <b>JWT</b>. 
- Utilizar el algoritmo pbkdf2 econtrado en la libería crypto de Node. Con el cual generaremos y validaremos hashes.
- Para todos los helper methods, requeriremos algunos módulos. Añade las siguientes líneas en la parte alta de nuestro modelo <b>Usuarios</b>.

    ```jsx
    const crypto = require('crypto');                             //Importando módulo crypto, pendiente de instalar.
    const jwt = require('jsonwebtoken');                          //Importando módulo jsonwebtoken, pendiente de instalar.
    const secret = require('../config').secret;                   
    ```
5. Agrega los siguientes métodos a nuestro modelo <b>Usuario</b>:

- Colócalos justo antes de la definición del modelo Usuario, es decir antes de la última línea.

    ```jsx
    ...
    // usando plugin de validación para que no se repitan correos ni usernames
    UsuarioSchema.plugin(uniqueValidator, { message: "Ya existe" });

    UsuarioSchema.methods.crearPassword = function (password) {
      this.salt = crypto.randomBytes(16).toString("hex"); // generando una "sal" random para cada usuario
      this.hash = crypto
        .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
        .toString("hex"); // generando un hash utilizando la sal
    };

    /**
     * Recibe el password, genera y compara el has con el de la base de datos
     */
    UsuarioSchema.methods.validarPassword = function (password) {
      const hash = crypto
        .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
        .toString("hex");
      return this.hash === hash;
    };

    UsuarioSchema.methods.generarJWT = function() {
      const today = new Date();
      const exp = new Date(today);
      exp.setDate(today.getDate() + 60); // 60 días antes de expirar

      return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
      }, secret);
    };

    /**
     * Devuelve la representación de un usuario después de autenticar
     */
    UsuarioSchema.methods.toAuthJSON = function(){
      return {
        username: this.username,
        email: this.email,
        token: this.generarJWT()
      };
    };

    /**
    * Devuelve la representación de un usuario, sólo datos públicos
    */
    UsuarioSchema.methods.publicData = function(){
      return {
        id: this.id,
        username: this.username,
        email: this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        bio: this.bio,
        foto: this.foto,
        tipo: this.tipo,
        ubicacion: this.ubicacion,
        telefono: this.telefono,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      };
    };

    mongoose.model("Usuario", UsuarioSchema);
    ```

6. En nuestro archivo <b>app.js</b>, agrega las líneas que importan y configuran <b>mongoose</b>. En ellas podraś encontrar la invocacióna la función <b>connect</b> donde configuramos nuestra conexión a mongo, habilitamos el modo de debugeo en true, así como importamos el modelo previamente creado.

Nota: 
- Agrega las líneas justo arriba de la declaración de nuestro <b>router</b>.
- Recuerda reemplazar los campos que están entre `<>` en la url de conexión con los datos correctos de tu cluster encontrado en MongoDB Atlas.

    ```jsx
    
    /*********************** Mongoose Configuration *******************************/
    const mongoose = require("mongoose");

    mongoose.connect(
        "mongodb+srv://<usuario>:<password>@cluster0-xmea4.mongodb.net/<dbname>?retryWrites=true&w=majority"
    );

    mongoose.set("debug", true);

    require("./models/Usuario");
    // Aquí se importarán los modelos Mascota y Solicitud cuando estén listos

    /*********************** Mongoose Configuration *******************************/
    
    ```
7. Instalar el paquete <b>mongoose-unique-validator</b>.

    ```bash
    npm install mongoose-unique-validator
    ```

# Integrando nuestro primer modelo

## Configurando sesiones con Passport.js

1. Para hacer algunas configuraciones de nuestro ambiente, agregarás el archivo <b>index.js</b> debajo de la carpeta <b>config</b>, es decir: `config/index.js`

- Inserta las siguientes líneas. Quedará clara su utilidad en el siguiente módulo.

    ```jsx
    module.exports = {
      secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
    };
    ```

2. Crea un nuevo archivo `config/passport.js`con lo siguiente  

    ```jsx
    const passport = require('passport');                       //Importando passport, middleware para autenticación.
    const LocalStrategy = require('passport-local').Strategy;   //Importando estrategia autenticación. --> passport-local
    const mongoose = require('mongoose');
    const Usuario = mongoose.model('Usuario');

    passport.use(new LocalStrategy({                            //Configurando elementos utilizados para habilitar sesión.
      usernameField: 'email',
      passwordField: 'password'
    }, function (email, password, done) {
      Usuario.findOne({ email: email }).then(function (user) {
        if (!user || !user.validarPassword(password)) {
          return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
        }
        return done(null, user);
      }).catch(done);
    }));
    ```

    `LocalStrategy` inspecciona los campos `username` y `password` de las peticiones que vienen del frontend, esperando que la petición tenga el siguiente formato:

    ```json
    {
    	"email": "yo@juanitovega.com",
    	"password": "mipassword"
    }
    ```

3. Instala las dependencias para utilizar passport.js

    ```bash
    npm install jsonwebtoken passport passport-local express-jwt
    ```

4. Registra passport en `app.js`

    ```jsx
    require('./config/passport');
    ```

5. Para configurar autorizaciones sobre los distintos endpoints de nuestro proyecto, crearemos dos *middlewares* en el archivo `routes/auth.js`. Estos nos permitiran decodificar el código JWT.

- Crea el archivo <b>auth.js</b> debajo de la carpeta routes.
- Copia el siguiente código en el archivo recién creado.

    ```jsx
    const jwt = require('express-jwt');
    const secret = require('../config').secret;

    function getTokenFromHeader(req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      }

      return null;
    }

    const auth = {
      requerido: jwt({
        secret: secret,
        algorithms: ['HS256'],
        userProperty: 'usuario',
        getToken: getTokenFromHeader
      }),
      opcional: jwt({
        secret: secret,
        algorithms: ['HS256'],
        userProperty: 'usuario',
        credentialsRequired: false,
        getToken: getTokenFromHeader
      })
    };

    module.exports = auth;
    ```

    - El *middleware* `requerido` se utilizará para endpoints donde se requiera tener una sesión y `opcional` donde no sean necesarios.
    - La función `getTokenFromHeader()` es una función que utlizarán los dos middlewares para extraer el token del header de `Authorization` de una petición http.
    - La propiedad `userProperty` es donde vendrá el JWT descifrado y que podrémos utilizar después en el objeto request por medio de `req.usuario`.
    
6. Ahora implementaremos los métodos que nos proporciona Mongoose en nuestro controlador <b>usuarios</b>, es decir:  `controllers/usuarios.js`. 

- Abre el archivo <b>controllers/usuarios.js</b> y comenta el código.
- Copia el siguiente código. 
- Analiza las funciones, encontrarás aquellas que te permitirán hacer operaciones <b>CRUD</b> sobre tu modelo Usuario.
- Recuerda: <b>C - Create, R - Read, U - Update, D - Delete</b>.

    ```jsx
    // controllers/usuarios.js
    const mongoose = require("mongoose")
    const Usuario = mongoose.model("Usuario")
    const passport = require('passport');

    function crearUsuario(req, res, next) {
      // Instanciaremos un nuevo usuario utilizando la clase usuario
      const body = req.body,
        password = body.password

      delete body.password
      const usuario = new Usuario(body)
      usuario.crearPassword(password)
      usuario.save().then(user => {                                         //Guardando nuevo usuario en MongoDB.
        return res.status(201).json(user.toAuthJSON())
      }).catch(next)
    }

    function obtenerUsuarios(req, res, next) {                              //Obteniendo usuario desde MongoDB.
      Usuario.findById(req.usuario.id, (err, user) => {
        if (!user || err) {
          return res.sendStatus(401)
        }
        return res.json(user.publicData());
      }).catch(next);
    }

    function modificarUsuario(req, res, next) {
      console.log(req.usuario)
      Usuario.findById(req.usuario.id).then(user => {
        if (!user) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.username !== 'undefined')
          user.username = nuevaInfo.username
        if (typeof nuevaInfo.bio !== 'undefined')
          user.bio = nuevaInfo.bio
        if (typeof nuevaInfo.foto !== 'undefined')
          user.foto = nuevaInfo.foto
        if (typeof nuevaInfo.ubicacion !== 'undefined')
          user.ubicacion = nuevaInfo.ubicacion
        if (typeof nuevaInfo.telefono !== 'undefined')
          user.telefono = nuevaInfo.telefono
        if (typeof nuevaInfo.password !== 'undefined')
          user.crearPassword(nuevaInfo.password)
        user.save().then(updatedUser => {                                   //Guardando usuario modificado en MongoDB.
          res.status(201).json(updatedUser.publicData())
        }).catch(next)
      }).catch(next)
    }

    function eliminarUsuario(req, res) {
      // únicamente borra a su propio usuario obteniendo el id del token
      Usuario.findOneAndDelete({ _id: req.usuario.id }).then(r => {         //Buscando y eliminando usuario en MongoDB.
        res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
      })
    }

    function iniciarSesion(req, res, next) {
      if (!req.body.email) {
        return res.status(422).json({ errors: { email: "no puede estar vacío" } });
      }

      if (!req.body.password) {
        return res.status(422).json({ errors: { password: "no puede estar vacío" } });
      }

      passport.authenticate('local', { session: false }, function (err, user, info) {
        if (err) { return next(err); }

        if (user) {
          user.token = user.generarJWT();
          return res.json({ user: user.toAuthJSON() });
        } else {
          return res.status(422).json(info);
        }
      })(req, res, next);
    }

    module.exports = {
      crearUsuario,
      obtenerUsuarios,
      modificarUsuario,
      eliminarUsuario,
      iniciarSesion
    }
    ```

7. Por último, actualizar el archivo `routes/usuarios.js` utilizando los middleware de autorización para proteger información sensible de los usuarios.

- Abre el archivo de configuración de endopoints de usuarios, es decir: <b>routes/usuarios.js</b>
- Comenta el código encontrado.
- Inserta el siguiente codigo:

    ```jsx
    const router = require('express').Router();
    const {
      crearUsuario,
      obtenerUsuarios,
      modificarUsuario,
      eliminarUsuario,
      iniciarSesion
    } = require('../controllers/usuarios')
    const auth = require('./auth');

    router.get('/', auth.requerido, obtenerUsuarios)
    router.get('/:id', auth.requerido, obtenerUsuarios);
    router.post('/', crearUsuario)
    router.post('/entrar', iniciarSesion)
    router.put('/:id', auth.requerido, modificarUsuario)
    router.delete('/:id', auth.requerido, eliminarUsuario)

    module.exports = router;
    ```
- Analiza el código, observa en que endpoints será necesario el <b>JWT</b> (Su contenido definirá si un usuario tiene o no autorización sobre el endpoint, así como que información puede ver. )

8. Recomendación: [`Pasa al Reto 1:`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07/Reto-01)

    [`Atrás: Sesión 07`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07) | [`Siguiente: Reto 01`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-07/Reto-01)
