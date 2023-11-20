import React from "react";
import tarjeta from "../json/tarjetaHome.json";
import TarjetaHome from "./TarjetaHome";
import './CarouselTarjetas.css'

const CarouselTarjetas = () => {
  return (
    <div className="carousel">
        <div className="carouselTarjetas">
      {tarjeta.map((item) => {
        return (
          <TarjetaHome
            key={item.id}
            titulo={item.titulo}
            imagen={item.imgsrc}
            imagenDescrip={item.descripImagen}
            Descripcion={item.descripcion}
            fecha={item.fecha}
          />
        );
      })}
    </div>
    </div>
  );
};

export default CarouselTarjetas;
