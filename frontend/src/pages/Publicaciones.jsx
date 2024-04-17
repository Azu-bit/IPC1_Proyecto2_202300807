import Navigation from "./NavBar";



const Publicaciones = () => {

    return (
        <>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col s12 m6 offset-m2 mt-4">
                    <div className="card">
                        <div className="card-image">
                            <img src=""/>
                        </div>
                        <div className="card-content">
                            <p>Publicaciones de la Usac</p>
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

export default Publicaciones;