const express = require('express');

const usuarioControllers = require('../controllers/usuario.controllers')
const publicacionesControllers = require('../controllers/publicaciones.controllers')

const router = express.Router();

router.post('/registroUsuarios', usuarioControllers.registrarUsuarios);
router.get('/verUsuarios', usuarioControllers.verUsuarios);
router.post('/login', usuarioControllers.loginUsuarios);

router.post('/crearpublicacion', publicacionesControllers.crear_publicacion)
router.get('/verPublicaciones', publicacionesControllers.ver_publicaciones)

router.post('/carga-usuarios', usuarioControllers.cargarUsuarios)

router.delete('/eliminar-usuario/:carnet', usuarioControllers.eliminar_usuario)
router.put('/editar-usuario', usuarioControllers.editar_usuario)

module.exports = router;
