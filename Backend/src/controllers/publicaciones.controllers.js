const {Publicacion} = require('../models/Publicacion')
const {listaPublicaciones} = require('../lists/lists')
const axios = require("axios");
const fs = require('fs');
const publicacionFilePath = 'publicacion.json';


  const crear_publicacion = (req, res) => {
    const {codigo, descripcion, categoria, anonimo, imagen} = req.body;
    let publicacion = new Publicacion(parseInt(codigo), descripcion, categoria, anonimo, imagen);
    
    delete publicacion.id;

    const publicacionData = JSON.parse(fs.readFileSync(publicacionFilePath, 'utf8'));

    publicacionData.push(publicacion)

    fs.writeFileSync(publicacionFilePath, JSON.stringify(publicacionData, null, 2));

    res.json({msg: 'Se creao la publicacion'});

}

const ver_publicaciones = (req, res) => {
//res.json(listaPublicaciones)
    const PublicacionesData = JSON.parse(fs.readFileSync(publicacionFilePath, 'utf8'));
    res.json(PublicacionesData)
}

const cargarPublicacion = (req, res) => {
    try {
        const json = req.body;
        const PublicacionData = JSON.parse(fs.readFileSync(publicacionFilePath, 'utf8'));

        if (!Array.isArray(json)) {
            return res.status(400).json({msg: 'Datos de entrada invalidos'});
        }

        for (const publicacion of json) {
            const existepublicacion = PublicacionData.find(pub => pub.id === publicacion.id);
            if (!existepublicacion) {
                PublicacionData.push(publicacion);
            }
        }

        fs.writeFile(publicacionFilePath, JSON.stringify(PublicacionData, null, 2), (err) => {
            if (err) throw err;
            console.log('Publicaciones cargadas');
        })
        res.json({msg: 'La carga de publicaciones fue realizada correctamente'})
    } catch (error) {
        console.error('Error al cargar publicaciones', error);
        return res.status(500).json({msg: 'Error interno del servidor al cargar publicaciones'});
    }
}

module.exports = {
    crear_publicacion,
    ver_publicaciones,
    cargarPublicacion,
}


