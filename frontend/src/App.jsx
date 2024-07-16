import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login'
import Publicaciones from './pages/Publicaciones';
import CrearPublicacion from './pages/CrearPublicacion';
import Registro from './pages/Registro';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Admin from './pages/Admin';
import AdminTabla from './pages/AdminTabla';
import GraficarPie from './pages/GraficarPie';
import GraficaBarras from './pages/GraficaBarras';
import EditarUsuario from './pages/EditarUsuario';
import CargaPublicaciones from './pages/CargaPublicaciones';
import Tablas from './pages/Tablas';
import Administracion from './pages/Administracion';
import Visualizacion from './pages/Visualizacion';


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={'/login'} element={<Login/>} />
            <Route path={'/publicaciones'} element={<Publicaciones/>} />
            <Route path={'/crear-publicacion'} element={<CrearPublicacion/>}/>
            <Route path={'/registro'} element={<Registro/>}/>
            <Route path={'/admin/usuarios'} element={<Admin/>}/>
            <Route path={'/viewusers'} element={<AdminTabla/>}/>
            <Route path={'/grafica-pie'} element={<GraficarPie/>}/>
            <Route path={'/grafica-barras'} element={<GraficaBarras/>}/>
            <Route path={'/editar/:carnet'} element={<EditarUsuario/>}/>
            <Route path={'/admin/post'} element={<CargaPublicaciones/>}/>
            <Route path={'/viewpost'} element={<Visualizacion/>}/>
            <Route path={'/admin'} element={<Administracion/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
