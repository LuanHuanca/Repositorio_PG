import React from 'react'
import Direccion from '../moleculas/Direccion'
import InformacionTesis from '../moleculas/InformacionTesis'
import './TarjetaInformacion.css'

const TarjetaInformacion = () => {
  return (
    <div className='TarjetaInformacion-container'>
      <Direccion/>
      <div className='tarjeta'>
        <InformacionTesis/>
      </div>
    </div>
  )
}

export default TarjetaInformacion
