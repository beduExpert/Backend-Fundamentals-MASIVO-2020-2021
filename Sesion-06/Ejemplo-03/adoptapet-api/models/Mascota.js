// Mascota.js
/** Clase que representa un animalito a adoptar */
/*class Mascota {
    constructor(id, nombre, categoria, fotos, descripcion, anunciante, ubicacion) {
      this.id = id;
      this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
      this.categoria = categoria; // perro | gato | otro
      this.fotos = fotos; // links a las fotografías
      this.descripcion = descripcion; // descripción del anuncio
      this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
      this.ubicacion = ubicacion; // muy importante
    }
  
  }
  
  module.exports = Mascota;*/

const mongoose = require("mongoose");

const MascotaSchema = new mongoose.Schema({
  nombre: {type: String, required: true}, // nombre de la mascota (o titulo del anuncio)
  categoria: { type: String, enum: ['perro', 'gato', 'otro'] }, // perro | gato | otro
  fotos: [String], // links a las fotografías
  descripcion: {type:String, required: true}, // descripción del anuncio
  anunciante: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}, // contacto con la persona que anuncia al animalito
  ubicacion: { type: String }, // muy importante
  estado:{type: String, enum:['adoptado', 'disponible', 'pendiente']},
}, { timestamps: true })

MascotaSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    categoria: this.categoria,
    fotos: this.fotos,
    descripcion: this.descripcion,
    anunciante: this.anunciante,
    ubicacion: this.ubicacion,
    estado: this.estado
  };
};

mongoose.model('Mascota', MascotaSchema)