const {Usuario} = require('../models/Usuario')
const {listaUsuarios} = require('../lists/lists')
const fs = require('fs');

const registrarUsuarios = (req, res) => {

    const { carnet, nombres, apellidos, genero, facultad, carrera, correo, password } = req.body;
    let usuario = new Usuario(parseInt(carnet), nombres, apellidos, genero, facultad, carrera, correo, password);
//VERIFICAR USUARIO EXISTENTE
    const existeUsuario = listaUsuarios.find(user => user.getCarnet() === parseInt(carnet));

    if(existeUsuario) {
        return res.json({msg: 'El usuario ya existe'});
    }
//AGREGANDO LOS DATOS A LA LSITA
    listaUsuarios.push(usuario);
//GUARDAR LOS DATOS EN EL ARCHIVO JSON
    fs.writeFile('usuario.json', JSON.stringify(listaUsuarios, null, 2), err => {
        if(err) {
            console.error('Error al guardar los datos del usuario', err);
            return res.status(500).json({ msg: 'Error al guardar los datos del usuario' });
        }
        console.log('El usuario ha sido guardado correctamente');
    });   

    res.json({ msg: 'El usuario ha sido guardado correctamente' });
};

const verUsuarios = (req, res) => {
    res.json(listaUsuarios)
}

const loginUsuarios = (req, res) => {
    const {carnet, password} = req.body;

    const usuario = listaUsuarios.find(user => user.getCarnet() === parseInt(carnet) && user.getPassword() === password)

    if (usuario == undefined) {
        return res.json({ok: false, msg: 'Error de usuario o contraseña'})
    }
    res.json({user: usuario, ok: true, msg: 'Se logueo correctamente'})
}

const cargarUsuarios = (req, res) => {
    const json = req.body;

    for (user of json) {
        listaUsuarios.push(new Usuario(user.carnet, user.nombres, user.apellidos, user.genero, user.facultad, user.carrera, user.correo, user.password))
    }
    res.json({msg: "La carga de usuarios fue realizada correctamente"})
}

const eliminar_usuario = (req, res) => {
    const carnet = req.params.carnet;

    const posicionUsuario = listaUsuarios.findIndex(user => user.getCarnet() === parseInt(carnet))

    if (posicionUsuario === -1) {
        return res.json({msg: "El usuario no existe"})
    }
    listaUsuarios.splice(posicionUsuario, 1)
    res.json({msg: "El usuario ha sido eliminado"})
}

const editar_usuario = (req, res) => {
    const {carnet, nombres, apellidos, genero, facultad, carrera, correo, password} = req.body;

    const posicionUsuario = listaUsuarios.findIndex(user => user.getCarnet() === parseInt(carnet))

    if (posicionUsuario === -1) {
        return res.json({msg: 'El usuario no existe'})
    }

    listaUsuarios[posicionUsuario].setNombres(nombres)
    listaUsuarios[posicionUsuario].setApellidos(apellidos)
    listaUsuarios[posicionUsuario].setGenero(genero)
    listaUsuarios[posicionUsuario].setFacultad(facultad)
    listaUsuarios[posicionUsuario].setCarrera(carrera)
    listaUsuarios[posicionUsuario].setCorreo(correo)
    listaUsuarios[posicionUsuario].setPassword(password)
    
    res.json({msg: 'El usuario ha sido editado correctamente'})
}

module.exports = {
    registrarUsuarios,
    verUsuarios,
    loginUsuarios,
    cargarUsuarios,
    eliminar_usuario,
    editar_usuario
}
