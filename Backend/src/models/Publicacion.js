class Publicacion {
    
    static contador = 1;

    constructor(codigo, descripcion, imagen) {
        this.idPublicacion = Publicacion.contador++;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    getCodigo() {
        return this.codigo;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }
}

module.exports = {
    Publicacion
}
