import React, { useEffect, useState} from "react";
import "./BusquedaScreen.css";
import AppbarSinInput from "../components/organismos/AppbarSinInput";
import TituloImagen from "../components/moleculas/TituloImagen";
import FiltroLateral from "../components/organismos/FiltroLateral";
import EntradaBusqueda from "../components/moleculas/EntradaBusqueda";
import TarjetasTesis from "../components/moleculas/TarjetasTesis";
import Footer from "../components/organismos/Footer";
import axios, { Axios } from "axios";
import { useProyecto } from "../hooks/useProyecto";
import { Loading } from "../components/Loading";

const BusquedaScreen = () => {

  //en aqui ya colocamos las variables donde guardaremos los que nos regrese la funcion useProyecto
  const { isLoading, proyectos} = useProyecto();
  //Las constantes para manejar la paginacion la cual definimos en 0
  const [currentpage,setCurrentPage] = useState(0);
  //Las constantes para realizar la busqueda que por defecto este vacio
  const [search, setSearch] = useState('');


  //hacemos el filtrado de proyectos para que muestre unos cuantos nomas, y manejamos la paginacion al mismo tiempo
  const filteredProyectos = ()=>{
    return proyectos.slice(currentpage,currentpage+3);
  }
  //para ir a la siguiente pagina 
  const nextPage = ()=>{
    setCurrentPage(currentpage + 3);
  }
  //para regresar a la pagina anterior 
  const prevPage = ()=>{
    //regresa solo cuando la pagina sea mayor a 0
    if(currentpage > 0)
      setCurrentPage(currentpage - 3);
  }


  return (
    <div>
      <AppbarSinInput />
      <TituloImagen />
      <div className="busqueda-filtro">
        <FiltroLateral />
        <div className="forTargets">
          <div className="fondo-busqueda">
            <EntradaBusqueda valores={search} accion1={ (event) => setSearch(event.target.value)}/>
            <h3>Resultados de busqueda</h3>
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
          </div>
          {
            isLoading && <Loading/>
          }
          <div className="Tarjetas">
            {
              //pedimos a nuestra funcion filteredProyectos para su paginacion y filtracion
              filteredProyectos()?.map((item)=>{
                return <TarjetasTesis key={item.id} titulo={item.name} autor={item.username} carrera={item.carrera} fecha={item.fecha}/>
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