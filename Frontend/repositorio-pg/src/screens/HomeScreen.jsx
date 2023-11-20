import React from 'react'
import Appbar from '../components/organismos/Appbar'
import TituloImagen from '../components/moleculas/TituloImagen'
import TituloContenido from '../components/moleculas/TituloContenido'
import './HomeScreen.css'
import CarouselTarjetas from '../components/moleculas/CarouselTarjetas'
import Footer from '../components/organismos/Footer'

const HomeScreen = () => {
  return (
    <div>
      <Appbar/>
      <TituloImagen/>
      <TituloContenido valor={"RECIENTE"}/>
      <CarouselTarjetas/>
      <TituloContenido valor={"DESTACADO"}/>
      <div className='destacado-container'>
        <CarouselTarjetas/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomeScreen