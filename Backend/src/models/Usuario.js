class Usuario {

    constructor(carnet, nombres, apellidos, genero, facultad, carrera, correo, password) {
        this.carnet = carnet;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.facultad = facultad;
        this.carrera = carrera;
        this.correo = correo;
        this.password = password;
    }

    getCarnet() {
        return this.carnet;
    }

    getNombres() {
        return this.nombres;
    }

    setNombres(nombres) {
        this.nombres = nombres;
    }

    getApellidos() {
        return this.apellidos;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    getGenero() {
        return this.genero;
    }

    setGenero(genero) {
        this.genero = genero;
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

    getCorreo() {
        return this.correo;
    }

    setCorreo(correo) {
        this.correo = correo;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }
}

module.exports = {
    Usuario
}