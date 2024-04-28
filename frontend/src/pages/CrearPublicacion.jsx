import { useState } from "react";
import Navigation from "./NavBar";
import axios from "axios";

const CrearPublicacion = () => {

    let usuario = localStorage.getItem('usuario');
    let carnet, nombres, facultad, carrera, password;
    if (usuario) {
        ({carnet,nombres, facultad, carrera, password} =JSON.parse(usuario));
    }

    const [imageB64, setimageB64] = useState("")
    const [file, setFile] = useState()
    

    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [anonimo, setAnonimo] = useState("")

    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value)
    }

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleChangeAnonimo = (e) => {
        setAnonimo(e.target.value)
    }

    const handleRegisterPublicacion = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/crearpublicacion', {
            codigo: carnet,
            nombres: nombres,
            facultad: facultad,
            carrera: carrera,
            descripcion: descripcion,
            categoria: categoria,
            anonimo: anonimo,
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
                                <div className="content">
                                    <div className="col s6">  
                                        <label style={{fontSize: '16px', fontFamily: '-moz-initial'}}>Categorias</label>
                                        <select className="browser-default" onChange={handleChangeCategoria}>
                                            <option value="" disabled defaultValue>Selecciona una opcion</option>
                                            <option value="1">Anuncio Importante</option>
                                            <option value="2">Divertido</option>
                                            <option value="3">Academico</option>
                                            <option value="4">Variedad</option>
                                        </select>
                                    </div> 
                                    </div>
                                <div className="content"  style={{padding: '2px 40px', marginTop: '45px'}}>
                                </div>
                                <div className="card-content"  style={{padding: '2px 40px', marginTop: '45px'}}>
                                    <div className="col s12 center-align">
                                        <label>¿Quieres publicarlo de forma anónima?</label>
                                        <div className="switch">
                                            <label>
                                                False
                                                <input type="checkbox" onChange={handleChangeAnonimo}/>
                                                <span className="lever"></span>
                                                True
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="content"  style={{padding: '20px 40px', marginTop: '45px'}}>
                                <input type="file" onChange={handleFileImageUpload} />
                                <i className="material-icons left">cloud</i>
                                </div>
                                
                                <div className="card-action row center-align">
                                    <button className="btn waves-effect waves-light indigo darken-4" type="submit" style={{margin: '1px 50px' }}>Crear Publicación</button>
                                    <button className="btn waves-effect waves-light indigo darken-4" type="submit">Cancelar</button>
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