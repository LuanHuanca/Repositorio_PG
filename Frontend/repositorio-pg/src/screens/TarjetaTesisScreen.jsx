import React from 'react'
import Appbar from '../components/organismos/Appbar'
import TarjetaInformacion from '../components/organismos/TarjetaInformacion'
import Footer from '../components/organismos/Footer'

const TarjetaTesisScreen = ({loggedIn}) => {
  return (
    <div className='TarjetaTesisScreen-container'>
      <TarjetaInformacion/>
      <Footer/>
    </div>
  )
}

export default TarjetaTesisScreen
