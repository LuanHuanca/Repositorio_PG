import React from "react";
import tarjeta from "../json/tarjetaHome.json";
import TarjetaHome from "./TarjetaHome";
import './CarouselTarjetas.css'
import { useFetch } from "../../useFetch";

const CarouselTarjetas = ( {baseurl, point} ) => {

  const baseURL = baseurl;
  const { data, loading, error } = useFetch(baseURL, point);

  if (loading) {
    return <p>Cargando...</p>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="carousel">
        <div className="carouselTarjetas">
      {data && data.map((item) => {
        return (
          <TarjetaHome  
            key={item.TítuloDelProyecto}
            titulo={item.TítuloDelProyecto}
            // imagenDescrip={item.descripImagen}
            Descripcion={item.Resumen}
            fecha={item.Gestión}
          />
        );
      })}
    </div>
    </div>
  );
};

export default CarouselTarjetas;
