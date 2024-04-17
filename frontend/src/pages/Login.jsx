import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [codigo, setCodigo] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeCodigo = (e) => {
        setCodigo(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/login', {
            carnet: codigo,
            password: password
        }).then(response => {
            if (response.data.ok === true) {
                alert(response.data.msg)
                window.location.href = '/crear-publicacion'
                localStorage.setItem('usuario' , JSON.stringify(response.data.user))
            } else {
                alert(response.data.msg)
            }
        })
    }
    

    return (
        <>
            <div className="container green accent-1"
                style={{padding: '2px 40px', marginTop: '45px'}}>
                
                <h1 style={{fontFamily: '-moz-initial' , textAlign: 'center'}}>USocial - Inicio Sesion</h1>

                <div className="row">
                    <div className="col s12">
                        <div className="card" style={{padding: '15px'}}>
                            <form id="form" onSubmit={handleChangeLogin}>
                                <div className="card-content">
                                    <label style={{fontSize: '22px'}}>Numero de Carnet/Codigo USAC</label>
                                    <input type="text" style={{fontSize: '15px'}}
                                    placeholder="Ingrese su nombre de usuario" onChange={handleChangeCodigo}/>
                                </div>
                                <div className="card-content">
                                    <label style={{fontSize: '22px'}}>Contraseña</label>
                                    <input type="password" style={{fontSize: '15px'}}
                                    placeholder="Ingrese su contraseña" onChange={handleChangePassword}/>
                                </div>
                                <div className="card-action" style={{textAlign: 'center'}}>
                                    <button className="btn waves-effect waves-light blue-grey darken-4" 
                                    style={{fontSize: '18px'}} type="submit">Iniciar Sesion</button>
                                </div>
                                </form>
                                <p style={{fontFamily: 'cursive' , textAlign: 'center'}}>¿Acaso no tienes cuenta? 
                                <a href="/registro"><span style={{color: 'blue', textDecoration: 'underline'}}>Registrate</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;