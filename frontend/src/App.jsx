import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login'
import Publicaciones from './pages/Publicaciones';
import CrearPublicacion from './pages/CrearPublicaciones';
import Registro from './pages/Registro';
//import '@materializecss/materialize/dist/css/materialize.css';
//import '@materializecss/materialize/dist/js/materialize';


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
