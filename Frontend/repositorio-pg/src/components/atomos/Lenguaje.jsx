import React from 'react'
import "./Lenguaje.css"
import { NavLink } from 'react-router-dom'

const Lenguaje = () => {
  return (
    <div className="elegir-container">
        <select className="elegir-tipo" name="elegir-lenguaje" id="id_lenguaje">
          <option value="español">Español</option>
          <option value="ingles">Ingles</option>
        </select>
        
        <NavLink className='btn-acceder'>Acceder</NavLink>
    </div>
  )
}

export default Lenguaje
