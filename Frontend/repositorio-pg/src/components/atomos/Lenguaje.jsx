import React from 'react'
import "./Lenguaje.css"

const Lenguaje = () => {
  return (
    <div className="elegir-container">
        <select className="elegir-tipo" name="elegir-lenguaje" id="id_lenguaje">
          <option value="español">Español</option>
          <option value="ingles">Ingles</option>
        </select>
        
        <button className='btn-acceder'>Acceder</button>
    </div>
  )
}

export default Lenguaje
