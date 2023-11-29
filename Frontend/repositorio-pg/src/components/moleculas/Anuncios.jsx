import React from "react";
import anuncios from "../json/anuncios.json";
import "./Anuncios.css";
import AnuncioTarjeta from "./AnuncioTarjeta";

const Anuncios = () => {
  return (
    <div className="anuncios">
      <h2>ANUNCIOS</h2>
      <div className="carousel-anuncios">
        {anuncios.map((item) => {
          return (
            <AnuncioTarjeta
              key={item.id}
              imagen={item.imgsrc}
              imagenDescrip={item.descripImg}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Anuncios;
