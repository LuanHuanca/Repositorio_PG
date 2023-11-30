import React from 'react'
import Appbar from '../components/organismos/Appbar'
import TituloImagen from '../components/moleculas/TituloImagen'
import TituloContenido from '../components/moleculas/TituloContenido'
import './HomeScreen.css'
import CarouselTarjetas from '../components/moleculas/CarouselTarjetas'
import Footer from '../components/organismos/Footer'
import Anuncios from '../components/moleculas/Anuncios'

const  HomeScreen = () => {
  return (
    <div>
      <TituloImagen/>
      <TituloContenido valor={"RECIENTE"}/>
      <CarouselTarjetas baseurl={"http://172.18.0.125:3000/anioDes"} point={"anioDes"} />
      <Anuncios/>
      <TituloContenido valor={"DESTACADO"}/>
      <div className='destacado-container'>
        <CarouselTarjetas baseurl={"http://172.18.0.125:3000/destacados"} point={"destacados"} />
      </div>
    </div>
  )
}

export default HomeScreen
