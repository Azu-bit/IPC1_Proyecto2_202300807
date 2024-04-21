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
            <Route path={'/admin'} element={<Admin/>}/>
            <Route path={'/admin-tabla'} element={<AdminTabla/>}/>
            <Route path={'/grafica-pie'} element={<GraficarPie/>}/>
            <Route path={'/grafica-barras'} element={<GraficaBarras/>}/>
            <Route path={'/editar'} element={<EditarUsuario/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
