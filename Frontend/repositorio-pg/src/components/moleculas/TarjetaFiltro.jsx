import React from 'react'
import "./TarjetaFiltro.css"

const TarjetaFiltro = ({busqueda,Componente1,Componente2,Componente3}) => {
  return (
    <div className='tarjeta-container'>
        <h2>{busqueda}</h2>
        <button>{Componente2}</button>
        <button>{Componente3}</button>
        <button>{Componente1}</button>
    </div>
  )
}

export default TarjetaFiltro
