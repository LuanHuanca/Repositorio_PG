import React from "react";
import "./Lenguaje.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Lenguaje = () => {
  return (
    <div className="elegir-container">
      <NavLink className="btn">
        Agregar Proyecto
      </NavLink>
      <NavLink to="/login" className="btn">
        Acceder
      </NavLink>
      <NavLink to='/busqueda' className="btn">
        <Icon icon="charm:search" color="black" width="35" />
      </NavLink>
    </div>
  );
};

export default Lenguaje;
