import React from 'react'
import Appbar from '../components/organismos/Appbar'
import TituloImagen from '../components/moleculas/TituloImagen'
import FiltroLateral from '../components/organismos/FiltroLateral'

const Home = () => {
  return (
    <div>
      <Appbar/>
      <TituloImagen/>
      <FiltroLateral/>
    </div>
  )
}

export default Home
