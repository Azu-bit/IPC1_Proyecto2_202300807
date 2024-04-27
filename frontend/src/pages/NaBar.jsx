import { Link } from "react-router-dom";

const Navigatio = () => {

    return (
        
            <nav className="nav-extend">
                <div className="nav-wrapper" style={{background: '#ef9a9a', display: 'flex', justifyContent: 'center'}}>
                    <a href="#" className="brand-logo">Carga Masiva</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
                </div>
                <div className="nav-content" style={{background: '#ef9a9a'}}>
                    <ul className="tabs tabs-transparent">
                        <li><Link to={'/admin/usuarios'} style={{fontFamily: 'serif', fontSize: '20px'}}>Usuarios</Link></li>
                        <li><Link to={'/admin'} style={{fontFamily: 'serif', fontSize: '20px'}}>Post</Link></li>
                    </ul>
                </div>
            </nav>
            
        
    );
};

export default Navigatio;