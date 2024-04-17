import { useState } from "react";
import Navigation from "./NavBar";

const CrearPublicacion = () => {

    const [imageB64, setimageB64] = useState("")
    const [file, setfile] = useState()

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

    const handleFileImageUpload = (e) => {
        const file = e.target.files[0];
        const base64 = convertToBase64(file);
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
                                <form id="form">
                                    <div className="card-content">
                                        <h1 style={{fontFamily: 'fantasy' , textAlign: 'center', fontSize: '45px'}}>Crear Publicacion</h1>
                                    </div>
                                    <div className="card-content">
                                        <label style={{fontFamily: 'cursive'}}>Describe lo que quieres agregar en tu publicacion</label>
                                        <textarea/>
                                    </div>
                                    <div className="card-content">
                                        <input type="file" onChange={handleFileImageUpload}/>
                                    </div>
                                    <div className="card-action">
                                        <button className="btn waves-effect waves-light indigo darken-4">Crear Publicacion</button>
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