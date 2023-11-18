import React from 'react'
import './Direccion.css'
import OurButton from '../atomos/OurButton'

const Direccion = () => {
  return (
    <div className='direccion-container'>
        <h3>Direccion de volver</h3>
      <OurButton Texto={"Volver"} ruta={"/"}/>
    </div>
  )
}

export default Direccion
