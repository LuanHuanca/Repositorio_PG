import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TarjetasTesis from "../moleculas/TarjetasTesis";
import tarjetaBusqueda from "../json/tarjetas.json";
import "./BusquedaProyectos.css";

const BusquedaProyectos = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nombre = searchParams.get("nombre");
  const [nombreProyecto, setNombreProyecto] = useState([]);
  useEffect(() => {
    const obtenerPlatosPorNombre = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/busqueda?nombre=${nombre}`
        );
        setPlatos(response.data.platos);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPlatosPorNombre();
  }, [nombre]);
  return (
    <div className="Tarjetas">
      {tarjetaBusqueda.map((item) => {
        return (
          <TarjetasTesis
            key={item.id}
            titulo={item.name}
            autor={item.username}
            carrera={item.carrera}
            fecha={item.fecha}
          />
        );
      })}
    </div>
  );
};

export default BusquedaProyectos;
