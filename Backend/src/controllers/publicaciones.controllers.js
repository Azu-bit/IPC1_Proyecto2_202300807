const {Publicaciones} = require('../models/Publicacion')
const {listaPublicaciones} = require('../lists/lists')

const crear_publicacion = (req, res) => {
    const {codigo, descripcion, imagen} = req.body;

    let publicacion = new Publicacion(codigo, descripcion, imagen);
    listaPublicaciones.push(publicacion)

    res.json({msg: 'Se creo la publicacion'})
}

const ver_publicacion = (req, res) => {
    res.json(listaPublicaciones)
}

module.exports = {
    crear_publicacion,
    ver_publicacion
}