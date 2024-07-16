import axios from "axios"
import { useEffect, useState } from "react"
import Nav from "./Nav"
import M from 'materialize-css'

const AdminTabla = () => {

    const [usuarios, setUsuarios] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    const handleGetUsers = () => {
        axios.get('http://localhost:3000/verUsuarios', {})
        .then(response => {
            console.log(response.data)
            setUsuarios(response.data)
        }).catch(error => console.log(error))
    }

    const handleDeleteUser = (carnet) => {
        axios.delete('http://localhost:3000/eliminar-usuario/' + carnet)
        .then(response => {
            alert(response.data.msg)
        }).catch(error => console.log(error))
    }

    const handleViewUser = (user) => {
        setCurrentUser(user);
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
        instances[0].open();
    }

    useEffect(() => {
        handleGetUsers()
    }, [])

    return (
        <>  
        <Nav/>
            <div className="content-container" style={{padding: '45px 20px', marginTop: '10px'}}>
                <table className="striped">
                    <thead>
                        <tr>
                            <td>Carnet</td>
                            <td>Nombres</td>
                            <td>Apellidos</td>
                            <td>Genero</td>
                            <td>Facultad</td>
                            <td>Carrera</td>
                            <td>Correo</td>
                            <td>Password</td>
                            <td>Eliminar</td>
                            <td>Ver</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((item, index) => {
                                return (
                                    
                                        <tr key={index}>
                                            <td>{item.carnet}</td>
                                            <td>{item.nombres}</td>
                                            <td>{item.apellidos}</td>
                                            <td>{item.genero}</td>
                                            <td>{item.facultad}</td>
                                            <td>{item.carrera}</td>
                                            <td>{item.correo}</td>
                                            <td>{item.password}</td>
                                            <td><button onClick={() => handleDeleteUser(item.carnet)}>Eliminar</button></td>
                                            <td><button data-target="modal1" className="btn modal-trigger" onClick={() => handleViewUser(item)}>Ver</button></td>
                                        </tr>
                                    
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    {currentUser && (
                        <div>
                            <h4>{currentUser.nombres} {currentUser.apellidos}</h4>
                            <p>Carnet: {currentUser.carnet}</p>
                            <p>Nombres: {currentUser.nombres}</p>
                            <p>Apellidos: {currentUser.apellidos}</p>
                            <p>Genero: {currentUser.genero}</p>
                            <p>Facultad: {currentUser.facultad}</p>
                            <p>Carrera: {currentUser.carrera}</p>
                            <p>Correo: {currentUser.correo}</p>
                            <p>Password: {currentUser.password}</p>
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

export default AdminTabla;