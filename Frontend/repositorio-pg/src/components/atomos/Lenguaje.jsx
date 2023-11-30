import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Lenguaje.css";
import { GoogleLogout } from "react-google-login";
import { dialogoSuperior } from "../../services/sweetalerts";

const Lenguaje = ({ loggedIn, userName }) => {
  const clientID =
  "211803212290-uqelcl3mjmgdogkuvh22nusbfgalibst.apps.googleusercontent.com";
  const handleLogout = () => {
    dialogoSuperior("success","se cerro la sesion correctamente");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="elegir-container">
      {!loggedIn ? (
        <NavLink to="/login" className="btn">
          Acceder
        </NavLink>
      ) : (
        <>
          <NavLink className="btn" to="/envioProyecto">
            Subir Proyecto
          </NavLink>
          
          <NavLink to="/perfil" className="btn">
            <Icon id="icono" icon="mdi:account-circle-outline"/>
            Bienvenido {userName}
          </NavLink>
        </>
      )}

      <NavLink to="/busqueda" className="btn">
        <Icon icon="charm:search" color="black" width="35" />
      </NavLink>
      {!loggedIn ? (
        <></>
      ) : (
        <>
          <NavLink className="btn" onClick={handleLogout}>
            Cerrar Sesion
          </NavLink>
          {/* <GoogleLogout
            clientId={clientID}
            buttonText="Cerrar Sesión"
            onLogoutSuccess={handleLogout}
          /> */}
        </>
      )}
    </div>
  );
};

export default Lenguaje;
