import React, { useState } from "react";
import './TarjetasTesis.css'
import { NavLink, useNavigate } from "react-router-dom";


const TarjetasTesis = ({titulo, autor, fecha, carrera}) => {
  const navigate = useNavigate();
  const enviarKey = (proyecto) => {
    navigate(`/tarjetaTesis?proyecto=${proyecto}`);
    console.log(proyecto);
  };
  return (
    <div className="tarjetas-de-tesis">
      <img src="/src/assets/imagen de tesis.png" alt="Portada Tesis" />
      <div className="tarjeta-informacion">
        <h3>{titulo}</h3>
        <h3>por {autor}</h3>
        <h3>fecha publicada: {fecha}</h3>
        <h3>carrera: {carrera}</h3>
        <div className="boton-container">
          <button onClick={() => enviarKey(titulo)}>
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetasTesis;