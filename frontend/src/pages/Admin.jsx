import axios from "axios";
import { useState } from "react";


const Admin = () => {

    const [json, setJson] = useState([])

    const handleFileJSON = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = (event) => {
            const jsonData = JSON.parse(event.target.result)
            setJson(jsonData)
            handleSaveUsers(jsonData)
        }
    }

    const handleSaveUsers = (jsonData) => {
        axios.post('http://localhost:3000/carga-usuarios', jsonData)
        .then(response => {
            alert(response.data.msg)
        }).catch(error => {console.log(error)})
    }

    return (
        <>
            <input type="file" onChange={handleFileJSON}/>

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
                        <td>Contraseña</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        json.map(item => {
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
                                        <td>{item.contraseña}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Admin;