import React from 'react'
import { Icon } from '@iconify/react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <img src="src/assets/logo.png" alt="Logo UCB" />
        <div className='footertexto'>
            <p>© 2023 www.ucb.edu.bo</p>
            <p>Todos los derechos reservados</p>
            <p>Dirección General de Bibliotecas y Servicios Digitales de Información, UCB.</p>
            <p>Arvisoft UCB</p>
        </div>
        <a href="#">
            Ir arriba
            <Icon icon="mdi:arrow-top" color="white" width="20" />
        </a>
        
    </div>
  )
}

export default Footer
