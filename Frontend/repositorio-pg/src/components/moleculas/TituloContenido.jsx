import React from 'react'
import './TituloContenido.css'

const TituloContenido = ({valor}) => {
  return (
    <div className='titulocontenido-container'>
      <span id='contenido'>CONTENIDO</span>
      <span id='valor'>{valor}</span>
    </div>
  )
}

export default TituloContenido
