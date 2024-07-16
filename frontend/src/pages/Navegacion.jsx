import { Link } from "react-router-dom";
import M from "materialize-css"
import { useEffect, useState } from "react";

const Navigation = () => {

    const handleLogout = () => {
        localStorage.removeItem('admin')
        window.location.href = '/login'
    }

    useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {});
    }, []);

    return (
        <nav className="nav-extend">
            <div className="nav-wrapper" style={{background: '#ef9a9a', display: 'flex', justifyContent: 'center'}}>
                <a href="#" className="brand-logo">Administrador</a>
                
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
            </div>
            <div className="nav-content" style={{background: '#ef9a9a'}}>
                <ul className="tabs tabs-transparent">
                    <li><Link to={'/admin/usuarios'} style={{fontFamily: 'serif', fontSize: '20px'}}>Carga Masiva</Link></li>
                    <li><Link to={'/viewusers'} style={{fontFamily: 'serif', fontSize: '20px'}}>Visualizacion de Datos</Link></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><button onClick={handleLogout} style={{fontFamily: 'serif', fontSize: '20px'}}>Cerrar sesión</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;