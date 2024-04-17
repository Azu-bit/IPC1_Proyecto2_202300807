const express = require('express');

const usuarioControllers = require('../controllers/usuario.controllers')
const publicacionesControllers = require('../controllers/publicaciones.controllers')

const router = express.Router();

router.post('/registroUsuarios', usuarioControllers.registrarUsuarios);
router.get('/verUsuarios', usuarioControllers.verUsuarios);
router.post('/login', usuarioControllers.loginUsuario);

router.post('/crearpublicacion', publicacionesControllers.crear_publicacion)
router.get('/verPublicacion', publicacionesControllers.ver_publicacion)

module.exports = router;
