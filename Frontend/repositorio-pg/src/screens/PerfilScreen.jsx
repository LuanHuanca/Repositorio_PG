import React from "react";
import { useLocalStorage } from "../services/useLocalStorage";
import "./PerfilScreen.css";
import { GoogleLogout } from "react-google-login";
import VerificacionIngreso from "./VerificacionIngreso";

const PerfilScreen = () => {
  const clientID =
    "211803212290-uqelcl3mjmgdogkuvh22nusbfgalibst.apps.googleusercontent.com";
  const handleLogout = () => {
    console.log("se cerro la sesion correctamente");
    localStorage.clear();
    window.location.href = "/";
  };

  const [loggedIn] = useLocalStorage("loggedIn", false);
  const [userName] = useLocalStorage("userName", "");
  const [lastName] = useLocalStorage("lastName", "");
  const [email] = useLocalStorage("email", "");
  const [imgperfil] = useLocalStorage("imgPerfil", "");

  return (
    <div className="PerfilScreen-container">
      {!loggedIn ? (
        <VerificacionIngreso />
      ) : (
        <>
          <div className="PerfilScreen">
            <h1 id="titulo">Mi cuenta</h1>
            <div className="tarjetaPerfil">
              <img src={imgperfil} alt="Imagen de Perfil" />
              <div className="informacionPerfil">
                <h3>Nombres:</h3>
                <span>{userName}</span>
                <h3>Apellidos:</h3>
                <span>{lastName}</span>
                <h3>Direccion de correo electrónico:</h3>
                <span>{email}</span>
                <br />
                <br />
                <GoogleLogout
                  clientId={clientID}
                  buttonText="Cerrar Sesión"
                  onLogoutSuccess={handleLogout}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PerfilScreen;
