import React from 'react'
import OurButton from '../atomos/OurButton'
import './InformacionTesis.css'
import tarjeta from '../json/tarjetaTesis.json'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../useFetch'

const InformacionTesis = () => {
  const location = useLocation();
  const titulo = location.state?.titulo || {}; // Accede a los datos desde la ubicación

  const baseURL = `http://localhost:3000/busquedaPorTitulo?titulo=${titulo}`;
  const { data, loading, error } = useFetch(baseURL, "busquedaPorTitulo");

  if (loading) {
    return <p>Cargando...</p>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='InformacionTesis-container'>
        <h1>{data && data.TítuloDelProyecto}</h1>
        <div className='Information-container'>
            <img src='src/assets/imagen de tesis.png' alt="Portada Tesis" />
            <div className='informacion'>
              <p>Resumen: {data.Resumen}</p>
              <p>Gestion: {data.Gestión}</p>
              <p>Palabras Clave: {data.PalabrasClave}</p>
              {/* <p>Abstract: {tarjeta.Abstract}</p> */}
              <p>Autores: {data.Autor}</p>
              <p>Carrera: {data.Carrera}</p>
              <p>Tutor: {data.Tutor}</p>
              <OurButton Texto={"Descargar"}/>
            </div>
        </div>
    </div>
  )
}

export default InformacionTesis
