import React from "react";
import "./EntradaBusqueda.css";
import TipoBusqueda from "../atomos/TipoBusqueda";
import BusquedaInput from "../atomos/BusquedaInput";
import SearchButton from "../atomos/SearchButton";

const EntradaBusqueda = () => {
  return (
    <div className="container">
      <TipoBusqueda/>
      <BusquedaInput/>
      <SearchButton buscar={"/busqueda"}/>
    </div>
  );
};

export default EntradaBusqueda;
