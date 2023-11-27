import React from 'react'
import './LoginScreen.css'
import CustomInput from '../components/moleculas/CustomInput'
import { NavLink } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div className='loginscreen'>
      <img src="src/assets/login.jpg" alt="Acceso al login" />
      <div className='formulario'>
        <div className='formulario-imagenes'>
            <img src="src/assets/logo_ucb.png" alt="logo UCB" />
            <img src="src/assets/logo ranking universidades.png" alt="" />
        </div>
        <h4 id='titulo'>Para iniciar la sesion ingresa tu usuario y contraseña</h4>
        <div className='formulario-inputs'>
          <form>
            <CustomInput title={"Usuario :"} placeholder={"Ingrese su nombre de usuario"}/>
            <CustomInput title={"Contraseña :"} placeholder={"Ingrese su contraseña"}/>
            <NavLink to="/"><button>Iniciar Sesion</button></NavLink>
          </form>
          <h4>O tambien puedes iniciar sesion con :</h4>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
