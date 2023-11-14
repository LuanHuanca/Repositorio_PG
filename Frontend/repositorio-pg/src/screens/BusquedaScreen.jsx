import React, { useEffect, useState } from "react";
import "./BusquedaScreen.css";
import AppbarSinInput from "../components/organismos/AppbarSinInput";
import TituloImagen from "../components/moleculas/TituloImagen";
import FiltroLateral from "../components/organismos/FiltroLateral";
import EntradaBusqueda from "../components/moleculas/EntradaBusqueda";
import TarjetasTesis from "../components/moleculas/TarjetasTesis";
import tarjeta from "../json/tarjetas.json"
import Footer from "../components/organismos/Footer";
import { Axios } from "axios";

const BusquedaScreen = () => {


  //Intento para hacer el consumo de la api, pero aun no esta probado
  const [tarjetas,setTarjetas] = useState([]);
  const get_tarjetas = ()=>{
    Axios.get("url").then((response)=>{
      setTarjetas(response.data);
    });
  }

  useEffect(()=>{
    get_tarjetas();
  })

  return (
    <div>
      <AppbarSinInput />
      <TituloImagen />
      <div className="busqueda-filtro">
        <FiltroLateral />
        <div className="forTargets">
          <div className="fondo-busqueda">
            <EntradaBusqueda />
            <h3>Resultados de busqueda</h3>
          </div>
          <div className="Tarjetas">
            {
              //EL SIGUIENTE CODIGO ES PARA EL CONSUMO DE LA API
              // tarjetas.map((tarjetas)=>{
              //   return <TarjetasTesis titulo={tarjetas.titulo} autor={tarjetas.autor} carrera={tarjetas.carrera} fecha={tarjetas.fecha}/>
              // })
              tarjeta.map((tarjeta)=>{
                return <TarjetasTesis titulo={tarjeta.titulo} autor={tarjeta.autor} carrera={tarjeta.carrera} fecha={tarjeta.fecha}/>
              })
            }
          </div>  
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default BusquedaScreen;
