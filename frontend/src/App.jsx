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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
