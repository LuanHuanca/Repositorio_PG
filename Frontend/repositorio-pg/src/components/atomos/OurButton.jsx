import React from 'react'
import './OurButton.css'
import { NavLink } from 'react-router-dom'

const OurButton = ({Texto,ruta}) => {
  return (
    <div className='button-container'>
      <button ><NavLink to={ruta}>{Texto}</NavLink></button>
    </div>
  )
}

export default OurButton
