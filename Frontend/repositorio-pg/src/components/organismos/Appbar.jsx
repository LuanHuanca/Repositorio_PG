import React from 'react'
import EntradaBusqueda from '../moleculas/EntradaBusqueda'
import './Appbar.css'
import Lenguaje from '../atomos/Lenguaje'

const Appbar = () => {
  return (
    <div className='appbar'>
      <div className='appbar-container'>
        <img src="src\assets\logo ucb.png" alt="Logo UCB" />
        <Lenguaje/>
      </div>
      <EntradaBusqueda/>
    </div>
  )
}

export default Appbar
