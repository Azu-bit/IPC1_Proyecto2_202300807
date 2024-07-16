import axios from "axios"
import { useEffect, useState } from "react"
import Nav from "./Nav"
import M from "materialize-css"

const Visualizacion = () => {
    const [publicacion, setPublicacion] = useState([]);
    const [currentpublicacion, setCurrentPublicacion] = useState(null)

    const handleGePublicaciones = () => {
        axios.get('http://localhost:3000/verPublicaciones', {})
        .then(response => {
            console.log(response.data)
            setPublicacion(response.data)
        }).catch(error => console.log(error))
    }

    const handleViewPublicacion = (publicaciones) => {
        setCurrentPublicacion(publicaciones);
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems)
        instances[0].open();
    }

    useEffect(() => {
        handleGePublicaciones()
    }, [])

    return (
        <>
            <Nav/>
                <div className="content-container" style={{padding: '45px 20px', marginTop: '10px'}}>
                    <table className="striped">
                        <thead>
                            <tr>
                                <td>Codigo</td>
                                <td>Descripcion</td>
                                <td>Categoria</td>
                                <td>Anonimo</td>
                                <td>Eliminar</td>
                                <td>Ver</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                publicacion.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.codigo}</td>
                                            <td>{item.descripcion}</td>
                                            <td>{item.categoria}</td>
                                            <td>{item.anonimo}</td>
                                            <td><button>Eliminar</button></td>
                                            <td><button data-target="modal1" className="btn modal-trigger" onClick={() => handleViewPublicacion(item)}>Ver</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div id="modals" className="modal">
                    <div className="modal-content">
                        {currentpublicacion && (
                            <div>
                                <h4>Publicacion</h4>
                                <p>Codigo: {currentpublicacion.codigo}</p>
                                <p>Descripcion: {currentpublicacion.descripcion}</p>
                                <p>Categoria: {currentpublicacion.categoria}</p>
                                <p>Anonimo: {currentpublicacion.anonimo}</p>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    </div>
                </div>
        </>
    )
}

export default Visualizacion;