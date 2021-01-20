/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

/*const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}*/

const mongoose = require('mongoose')
const Mascota = mongoose.model('Mascota')

function crearMascota(req, res, next) {
  var mascota = new Mascota(req.body)
  mascota.anunciante = req.usuario.id
  mascota.estado = 'disponible'
  mascota.save().then(mascota => {
    res.status(201).send(mascota)
  }).catch(next)
}

/*function obtenerMascotas(req, res) {
  // Simulando dos Mascotas y respondiendolos
  var mascota1 = new Mascota(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var mascota2 = new Mascota(1, 'Tito', 'Tortuga', 'https://img.culturacolectiva.com/featured/2019/02/27/1551305058738/tortugas-japonesas-se-vuelven-plaga-en-mexico-high.png','verde','1','CDMX');
  res.send([mascota1, mascota2])
}*/ 

function obtenerMascotas(req, res, next) {
  if(req.params.id){
    Mascota.findById(req.params.id)
			.populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
	      res.send(mascotas)
	    }).catch(next)
  } else {
    Mascota.find().then(mascotas=>{
      res.send(mascotas)
    }).catch(next)
  }
}

function obtenerMascota(req, res) {
  // Simulando dos Mascotas y respondiendolos
  var mascota1 = new Mascota(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  res.send(mascota1)
}

/*function modificarMascota(req, res) {
  // simulando un mascota previamente existente que el mascota utili
  var mascota1 = new Mascota(req.params.id, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}*/

function modificarMascota(req, res, next) {
  console.log("Mascota a modificar: " + req.params.id ) //req.param.id - Mascota en uri

  Mascota.findById(req.params.id).then(mascota => { //Busca la mascota que se recibe como parámetro.

    if (!mascota) { return res.sendStatus(401); }   //Si no se encuentra mascota, retorna estaus 401.---

    let idUsuario=req.usuario.id;                   //User en JWT
    console.log("Usuario que modifica " + idUsuario);
    let idAnunciante=mascota.anunciante;
    console.log(" Anunciante mascota: " + idAnunciante);
    if( idUsuario == idAnunciante ){
      let nuevaInfo = req.body
      if (typeof nuevaInfo.nombre !== 'undefined')
        mascota.nombre = nuevaInfo.nombre
      if (typeof nuevaInfo.categoria !== 'undefined')
        mascota.categoria = nuevaInfo.categoria
      if (typeof nuevaInfo.fotos !== 'undefined')
        mascota.fotos = nuevaInfo.fotos
      if (typeof nuevaInfo.descripcion !== 'undefined')
        mascota.descripcion = nuevaInfo.descripcion
      if (typeof nuevaInfo.anunciante !== 'undefined')
        mascota.anunciante = nuevaInfo.anunciante
      if (typeof nuevaInfo.ubicacion !== 'undefined')
        mascota.ubicacion = nuevaInfo.ubicacion
      mascota.save().then(updatedMascota => {
        res.status(201).json(updatedMascota.publicData())
      }).catch(next)
    } 
    else{
      return res.sendStatus(401);
    }
  }).catch(next)
}

/*function eliminarMascota(req, res) {
    // Líneas que buscan un usaurio en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}*/

function eliminarMascota(req, res) {
  // únicamente borra a su propio mascota obteniendo el id del token
  Mascota.findById(req.params.id).then(mascota => {

    if (!mascota) { return res.sendStatus(401); }
    
    let idUsuario=req.usuario.id;
    console.log("Usuario que modifica " + idUsuario);
    let idAnunciante=mascota.anunciante;
    console.log(" Anunciante mascota: " + idAnunciante);

    if( idUsuario == idAnunciante ){
      let nombreMascota = mascota.nombre;
      mascota.deleteOne();
      res.status(200).send(`Mascota ${req.params.id} eliminada. ${nombreMascota}`);
    }else{
      return res.sendStatus(401);
    }
  });
  
  /*Mascota.findOneAndDelete({ _id: req.param.id }).then(r => {
      res.status(200).send(`Mascota ${req.params.id} eliminada: ${r}`);
  });*/
}


module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota,
  obtenerMascota
}