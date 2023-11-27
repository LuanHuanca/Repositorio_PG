import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import CustomInput from "../components/moleculas/CustomInput";
import "./LoginScreen.css";

const PantallaSiguiente = ({ user }) => {
  return (
    <div>
      <h2>Bienvenido, {user.name}!</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

const LoginScreen = () => {
  const clientID =
    "211803212290-uqelcl3mjmgdogkuvh22nusbfgalibst.apps.googleusercontent.com";
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate(); // Obtiene la función de navegación

  const onSuccess = (response) => {
    setUser(response.profileObj);
    setLoggedIn(true);
  
    // Redirige a la pantalla principal con el parámetro de ID
    navigate(`/`);
  };
  

  const onFailure = (response) => {
    alert("Algo salió mal al iniciar sesión con Google");
  };

  const handleLogout = () => {
    setUser({});
    setLoggedIn(false);
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
            cookiePolicy={"single_host_origin"}
          />
          {loggedIn}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
