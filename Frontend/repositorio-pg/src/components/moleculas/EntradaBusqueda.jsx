import React from "react";
import "./EntradaBusqueda.css";
import TipoBusqueda from "../atomos/TipoBusqueda";
import SearchButton from "../atomos/SearchButton";

const EntradaBusqueda = ({valores,accion1,accion2}) => {
  return (
    <div className="container">
      <input
        value={valores}
        className="input-container"
        type="text"
        placeholder="Ingrese su busqueda"
        onChange={accion1}
      />
      <SearchButton direccion={"/busqueda"} action={accion2}/>
    </div>
  );
};

export default EntradaBusqueda;
