import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <nav className="nav-extend">
            <div className="nav-wrapper" style={{background: '#ef9a9a', display: 'flex', justifyContent: 'center'}}>
                <a href="#" className="brand-logo">Administrador</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
            </div>
            <div className="nav-content" style={{background: '#ef9a9a'}}>
                <ul className="tabs tabs-transparent">
                    <li><Link to={'/admin/usuarios'} style={{fontFamily: 'serif', fontSize: '20px'}}>Carga Masiva</Link></li>
                    <li><Link to={'/admin-tabla'} style={{fontFamily: 'serif', fontSize: '20px'}}>Visualizacion de Datos</Link></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;