const {Usuario} = require('../models/Usuario')
const {listaUsuarios} = require('../lists/lists')

const registrarUsuarios = (req, res) => {

    const {carnet, nombres, apellidos, genero, facultad, carrera, correo, password} = req.body;
    let usuario = new Usuario(carnet, nombres, apellidos, genero, facultad, carrera, correo, password)

    const existeUsuario = listaUsuarios.find(user => user.getCarnet() === carnet)

    if(existeUsuario != undefined) {
        return res.json({msg: 'El usuario ya existe'})
    }

    listaUsuarios.push(usuario);

    res.json({msg: 'El usuario ha sido guardado correctamente'})
}

const verUsuarios = (req, res) => {
    res.json(listaUsuarios)
}

const loginUsuario = (req, res) => {
    const {carnet, password} = req.body;

    const usuario = listaUsuarios.find(user => user.getCarnet() === carnet && user.getPassword() === password)

    if(usuario == undefined) {
        return res.json({ok: false, msg: 'Error de usuario o contraseña'})
    }
    res.json({user: usuario, ok: true, msg: 'Se logueo correctamente'})
}

module.exports = {
    registrarUsuarios,
    verUsuarios,
    loginUsuario
}
