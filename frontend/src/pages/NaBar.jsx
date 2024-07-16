import { Link } from "react-router-dom";

const Navigation = () => {

    const handleLogout = () => {
        localStorage.removeItem('usuario')
        window.location.href = '/login'
    }

    return (
        
            <nav className="nav-extend">
                <div className="nav-wrapper" style={{background: '#ef9a9a', display: 'flex', justifyContent: 'center'}}>
                    <a href="#" className="brand-logo">Carga Masiva</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
                </div>
                <div className="nav-content" style={{background: '#ef9a9a'}}>
                    <ul className="tabs tabs-transparent">
                        <li><Link to={'/admin/usuarios'} style={{fontFamily: 'serif', fontSize: '20px'}}>Usuarios</Link></li>
                        <li><Link to={'/admin/post'} style={{fontFamily: 'serif', fontSize: '20px'}}>Post</Link></li>
                    </ul>
                    <ul id="dropdown2" className="dropdown-content" style={{fontFamily: '-moz-initial', fontSize: '22px'}}>
                        <li><a href="#!" onClick={handleLogout} style={{fontFamily: 'serif', color: '#006064', fontSize: '19px'}}>Cerrar Sesion</a></li>
                    </ul>
                </div>
            </nav>
            
        
    );
};

export default Navigation;