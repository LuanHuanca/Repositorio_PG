import React from "react";
import "./EntradaBusqueda.css";
import TipoBusqueda from "../atomos/TipoBusqueda";
import SearchButton from "../atomos/SearchButton";

const EntradaBusqueda = ({onChange, value, name, onClick }) => {
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Ingrese su busqueda"
        onChange={onChange}
        value={value}
        name={name}
        className="input-container"
      />
      <SearchButton onClick={onClick}/>
    </div>
  );
};

export default EntradaBusqueda;
