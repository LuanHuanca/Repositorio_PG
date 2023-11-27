import React from 'react'
import OurButton from '../atomos/OurButton'
import './InformacionTesis.css'
import tarjeta from '../json/tarjetaTesis.json'

const InformacionTesis = () => {
  return (
    <div className='InformacionTesis-container'>
        <h1>{tarjeta.titulo}</h1>
        <div className='Information-container'>
            <img src={tarjeta.imgsrc} alt="Portada Tesis" />
            <div className='informacion'>
              <p>Resumen: {tarjeta.resumen}</p>
              <p>Edicion: {tarjeta.edicion}</p>
              <p>Palabras Clave: {tarjeta.claves}</p>
              <p>Abstract: {tarjeta.Abstract}</p>
              <p>Keywords: {tarjeta.keyword}</p>
              <p>Tipo: {tarjeta.tipo}</p>
              <p>Autores: {tarjeta.autores}</p>
              <p>Carrera: {tarjeta.carrera}</p>
              <p>Asesor: {tarjeta.Asesor}</p>
              <OurButton Texto={"Descargar"}/>
            </div>
        </div>
    </div>
  )
}

export default InformacionTesis
