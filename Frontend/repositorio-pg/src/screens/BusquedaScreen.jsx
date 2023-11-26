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
  const { data } = useFetch(baseURL);

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
            data && data.TodosLosTitulos.map( (busquedaTitulo) => (
              <TarjetasTesis 
                key={busquedaTitulo.titulo} 
                titulo={busquedaTitulo.titulo} 
                autor={busquedaTitulo.nombre_estudiante} 
                fecha={'123'} 
                carrera={busquedaTitulo.nombre_carrera}/>
            ))
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BusquedaScreen
