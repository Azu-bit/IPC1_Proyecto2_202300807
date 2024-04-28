class Publicacion {
    
    static contador = 1;

    constructor(codigo, nombres, facultad, carrera, descripcion, categoria, anonimo,imagen) {
        this.idPublicacion = Publicacion.contador++;
        this.codigo = codigo;
        this.nombres = nombres;
        this.facultad = facultad;
        this.carrera = carrera;
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

    getNombre() {
        return this.nombres;
    }

    setNombres(nombres) {
        this.nombres = nombres;
    }

    getFacultad() {
        return this.facultad;
    }

    setFacultad(facultad) {
        this.facultad = facultad;
    }

    getCarrera() {
        return this.carrera;
    }

    setCarrera(carrera) {
        this.carrera = carrera;
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
