import { useEffect, useState } from "react";
import Navigation from "./NavBar";
import axios from "axios";

const CrearPublicacion = () => {

    const [imageB64, setImageB64] = useState("");
    const [file, setFile] = useState()

    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [anonimo, setAnonimo] = useState(false)

    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value)
    }

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleChangeAnonimo = (e) => {
        setAnonimo(e.target.checked)
    }

    const handleRegisterPublicacion = async (e) => {
        e.preventDefault();
        try {
            const usuarioData = JSON.parse(localStorage.getItem("usuario"));
            const fechaPublicacion = new Date().toISOString;

            let publicacion = {
//codigo: usuarioData.carnet,
                descripcion: descripcion,
                categoria: categoria,
                anonimo: anonimo.toString(),
                imagen: imageB64,
                fechaPublicacion: fechaPublicacion
            };

            if (!anonimo) {
                publicacion = {
                    ...publicacion,
                    codigo: usuarioData.carnet,
                    nombres: usuarioData.nombres,
                    facultad: usuarioData.facultad,
                    carrera: usuarioData.carrera,
                };
            } else {
                publicacion = {
                    ...publicacion,
                    nombres: "Usuario Anonimo",
                    facultad: "Universidad",
                    carrera: "Universidad",
                };
            }
            axios.post('http://localhost:3000/crearpublicacion', publicacion).then(response => {
                alert(response.data.msg);
                localStorage.setItem('publicacion', JSON.stringify(publicacion))
    
            }).catch(error => {
                console.error("Error al crear una publicacion", error);
            });
        } catch (error) {
            console.error("Error al crear una publicación", error);
        }
    };

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
        setImageB64(base64)
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
                                            <option value="Anuncio importante">Anuncio Importante</option>
                                            <option value="Divertido">Divertido</option>
                                            <option value="Academico">Academico</option>
                                            <option value="Variedad">Variedad</option>
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
                                                <input type="checkbox" checked={anonimo} onChange={handleChangeAnonimo}/>
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