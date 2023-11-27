import React from 'react'
import EntradaBusqueda from '../moleculas/EntradaBusqueda'
import './Appbar.css'
import Lenguaje from '../atomos/Lenguaje'
import { NavLink } from 'react-router-dom'

const Appbar = () => {
  return (
    <div className='appbar'>
      <div className='appbar-container'>
        <NavLink to="/"><img src="src\assets\logo_ucb.png" alt="Logo UCB" /></NavLink>
        <Lenguaje/>
      </div>
    </div>
  )
}

export default Appbar
