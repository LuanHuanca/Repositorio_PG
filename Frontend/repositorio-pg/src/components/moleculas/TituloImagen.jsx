import React from 'react'
import "./TituloImagen.css"
import Titulo from '../atomos/Titulo'

const TituloImagen = () => {
  return (
    <div className='tituloImagen-container'>
      <img src="/images/ColiseoImage.png" alt="Titulo" />
      <Titulo/>
    </div>
  )
}

export default TituloImagen
