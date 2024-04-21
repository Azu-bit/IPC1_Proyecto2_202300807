import { useEffect, useState } from "react"
import Publicacion from "./Publicacion"
import axios from "axios"
import Navigation from "./NavBar"


const Publicaciones = () => {

    const [publicaciones, setPublicaciones] = useState([])

    const handleObtenerPublicaciones = () => {
        axios.get('http://localhost:3000/verPublicaciones', {})
        .then(response => {
            console.log(response.data)
            setPublicaciones(response.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        handleObtenerPublicaciones()
    }, [])

    return (
        <>
        <Navigation/>
            {publicaciones.map(publicacion => {
                return (
                    <>
                        <Publicacion
                            key={publicacion.idPublicacion}
                            idPublicacion={publicacion.idPublicacion}
                            codigo={publicacion.codigo}
                            nombre={publicacion.nombre}
                            facultad={publicacion.facultad}
                            carrera={publicacion.carrera}
                            descripcion={publicacion.descripcion}
                            imagen={publicacion.imagen}
                        />
                    </>  
                )
            })}
        </>
    )
}

export default Publicaciones;