import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Lenguaje.css";
import { GoogleLogout } from "react-google-login";

const Lenguaje = ({ loggedIn, userName }) => {
  const handleLogout = () => {
    console.log("se cerro la sesion correctamente");
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
          <NavLink className="btn" to="/agregar-proyecto">
            Subir Proyecto
          </NavLink>
          <NavLink className="btn">Bienvenido {userName}</NavLink>
        </>
      )}

      <NavLink to="/busqueda" className="btn">
        <Icon icon="charm:search" color="black" width="35" />
      </NavLink>
      {!loggedIn ? (
        <></>
      ) : (
        <>
          <GoogleLogout
            clientId="tu-client-id-de-google"
            buttonText="Cerrar Sesión"
            onLogoutSuccess={handleLogout}
          />
        </>
      )}
    </div>
  );
};

export default Lenguaje;
