import React from 'react'
import EntradaBusqueda from '../moleculas/EntradaBusqueda'
import './Appbar.css'
import Lenguaje from '../atomos/Lenguaje'

const Appbar = () => {
  return (
    <div className='appbar'>
      <div className='appbar-container'>
        <img src="src\assets\logo_ucb.png" alt="Logo UCB" />
        <Lenguaje/>
      </div>
    </div>
  )
}

export default Appbar
