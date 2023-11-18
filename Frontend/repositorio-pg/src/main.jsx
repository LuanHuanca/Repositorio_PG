import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import TarjetaTesisScreen from './screens/TarjetaTesisScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import BusquedaScreen from './screens/BusquedaScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Routes>
        <Route path='/tarjetaTesis' element={<TarjetaTesisScreen/>}/>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/busqueda' element={<BusquedaScreen/>}/>
      </Routes>
    </BrowserRouter>
)
