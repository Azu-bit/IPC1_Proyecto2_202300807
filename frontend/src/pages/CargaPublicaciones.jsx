import axios from "axios";
import { useState } from "react";
import Navigatio from "./NaBar";

const CargaPublicaciones = ()  => {

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
        axios.post('http://localhost:3000/carga-publicaciones', jsonData, {
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
                            <td>Codigo</td>
                            <td>Descripcion</td>
                            <td>Categoria</td>
                            <td>Anonimo</td>
                        </tr>
                    </thead>
                    <tbody>
                        {json.map((item, index)=> {
                            return (
                                <tr key={index}>
                                    <td>{item.codigo}</td>
                                    <td>{item.descripcion}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.anonimo}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}   

export default CargaPublicaciones;