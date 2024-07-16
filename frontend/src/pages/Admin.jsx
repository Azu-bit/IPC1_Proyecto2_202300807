import axios from "axios";
import { useState } from "react";
import Navigatio from "./NaBar";


const Admin = () => {

    const [json, setJson] = useState([]);

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
        axios.post('http://localhost:3000/carga-usuarios', jsonData, {
            headers: {
                'Content-Type:': 'application/json'
            }
        }) 
        .then(response => {
            alert(response.data.msg)
        }).catch(error => {console.log(error)})
    }

    return (
        <>
            <Navigatio/>

            <div className="content-container" style={{padding: '45px 20px', marginTop: '10px'}}>
                <input type="file" onChange={handleFileJSON}/>            
            
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
                            <td>Contraseña</td>
                        </tr>
                    </thead>
                    <tbody>
                        {json.map((item, index)=> {
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
                                    </tr>
                                
                            )
                        })}
                    </tbody>
                </table>
            </div>
            
            
        </>
    )
}

export default Admin;