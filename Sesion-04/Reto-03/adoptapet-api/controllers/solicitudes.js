/*  Archivo controllers/solicitudes.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

const Solicitud = require('../models/Solicitud')

function crearSolicitud(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var solicitud = new Solicitud(req.body)
  res.status(201).send(solicitud)
}

function obtenerSolicitudes(req, res) {
  // Simulando dos Mascotas y respondiendolos
  var solicitud1 = new Solicitud(1, '1', '20/10/27', '1', '2', 'En proceso');
  var solicitud2 = new Solicitud(1, '2', '20/10/27', '1', '2', 'En proceso');
  res.send([solicitud1, solicitud2])
}

function obtenerSolicitud(req, res) {
  // Simulando dos Mascotas y respondiendolos
  var solicitud2 = new Solicitud(req.params.id, '2', '20/10/27', '1', '2', 'En proceso');
  res.send(solicitud2)
}

function modificarSolicitud(req, res) {
  // simulando un mascota previamente existente que el mascota utili
  var solicitud1 = new Solicitud(1, '1', '20/10/27', '1', '2', 'En proceso');
  var modificaciones = req.body
  solicitud1 = { ...solicitud1, ...modificaciones }
  res.send(solicitud1)
}

function eliminarSolicitud(req, res) {
    // Líneas que buscan una solicitud en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Solicitud ${req.params.id} eliminado`);
}

module.exports = {
  crearSolicitud,
  obtenerSolicitudes,
  modificarSolicitud,
  eliminarSolicitud,
  obtenerSolicitud
}