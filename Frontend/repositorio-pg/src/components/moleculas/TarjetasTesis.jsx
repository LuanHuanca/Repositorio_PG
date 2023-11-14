import React from "react";
import './TarjetasTesis.css'
import { NavLink } from "react-router-dom";


const TarjetasTesis = ({titulo,autor,fecha,carrera}) => {
  return (
    <div className="tarjetas-de-tesis">
      <img src="/src/assets/principito.jpeg" alt="Portada Tesis" />
      <div className="tarjeta-informacion">
        <h3>{titulo}</h3>
        <h3>por {autor}</h3>
        <h3>fecha publicada: {fecha}</h3>
        <h3>carrera: {carrera}</h3>
        <div className="boton-container">
          <button>
            <NavLink>Ingresar</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetasTesis;
