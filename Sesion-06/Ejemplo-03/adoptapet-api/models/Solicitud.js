// Solicitud.js
/** Clase que representa una solicitud de adopción */
/*class Solicitud {
    constructor(id, idMascota, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) {
      this.id = id;
      this.idMascota = idMascota;
      this.fechaDeCreacion = fechaDeCreacion;
      this.idUsuarioAnunciante = idUsuarioAnunciante;
      this.idUsuarioSolicitante = idUsuarioSolicitante;
      this.estado = estado;
    }
  
  }
  
  module.exports = Solicitud;*/

  const mongoose = require("mongoose");

  var SolicitudSchema = new mongoose.Schema(
    {
      mascota: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Mascota",
      },
      anunciante: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Usuario",
      },
      solicitante: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Usuario",
      },
      estado: { type: String, enum: ["aceptada", "cancelada", "pendiente"] },
    },
    { collection: "solicitudes", timestamps: true }
  );
  
SolicitudSchema.methods.publicData = function(){
  return {
    id: this.id,   
    idMascota: this.idMascota,
    fechaCreacion: this.fechaCreacion,
    idAnunciante: this.idAnunciante,
    idSolicitante: this.idSolicitante,
    estado: this.estado
  };
};
    
mongoose.model('Solicitud', SolicitudSchema)