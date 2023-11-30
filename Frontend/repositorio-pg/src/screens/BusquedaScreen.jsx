import React, { useState } from "react";
import "./BusquedaScreen.css";
import TituloImagen from "../components/moleculas/TituloImagen";
import FiltroLateral from "../components/organismos/FiltroLateral";
import EntradaBusqueda from "../components/moleculas/EntradaBusqueda";
import { useProyecto } from "../hooks/useProyecto";
import { Loading } from "../components/Loading";
import BusquedaProyectos from "../components/organismos/BusquedaProyectos";
import { useNavigate } from "react-router-dom";


const BusquedaScreen = () => {
  const navigate = useNavigate();

  const [nombreProyecto, setNombreProyecto] = useState("");

  const handleChangeNombre = (event) => {
    setNombreProyecto(event.target.value);
  };

  return (
    <div>
      <TituloImagen />
      <div className="busqueda-filtro">
        {/* <FiltroLateral /> */}
        <div className="forTargets">
          <div className="fondo-busqueda">
            <h3>Busqueda General</h3>
            <EntradaBusqueda
              onChange={handleChangeNombre}
              value={nombreProyecto}
              name="nombreProyecto"
              onClick={()=>navigate(`/busqueda?nombreProyecto=${nombreProyecto}`)}
            />
            <h3>Resultados de busqueda</h3>
          </div>
          <BusquedaProyectos/>  
        </div>
      </div>
    </div>
  );
};

export default BusquedaScreen;