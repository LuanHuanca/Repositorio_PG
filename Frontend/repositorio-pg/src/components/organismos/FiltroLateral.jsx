import React from 'react'
import TarjetaFiltro from '../moleculas/TarjetaFiltro'
import "./FiltroLateral.css"

const FiltroLateral = () => {
  return (
    <div className='lateral-container'>
        <TarjetaFiltro 
        busqueda={"Tipo de Busqueda"}
        Componente1={"Autor"}
        Componente2={"Gestion"}
        Componente3={"Categoria"}/>
      <TarjetaFiltro 
        busqueda={"Ordenar por"}
        Componente1={"Relevancia"}
        Componente2={"Fecha ascendente"}
        Componente3={"Fecha descendente"}/>
    </div>
  )
}

export default FiltroLateral
