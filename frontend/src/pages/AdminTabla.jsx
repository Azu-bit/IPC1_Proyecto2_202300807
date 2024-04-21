import axios from "axios"
import { useEffect, useState } from "react"

const AdminTabla = () => {

    const [usuarios, setUsuarios] = useState([])
    
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

    useEffect(() => {
        handleGetUsers()
    }, [])

    return (
        <>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <td>Carnet</td>
                            <td>Nombres</td>
                            <td>Apellidos</td>
                            <td>Genero</td>
                            <td>Facultad</td>
                            <td>Carrera</td>
                            <td>Correo</td>
                            <td>Eliminar</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map(item => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.carnet}</td>
                                            <td>{item.nombres}</td>
                                            <td>{item.apellidos}</td>
                                            <td>{item.genero}</td>
                                            <td>{item.facultad}</td>
                                            <td>{item.carrera}</td>
                                            <td>{item.correo}</td>
                                            <td><button onClick={() => handleDeleteUser(item.carnet)}>Eliminar</button></td>
                                            <td><button>Ver</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminTabla;