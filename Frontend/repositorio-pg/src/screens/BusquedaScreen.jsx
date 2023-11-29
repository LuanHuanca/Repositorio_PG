import React, { useEffect, useState} from "react";
import "./BusquedaScreen.css";
import TituloImagen from "../components/moleculas/TituloImagen";
import FiltroLateral from "../components/organismos/FiltroLateral";
import EntradaBusqueda from "../components/moleculas/EntradaBusqueda";
import TarjetasTesis from "../components/moleculas/TarjetasTesis";
import Footer from "../components/organismos/Footer";
import axios, { Axios } from "axios";
import { useProyecto } from "../hooks/useProyecto";
import { Loading } from "../components/Loading";
import { useFetch } from "../useFetch";

const BusquedaScreen = () => {

  //en aqui ya colocamos las variables donde guardaremos los que nos regrese la funcion useProyecto
  const { isLoading, proyectos} = useProyecto();
  //Las constantes para manejar la paginacion la cual definimos en 0
  const [currentpage,setCurrentPage] = useState(0);
  //Las constantes para realizar la busqueda que por defecto este vacio
  const [search, setSearch] = useState('');

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

  const baseURL = "http://localhost:3000/todoLosTitulos";
  const { data, loading, error } = useFetch(baseURL, "TodosLosTitulos");

  if (loading) {
    return <p>Cargando...</p>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <TituloImagen />
      <div className="busqueda-filtro">
        <FiltroLateral />
        <div className="forTargets">
          <div className="fondo-busqueda">
            <h3>Busqueda General</h3>
            <EntradaBusqueda valores={search} accion1={ (event) => setSearch(event.target.value)}/>
            <h3>Resultados de busqueda</h3>
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
          </div>
          {
            data && data.map( (busquedaTitulo) => (
              <TarjetasTesis 
                key={busquedaTitulo.TítuloDelProyecto} 
                titulo={busquedaTitulo.TítuloDelProyecto} 
                autor={busquedaTitulo.Autor} 
                fecha={busquedaTitulo.Gestión} 
                carrera={busquedaTitulo.Carrera}/>
            ))
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BusquedaScreen
