import React from 'react'
import './AnuncioTarjeta.css'

const AnuncioTarjeta = ({imagen, imagenDescrip,url}) => {
  return (
    <a href={url} target="_blank">
      <div className='tarjetaAnuncio'>
        <img src={imagen} alt={imagenDescrip} />
      </div>
    </a>
  )
}

export default AnuncioTarjeta
