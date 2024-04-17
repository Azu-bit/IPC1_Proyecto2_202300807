import { useState } from "react";
import axios from 'axios';

const Registro = () => {

    const [codigo, setCodigo] = useState('')
    const [nombres, setNombre] = useState('')
    const [apellidos, setApellido] = useState('')
    const [genero, setGenero] = useState('')
    const [correo, setCorreo] = useState('')
    const [facultad, setFacultad] = useState('')
    const [carrera, setCarrera] = useState('')
    const [password, setPassword] = useState('')
    const [confirmarpassword, setConfirmarPassword] = useState('')

    const handleChangeCodigo = (e) => {
        setCodigo(e.target.value)
    }

    const handleChangeNombres = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeApellidos = (e) => {
        setApellido(e.target.value)
    }

    const handleChangeGenero = (e) => {
        setGenero(e.target.value)
    }

    const handleChangeCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const handleChangeFacultad = (e) => {
        setFacultad(e.target.value)
    }

    const handleChangeCarrera = (e) => {
        setCarrera(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeConfirmarPassword = (e) => {
        setConfirmarPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/registroUsuarios', {
            carnet: codigo,
            nombres: nombres,
            apellidos: apellidos,
            genero: genero,
            correo: correo,
            facultad: facultad,
            carrera: carrera,
            password: password
        }).then(response => {
            alert(response.data.msg)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <div className="container lime lighten-3"
                style={{padding: '2px 40px', marginTop: '45px'}}>
                
                <h1 style={{fontFamily: 'fantasy' , textAlign: 'center', fontSize: '45px'}}>USocial - Registro</h1>

                <div className="row">
                    <div className="col s12">
                        <div className="card" style={{padding: '15px'}}>
                            <form id="form" onSubmit={handleRegister}>
                                <div className="card-content">
                                    <label style={{fontSize: '21px'}}>Numero de Carnet/Codigo USAC</label>
                                    <input type="text" style={{fontSize: '15px'}}
                                    placeholder="Ingrese su Carnet/Codigo USAC" onChange={handleChangeCodigo}/>
                                </div>
                                <div className="row">
                                    <div className="col s6">             
                                        <div className="card-content">         
                                            <label style={{fontSize: '21px'}}>Nombres</label>
                                            <input type="text" style={{fontSize: '15px'}}
                                            placeholder="Ingrese sus nombres" onChange={handleChangeNombres}/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '21px'}}>Apellidos</label>
                                        <input type="text" style={{fontSize: '15px'}}
                                        placeholder="Ingrese sus apellidos" onChange={handleChangeApellidos}/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '21px'}}>Genero</label>
                                        <input type="text" style={{fontSize: '15px'}}
                                        placeholder="Ingrese su genero (M/F)" onChange={handleChangeGenero}/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '21px'}}>Correo electronico</label>
                                        <input type="text" style={{fontSize: '15px'}}
                                        placeholder="Ingrese su correo electronico" onChange={handleChangeCorreo}/>
                                    </div>
                                </div>
                                <div className="col s6">            
                                    <div className="card-content">
                                        <label style={{fontSize: '21px'}}>Facultad</label>
                                        <input type="text" style={{fontSize: '15px'}}
                                        placeholder="Ingrese su facultad" onChange={handleChangeFacultad}/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '21px'}}>Carrera</label>
                                        <input type="text" style={{fontSize: '15px'}}
                                        placeholder="Ingrese su carrera" onChange={handleChangeCarrera}/>
                                    </div>
                                </div>
                                < div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '21px'}}>Contraseña</label>
                                        <input type="password" style={{fontSize: '15px'}}
                                        placeholder="Ingrese su nueva contraseña" onChange={handleChangePassword}/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '21px'}}>Confirmar Contraseña</label>
                                        <input type="password" style={{fontSize: '15px'}}
                                        placeholder="Confirme su contraseña" onChange={handleChangeConfirmarPassword}/>
                                    </div>
                                </div>
                            </div>
                                <div className="card-action" style={{textAlign: 'center'}}>
                                    <button className="btn waves-effect waves-light lime darken-4" 
                                    style={{fontSize: '20px'}} type="submit">Registrarse</button>
                                </div>
                                </form>
                                <p style={{fontFamily: 'cursive' , textAlign: 'center'}}>¿Acaso ya tienes cuenta? 
                                <a href="/login"><span style={{color: 'blue', textDecoration: 'underline'}}> Inicia Sesion</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registro;