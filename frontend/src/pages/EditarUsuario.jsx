import axios from 'axios'
import { useState } from 'react'

const EditarUsuario = () => {

    let usuario = localStorage.getItem('usuario');
    let carnet, nombres, apellidos, genero, facultad, carrera, correo, password;
    if(usuario) {
        ({carnet, nombres, apellidos, genero, facultad, carrera, correo, password} = JSON.parse(usuario));
    }

    const getInitialValue = (key) => {
        let usuario = localStorage.getItem('usuario');
        return usuario ? JSON.parse(usuario)[key] : '';
    }
    
    const [nombre, setNombre] = useState(() => getInitialValue('nombres'));
    const [apellido, setApellido] = useState(() => getInitialValue('apellidos'));
    const [gener, setGener] = useState(() => getInitialValue('genero'));
    const [corre, setCorre] = useState(() => getInitialValue('correo'));
    const [faculta, setFaculta] = useState(() => getInitialValue('facultad'));
    const [carrer, setCarrer] = useState(() => getInitialValue('carrera'));
    const [paswo, setPaswo] = useState(() => getInitialValue('password'));
    
    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeApellido = (e) => {
        setApellido(e.target.value)
    }

    const handleChangeGener = (e) => {
        setGener(e.target.value)
    }

    const handleChangeCorre = (e) => {
        setCorre(e.target.value)
    }

    const handleChangeFaculta = (e) => {
        setFaculta(e.target.value)
    }

    const handleChangeCarrer = (e) => {
        setCarrer(e.target.value)
    }

    const handleChangePaswor = (e) => {
        setPaswo(e.target.value)
    }

    const handleEditarUser = async (e) => {
        e.preventDefault()
        
        console.log('Cargando...')

        try {
            const response = await axios.put('http://localhost:3000/editar-usuario', {
                carnet: carnet,
                nombre: nombre,
                apellidos: apellido,
                genero: gener,
                correo: corre,
                facultad: faculta,
                carrera: carrer,
                password: paswo
            });

            if (response.status >= 200 && response.status < 300) {
                alert(response.data.msg)
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);

            }
        } catch (error) {
            console.error('Error al editar el perfil', error);
            alert('Error al editar el perfil. Por favor, intenta de nuevo.');
        } finally {
            console.log('Carga completa')
        }
    };

    return (
        <>
            <div className="container orange lighten-5"
                style={{padding: '2px 40px', marginTop: '45px'}}>
                
                <h1 style={{fontFamily: 'fantasy', textAlign: 'center', fontSize: '45px'}}>Editar Perfil</h1>
              
                <div className="row">
                    <div className="col 12">
                        <div className="card" style={{padding: '15px'}}>
                            <form id="form" onSubmit={handleEditarUser}>
                                <div className="row" >
                                    <div className="col s6">
                                        <div className="card-content">
                                            <label style={{fontSize: '20px'}}>Nombres</label>
                                            <input type="text" style={{fontSize: '15px'}} onChange={handleChangeNombre}
                                            placeholder="Ingrese sus nombres"/>
                                        </div>
                                    </div>
                                <div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '20px'}}>Apellidos</label>
                                        <input type="text" onChange={handleChangeApellido}
                                        placeholder="Ingrese sus apellidos"/>        
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '20px'}}>Genero</label>
                                        <input type="text" onChange={handleChangeGener}
                                        placeholder="Ingrese su genero (M/F)"/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className='card-content'>
                                        <label style={{fontSize: '20px'}}>Correo Electronico</label>
                                        <input type='text' onChange={handleChangeCorre}
                                        placeholder='Ingrese su correo electronico'/>
                                    </div>
                                </div>
                                <div className='col s6'>
                                    <div className='card-content'>
                                        <label style={{fontSize: '20px'}}>Facultad</label>
                                        <input type='text' onChange={handleChangeFaculta}
                                        placeholder='Ingrese su facultad'/>
                                    </div>
                                </div>
                                <div className='col s6'>
                                    <div className='card-content'>
                                        <label style={{fontSize: '20px'}}>Carrera</label>
                                        <input type='text' onChange={handleChangeCarrer}
                                        placeholder='Incgrese su carrera'/>
                                    </div>
                                </div>

                                <div className="col s6">
                                    <div className="card-content">
                                        <label style={{fontSize: '20px'}}>Contraseña</label>
                                        <input type="password" onChange={handleChangePaswor}
                                        placeholder="Ingrese su nueva constraseña"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action" style={{textAlign: 'center'}}>
                                <button className="btn waves-effect waves-ligth blue"
                                style={{fontSize: '18px'}} type="submit">Editar</button>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>           
            </div>
        </>
    )
}

export default EditarUsuario;