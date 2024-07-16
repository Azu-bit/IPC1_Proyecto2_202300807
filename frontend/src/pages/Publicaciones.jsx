import { useEffect, useState } from "react"
import Publicacion from "./Publicacion"
import axios from "axios"
import Navigation from "./NavBar"


const Publicaciones = () => {

    const [publicaciones, setPublicaciones] = useState([])
    const [usuario, setUsuario] = useState({});

    const handleObtenerPublicaciones = () => {
        axios.get('http://localhost:3000/verPublicaciones', {})
        .then(response => {
            console.log(response.data)
            setPublicaciones(response.data)
        }).catch(error => console.log(error))
    };

    useEffect(() => {
        handleObtenerPublicaciones();
        const usuarioData = JSON.parse(localStorage.getItem("usuario"));
        setUsuario(usuarioData);
    }, [])

    return (
        <>
        <Navigation/>
            {publicaciones.map((publicacion, index) => {
                return (
                    
                        <Publicacion
                            key={index}
                            codigo={usuario.carnet}
                            nombres={publicacion.anonimo === "true" ? "Usuario Anónimo" : usuario.nombres}
                            apellidos={publicacion.anonimo == "true" ? "" : usuario.apellidos}
                            facultad={publicacion.anonimo === "true" ? "" : `(Facultad de ${usuario.facultad})`}
                            carrera={publicacion.anonimo === "true" ? "Universidad de San Carlos de Guatemala" : usuario.carrera}
                            categoria={publicacion.categoria}
                            descripcion={publicacion.descripcion}
                            imagen={publicacion.imagen}
                        />
                      
                )
            })}
        </>
    )
}

export default Publicaciones;