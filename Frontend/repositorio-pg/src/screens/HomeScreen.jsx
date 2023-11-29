import React from 'react'
import Appbar from '../components/organismos/Appbar'
import TituloImagen from '../components/moleculas/TituloImagen'
import TituloContenido from '../components/moleculas/TituloContenido'
import './HomeScreen.css'
import CarouselTarjetas from '../components/moleculas/CarouselTarjetas'
import Footer from '../components/organismos/Footer'
import Anuncios from '../components/moleculas/Anuncios'

const HomeScreen = () => {
  return (
    <div>
      <TituloImagen/>
      <TituloContenido valor={"RECIENTE"}/>
      <CarouselTarjetas/>
      <Anuncios/>
      <TituloContenido valor={"DESTACADO"}/>
      <div className='destacado-container'>
        <CarouselTarjetas/>
      </div>
    </div>
  )
}

export default HomeScreen
