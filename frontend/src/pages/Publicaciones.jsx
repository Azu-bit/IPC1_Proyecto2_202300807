import { useEffect, useState } from "react"
import Publicacion from "./Publicacion"
import axios from "axios"
import Navigation from "./NavBar"


const Publicaciones = () => {

    const [publicaciones, setPublicaciones] = useState([])

    const handleObtenerPublicaciones = () => {
        axios.get('http://localhost:3000/verPublicacion', {})
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
                            idPublicacion={publicacion.idPublicacion}
                            codigo={publicacion.codigo}
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