class Publicacion {
    
    static contador = 1;

    constructor(codigo, descripcion, categoria, anonimo, imagen) {
//this.idPublicacion = Publicacion.contador++;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.anonimo = anonimo;
        this.imagen = imagen;
    }

    getCodigo() {
        return this.codigo;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }

    getAnonimo() {
        return this.anonimo;
    }

    setAnonimo(anonimo) {
        this.anonimo = anonimo;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
}

module.exports = {
    Publicacion
}
