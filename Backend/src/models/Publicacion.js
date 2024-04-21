class Publicacion {
    
    static contador = 1;

    constructor(codigo, nombres, facultad, carrera, descripcion, imagen) {
        this.idPublicacion = Publicacion.contador++;
        this.codigo = codigo;
        this.nombres = nombres;
        this.facultad = facultad;
        this.carrera = carrera;
        this.descripcion = descripcion;
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

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
}

module.exports = {
    Publicacion
}
