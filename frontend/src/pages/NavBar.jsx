import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css"

const Navigation = () => {

    const handleLogout = () => {
        localStorage.removeItem('usuario')
        window.location.href = '/login'
    }

    const handleEditProfile = () => {
        let usuario = localStorage.getItem('usuario');
        if (usuario) {
            window.location.href = '/editar'
        } else {
            alert('Codigo o Carnet no son correctos o no se han encontrado')
        }
    }

    useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {});
    }, []);

    return (
        <>
            <nav className="light-blue darken-3">
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={'/crear-publicacion'} style={{fontFamily: 'serif'}}>Crear Publicacion</Link></li>
                        <li><Link to={'/publicaciones'} style={{fontFamily: 'serif'}}>Ver Publicaciones</Link></li>
                        <li><a className="btn dropdown-trigger" href="#!" data-target="dropdown2" style={{backgroundColor: '#01579b ', fontSize: '18px' }}>Opciones<i className="material-icons right" style={{lineHeight: 'inherit'}}>arrow_drop_down</i></a></li>
                    </ul>
                    <ul id="dropdown2" className="dropdown-content" style={{fontFamily: '-moz-initial', fontSize: '22px'}}>
                    
                        <li><a href="#!" onClick={handleEditProfile} style={{fontFamily: 'serif', color: '#006064', fontSize: '19px'}}>Editar Perfil</a></li>
                    
                        <li><a href="#!" onClick={handleLogout} style={{fontFamily: 'serif', color: '#006064', fontSize: '19px'}}>Cerrar Sesion</a></li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navigation;
