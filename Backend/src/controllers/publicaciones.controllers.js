const {Publicacion} = require('../models/Publicacion')
const {listaPublicaciones} = require('../lists/lists')
const fs = require('fs');
const publicacionFilePath = 'publicacion.json';
const publicacionesFilePath = 'publicaciones.json'

const crear_publicacion = (publicacion) => {
    try {
        const publicacionesJSON = fs.readFileSync(publicacionFilePath, 'utf8');
        const publicaciones = JSON.parse(publicacionesJSON);

        publicaciones.push(publicacion);

        fs.writeFileSync(publicacionFilePath, JSON.stringify(publicaciones, null, 2));

        return 'Se creo una publicacion';

    } catch (error) {
        console.error('Error al crear una publicacion', error);
        return 'No se pudo crear la publicacion';
    }
};

const crarpublicacion = (publicacion) => {
    try {
        const publicacionesJSON = fs.readFileSync(publicacionesFilePath, 'utf8');
        const publicaciones = JSON.parse(publicacionesJSON);

        publicaciones.puth({
            codigo: publicacion.codigo,
            nombres: publicacion.nombres,
            facultad: publicacion.facultad,
            carrera: publicacion.carrera,
            descripcion: publicacion.descripcion,
            categoria: publicaciones.categoria,
            anonimo: publicaciones.anonimo
        });

        fs.writeFileSync(publicacionesFilePath, JSON.stringify(publicaciones, null, 2));
        return 'Se creo la publicaciones correctamente'
    } catch (error) {
        console.error('Error al crear la publicacion')
    }
}

const ver_publicaciones = (req, res) => {
    res.json(listaPublicaciones)
}

module.exports = {
    crear_publicacion,
    crarpublicacion,
    ver_publicaciones
}