import axios from "axios";
import Navigation from "./NavBar";
import { useEffect, useState } from "react";


const Publicacion = (props) => {
    
    return (
        <>
        <div className="container">
        <div className="row">
                <div className="col s12 m6 offset-m2 mt-4">
                    <div className="card">
                        <div className="card-image">
                            <img src={"data.image/png; base64," + props.imagen}/>
                        </div>
                        <div className="card-content">
                            <p>Carnet: {props.codigo}</p>
                            <p>Nombres: {props.nombres}</p>
                            <p>Facultad: {props.facultad}</p>
                            <p>Carrera: {props.carrera}</p>
                            <p>{props.descripcion}</p>
                        </div>
                        <div className="card-content">
                            <button className="btn waves-effect waves-light cyan darken-3">Comentarios</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Publicacion;