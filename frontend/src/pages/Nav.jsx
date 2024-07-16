import { Link } from "react-router-dom";

const Nav = () => {

    const handleLogout = () => {
        localStorage.removeItem('usuario')
        window.location.href = '/login'
    }

    return (

        <nav className="nav-extend">
            <div className="nav-wrapper" style={{background: '#ef9a9a', display: 'flex', justifyContent: 'center'}}>
                <a href="#" className="brand-logo">Usuarios y Publicaciones de Usocial</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
            </div>
            <div className="nav-content" style={{background: '#ef9a9a'}}>
                <ul className="tabs tabs-transparent">
                    <li><Link to={'/viewusers'} style={{fontFamily: 'serif', fontSize: '20px'}}>Usuarios</Link></li>
                    <li><Link to={'/viewpost'} style={{fontFamily: 'serif', fontSize: '20px'}}>Publicaciones</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;