import React from 'react'
import OurButton from '../atomos/OurButton'
import './InformacionTesis.css'
import tarjeta from '../json/tarjetaTesis.json'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../useFetch'

const InformacionTesis = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const proyecto = searchParams.get("proyecto");

  const baseURL = `http://localhost:3000/busquedaPorTitulo?titulo=${proyecto}`;
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
              <p>Resumen: {data[0].Resumen}</p>
              <p>Gestion: {data[0].Gestión}</p>
              <p>Palabras Clave: {data[0].PalabrasClave}</p>
              {/* <p>Abstract: {tarjeta.Abstract}</p> */}
              <p>Autores: {data[0].Autor}</p>
              <p>Carrera: {data[0].Carrera}</p>
              <p>Tutor: {data[0].Tutor}</p>
              <OurButton Texto={"Descargar"}/>
            </div>
        </div>
    </div>
  )
}

export default InformacionTesis
