import React from 'react'
import "./TipoBusqueda.css"

const TipoBusqueda = () => {
  return (
    <div className="container-select">
        <select className="type" name="document-type" id="id_type">
          <option value="titulo">Titulo</option>
          <option value="tesis">Tesis</option>
          <option value="proyecto-grado">Proyecto de grado</option>
        </select>
      </div>
  )
}

export default TipoBusqueda
