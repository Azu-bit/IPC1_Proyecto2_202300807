import { Link } from "react-router-dom";


const Navigation = () => {

    const handleLogout = () => {
        localStorage.removeItem('usuario')
        window.location.href = '/login'
    }

    return (
        <>
            <nav className="light-blue darken-3">
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={'/crear-publicacion'} style={{fontFamily: 'serif'}}>Crear Publicacion</Link></li>
                        <li><Link to={'/publicaciones'} style={{fontFamily: 'serif'}}>Ver Publicaciones</Link></li>
                        <li><button onClick={handleLogout} style={{fontFamily: 'serif'}}>Cerrar Sesion</button></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation;