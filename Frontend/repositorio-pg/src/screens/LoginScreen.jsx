import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import CustomInput from "../components/moleculas/CustomInput";
import "./LoginScreen.css";
import { useLocalStorage } from "../services/useLocalStorage";

const LoginScreen = () => {
  const clientID =
    "211803212290-uqelcl3mjmgdogkuvh22nusbfgalibst.apps.googleusercontent.com";
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", false);
  const [userName, setUserName] = useLocalStorage("userName", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [imgperfil, setImgPerfil] = useLocalStorage("imgPerfil", "");
  const navigate = useNavigate();

  const onSuccess = (response) => {
    const {
      profileObj: {
        givenName, // Primer nombre
        familyName, // Apellido
        email, // Correo electrónico
        imageUrl, // URL de la imagen de perfil
      },
    } = response;
    //guardo el nombre del usuario
    setUserName(givenName);
    //guardo el apellido del usuario
    setLastName(familyName);
    // guardo el email del usuario
    setEmail(email);
    //guardo la imagen que tiene en su cuenta en forma de url
    setImgPerfil(imageUrl);
    //guardo la sesion para verificar si esta iniciada
    setLoggedIn(true);
    //navega la pantalla home con exito y logeo ya definido
    navigate("/");
  };

  const onFailure = (response) => {
    console.log("Algo salió mal al iniciar sesión con Google");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar lógica de autenticación aquí
    setLoggedIn(true);
  };

  return (
    <div className="loginscreen">
      <img src="src/assets/login.jpg" alt="Acceso al login" />
      <div className="formulario">
        <div className="formulario-imagenes">
          <img src="src/assets/logo_ucb.png" alt="logo UCB" />
          <img src="src/assets/logo ranking universidades.png" alt="" />
        </div>
        <h4 id="titulo">
          Para iniciar la sesión, ingresa tu usuario y contraseña
        </h4>
        <div className="formulario-inputs">
          <form onSubmit={handleSubmit}>
            <CustomInput
              title={"Usuario :"}
              placeholder={"Ingrese su nombre de usuario"}
            />
            <CustomInput
              title={"Contraseña :"}
              placeholder={"Ingrese su contraseña"}
            />
            <button type="submit">Iniciar Sesión</button>
          </form>
          <h4>O también puedes iniciar sesión con:</h4>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText="Iniciar Sesión con Google"
            cookiePolicy={""}
          />
          {loggedIn && <HomeScreen />}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
