import { useState } from "react";
import Navigation from "./NavBar";
import axios from "axios";

const CrearPublicacion = () => {

    const {carnet, nombres, apellidos, genero, facultad, carrera, correo, password} = JSON.parse(localStorage.getItem('usuario'))

    const [imageB64, setimageB64] = useState("")
    const [file, setfile] = useState()

    const [descripcion, setDescripcion] = useState("")

    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value)
    }

    const handleRegisterPublicacion = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/crearpublicacion', {
            codigo: carnet,
            descripcion: descripcion,
            imagen: imageB64
        }).then(response => {
            alert(response.data.msg)
        }).catch(error => {console.log(error)})
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result.split(',')[1]);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
    }

    const handleFileImageUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setimageB64(base64)
        console.log(base64)
    }

    return (
        <>
            <Navigation/>
            <div className="container deep-purple lighten-4" 
                style={{padding: '24px 30px', marginTop: '30px'}}>
                    <div className="row">
                        <div className="col s12">
                            <div className="card" style={{padding: '10px 20px'}}>
                                <form id="form" onSubmit={handleRegisterPublicacion}>
                                    <div className="card-content">
                                        <h1 style={{fontFamily: 'fantasy' , textAlign: 'center', fontSize: '45px'}}>Crear Publicacion</h1>
                                </div>
                                <div className="card-content">
                                    <label style={{fontFamily: 'cursive'}}>Describe lo que quieres agregar en tu publicacion</label>
                                    <textarea onChange={handleChangeDescripcion}/>
                                </div>
                                <div className="card-content">
                                    <input type="file" onChange={handleFileImageUpload}/>
                                </div>
                                <div className="card-action">
                                    <button className="btn waves-effect waves-light indigo darken-4" type="submit">Crear Publicacion</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )  

}

export default CrearPublicacion;