const {Usuario} = require('../models/Usuario')
const {listaUsuarios} = require('../lists/lists')
const fs = require('fs');
const { getEnabledCategories } = require('trace_events');
const usuariosFilePath = 'usuario.json';

const registrarUsuarios = (req, res) => {

    const { carnet, nombres, apellidos, genero, facultad, carrera, correo, password } = req.body;
    let usuario = new Usuario(parseInt(carnet), nombres, apellidos, genero, facultad, carrera, correo, password);

    const UsuariosData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));
    // Verificar si el usuario ya existe

    const existeUsuario = UsuariosData.find(user => user.carnet === parseInt(carnet));

    if (existeUsuario) {
        return res.json({ msg: 'El usuario ya existe' });
    }

    UsuariosData.push(usuario);

    // Guardar los datos actualizados en el archivo JSON
    fs.writeFileSync(usuariosFilePath, JSON.stringify(UsuariosData, null, 2));

    res.json({ msg: 'El usuario ha sido guardado correctamente' });


};

const admin = {
    carnet: 12024,
    nombres: 'Federico',
    apellidos: 'Zet',
    genero: 'M',
    facultad: 'Ingenieria',
    carrera: 'Ingenieria en Ciencias y Sistemas', 
    correo: 'ipc11s2024@email.com',
    password:'@dminIPC1'
};

const verUsuarios = (req, res) => {
    const UsuariosData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));
    res.json(UsuariosData);
};

const loginUsuarios = (req, res) => {

    const { carnet, password } = req.body;

    if (carnet == admin.carnet && password == admin.password) {
        return res.json({user: admin, ok: true, msg: 'Se ha iniciado sesion correctamente'});
    }

    const UsuariosData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));

    const usuario = UsuariosData.find(user => user.carnet === parseInt(carnet) && user.password === password);

    if (!usuario) {
        return res.json({ ok: false, msg: 'Error de usuario o contraseña' });
    }

    res.json({msg: 'Calificacion'});

//res.json({ user: usuario, ok: true, msg: 'Se ha iniciado sesión correctamente' });
};

const cargarUsuarios = (req, res) => {
    try {
        const json = req.body;
        const UsuariosData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));

        if (!Array.isArray(json)) {
            return res.status(400).json({msg: 'Datos de entrada invalidos'});
        }

        for (const user of json) {
            const existeUsuario = UsuariosData.find(usuario => usuario.carnet === user.carnet);
            if (!existeUsuario) {
                UsuariosData.push(new Usuario(user.carnet, user.nombres, user.apellidos, user.genero, user.facultad, user.carrera, user.correo, user.password));
            }
        }
//GUARDAR LOS DATOS EN EL ARCHIVO JSON
        fs.writeFileSync(usuariosFilePath, JSON.stringify(UsuariosData, null, 2));
        
        res.json({msg: "La carga de usuarios fue realizada correctamente"})
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
        res.status(500).json({ msg: 'Error interno del servidor al cargar usuarios' });
    }
}

const eliminar_usuario = (req, res) => {
    const carnet = req.params.carnet;

    const UsuarioData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));

    const posicionUsuario = UsuarioData.findIndex(user => user.carnet === parseInt(carnet))

    if (posicionUsuario === -1) {
        return res.json({msg: "El usuario no existe"})
    }
    UsuarioData.splice(posicionUsuario, 1)

    fs.writeFileSync(usuariosFilePath, JSON.stringify(UsuarioData, null, 2));

    res.json({msg: "El usuario ha sido eliminado"})
}

const editar_usuario = (req, res) => {
    const {carnet, nombres, apellidos, genero, facultad, carrera, correo, password} = req.body;

    const UsuarioData = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf8'));

    const posicionUsuario = UsuarioData.findIndex(user => user.carnet === parseInt(carnet))

    if (posicionUsuario === -1) {
        return res.json({msg: 'El usuario no existe'})
    }

    const usuariosActualizados = UsuarioData[posicionUsuario];

    usuariosActualizados.carnet = carnet;
    usuariosActualizados.nombres = nombres;
    usuariosActualizados.apellidos = apellidos;
    usuariosActualizados.genero = genero;
    usuariosActualizados.facultad = facultad;
    usuariosActualizados.carrera = carrera;
    usuariosActualizados.correo = correo;
    usuariosActualizados.password = password;

    fs.writeFileSync(usuariosFilePath, JSON.stringify(UsuarioData, null, 2));
    
    res.json({msg: 'El usuario ha sido editado correctamente'})
}

module.exports = {
    registrarUsuarios,
    verUsuarios,
    loginUsuarios,
    cargarUsuarios,
    eliminar_usuario,
    editar_usuario,
}
