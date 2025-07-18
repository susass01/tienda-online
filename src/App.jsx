import React, { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Login from './pages/Login'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import DetallesProductos from './components/DetallesProductos'
import { CartContext } from './context/CartContext'
import RutasProtegidas from './rutas/RutasProtegidas'
import {useAuth} from './context/AuthContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isAuthenticated, manejarAdmin, manejarUser } = useContext(CartContext)
  const {isAuth} = useAuth();

  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/acercade' element={<AcercaDe />}/>

        <Route path='/productos' element={<GaleriaDeProductos />}/>

        <Route path='/productos/:id' element={<DetallesProductos />}/>

        <Route path='/contacto' element={<Contacto />}/>

        <Route path='/admin' element={<RutasProtegidas isAuthenticated={isAuth}>
          <Admin/>
        </RutasProtegidas>}/>

        <Route path='/login' element={<Login/>}/>
        
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
    </>
      
      
  )
}

export default App
