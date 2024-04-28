const {Usuario} = require('../models/Usuario')
const {listaUsuarios} = require('../lists/lists')
const fs = require('fs');
const usuariosFilePath = 'usuario.json';

const registrarUsuarios = (req, res) => {

    const { carnet, nombres, apellidos, genero, facultad, carrera, correo, password } = req.body;
    let usuario = new Usuario(parseInt(carnet), nombres, apellidos, genero, facultad, carrera, correo, password);

    const UsuariosData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));
    // Verificar si el usuario ya existe

    const existeUsuario = UsuariosData.find(user => user.getCarnet() === parseInt(carnet));

    if (existeUsuario) {
        return res.json({ msg: 'El usuario ya existe' });
    }

    UsuariosData.push(usuario);

    // Guardar los datos actualizados en el archivo JSON
    fs.writeFileSync(usuariosFilePath, JSON.stringify(UsuariosData, null, 2));

    res.json({ msg: 'El usuario ha sido guardado correctamente' });
};

const verUsuarios = (req, res) => {
    const UsuariosData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));
    res.json(UsuariosData);
};

const loginUsuarios = (req, res) => {

    const { carnet, password } = req.body;

    const UsuariosData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));

    const usuario = UsuariosData.find(user => user.carnet === parseInt(carnet) && user.password === password);

    if (!usuario) {
        return res.json({ ok: false, msg: 'Error de usuario o contraseña' });
    }

    res.json({ user: usuario, ok: true, msg: 'Se ha iniciado sesión correctamente' });
};

const cargarUsuarios = (req, res) => {
    try {
        const json = req.body;

    for (const user of json) {
        listaUsuarios.push(new Usuario(user.carnet, user.nombres, user.apellidos, user.genero, user.facultad, user.carrera, user.correo, user.password))
    }
//GUARDAR LOS DATOS EN EL ARCHIVO JSON
    fs.writeFileSync(usuariosFilePath, JSON.stringify(listaUsuarios, null, 2));

    res.json({msg: "La carga de usuarios fue realizada correctamente"})
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
        res.status(500).json({ msg: 'Error interno del servidor al cargar usuarios' });
    }
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

    const UsuariosData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));

    const posicionUsuario = UsuariosData.findIndex(user => user.carnet === parseInt(carnet))

    if (posicionUsuario === -1) {
        return res.json({msg: 'El usuario no existe'})
    }

    const usuariosActualizados = UsuariosData[posicionUsuario];
    usuariosActualizados.setNombres(nombres);
    usuariosActualizados.setApellidos(apellidos);
    usuariosActualizados.setGenero(genero);
    usuariosActualizados.setFacultad(facultad);
    usuariosActualizados.setCarrera(carrera);
    usuariosActualizados.setCorreo(correo);
    usuariosActualizados.setPassword(password);

    fs.writeSync(usuariosFilePath, JSON.stringify(UsuariosData, null, 2));
    
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
