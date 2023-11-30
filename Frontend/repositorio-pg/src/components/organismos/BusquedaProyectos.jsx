import React from "react";
import { useLocation } from "react-router-dom";
import TarjetasTesis from "../moleculas/TarjetasTesis";
import "./BusquedaProyectos.css";
import { useFetch } from "../../useFetch";

const BusquedaProyectos = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nombre = searchParams.get("nombreProyecto");

  const baseURL = `http://172.18.0.125:3000/busquedaPorTitulo?titulo=${nombre}`;
  const { data, loading, error } = useFetch(baseURL, "busquedaPorTitulo");

  if (loading) {
    return <p>Cargando...</p>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="Tarjetas">
      {data && data?.map( (busquedaTitulo) => (
              <TarjetasTesis 
                key={busquedaTitulo.TítuloDelProyecto} 
                titulo={busquedaTitulo.TítuloDelProyecto} 
                autor={busquedaTitulo.Autor} 
                fecha={busquedaTitulo.Gestión} 
                carrera={busquedaTitulo.Carrera}/>
            ))}
    </div>
  );
};

export default BusquedaProyectos;
