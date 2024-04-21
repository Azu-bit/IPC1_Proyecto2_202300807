const {Publicacion} = require('../models/Publicacion')
const {listaPublicaciones} = require('../lists/lists')

const crear_publicacion = (req, res) => {
    const {codigo, nombres, facultad, carrera, descripcion, imagen} = req.body;

    let publicacion = new Publicacion(codigo, nombres, facultad, carrera, descripcion, imagen);
    listaPublicaciones.push(publicacion)

    res.json({msg: 'Se creo la publicacion'})
}

const ver_publicaciones = (req, res) => {
    res.json(listaPublicaciones)
}

module.exports = {
    crear_publicacion,
    ver_publicaciones
}