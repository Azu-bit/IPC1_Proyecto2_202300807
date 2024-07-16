import axios from "axios";
import Navigation from "./NavBar";
import { useEffect, useState } from "react";

const Publicacion = (props) => {
    
    const imagen = props.imagen 
        ? "data:image/png;base64," + props.imagen 
        : null;

    const coloresCategorias = {
        "Anuncio importante": "#ef9a9a",
        "Divertido": "#e1bee7",
        "Academico" : "#c8e6c9",
        "Variedad": "#f0f4c3 "
    }

    const estiloCategoria = {
        color: '#263238',
        borderRadius: '20px',
        padding: '8px',
        display: 'inline-block',
        fontSize: '0.9em',
        backgroundColor: coloresCategorias[props.categoria] || "#808080",
        fontFamily: 'Arial',
        textAlign: 'right',
    };

    const estiloContenedor = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    return (
        <>
        <div className="card-container">
        <div className="row">
                <div className="col s12 m6 offset-m2 mt-4">
                    <div className="card">
                    
                        <div className="card-content">
                        <div style={estiloContenedor}>
                            <span></span>
                            <span style={estiloCategoria}>{props.categoria}</span>
                        </div>
                        <div>
                            <span style={{fontSize: '12px'}}>Publicado el {(props.fechaPublicacion)}</span>
                        </div>
                        <div>
                            <span style={{fontSize: '15px', fontFamily: 'serif'}}>{props.nombres === "true" || (!props.nombres && !props.apellidos) ? "Usuario Anonimo" : `${props.nombres} ${props.apellidos}` }</span>
                        </div>
                        <div>
                            <span style={{fontSize: '12px'}}>{props.anonimo === "true" || (!props.carrera && !props.facultad) ? "Universidad de" : `${props.carrera} ${props.facultad}`}</span>
                        </div>
                        <div>
                            <span style={{fontFamily: 'initial', fontSize: '20px'}}>{props.descripcion}</span>
                        </div>
                        </div>
                        <div className="card-image">
                            {imagen 
                                ? <img src={imagen}/> 
                                : <p></p> // Aquí puedes manejar el caso cuando la imagen es undefined
                            }
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


