var router = require('express').Router();

const{
    crearMascota,
    obtenerMascotas,
	modificarMascota,
    eliminarMascota,
    obtenerMascota
} = require('../controllers/mascotas')

router.get('/', obtenerMascotas)
router.get('/:id', obtenerMascota)
router.post('/', crearMascota)
router.put('/:id', modificarMascota)
router.delete('/:id', eliminarMascota)

module.exports = router;