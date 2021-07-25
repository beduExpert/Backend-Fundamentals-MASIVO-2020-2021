// Usuario.js
/** Clase que representa a un usuario de la plataforma*/
class Usuario {
    constructor(id, username, nombre, apellido, email, password, ubicacion, telefono, bio, fotos, tipo) {
      this.id = id;
      this.username = username;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.ubicacion = ubicacion;
      this.telefono = telefono;
      this.bio = bio;
      this.fotos = fotos;
      this.tipo = tipo; // tipo normal o anunciante
    }
  }
  
  module.exports = Usuario;