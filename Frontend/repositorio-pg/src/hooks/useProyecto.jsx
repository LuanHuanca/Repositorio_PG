import { useEffect, useState } from "react"
import { peticionGetTarjetaGeneral } from "../helpers/fetchAllProyectos";



export const useProyecto = () =>{
    
    //definimos el isLoading como true, para que cuando busque los datos, entregue un componente de Cargando
    const [isLoading,setLoading]= useState(true);
    //Aqui es donde seteamos los proyectos para su uso en el frontend
    const [proyectos, setProyectos] = useState([]);
    
    useEffect(()=>{
        //Carga de los proyectos
        //realizamos la peticion de algo en especifico par autilizarlo en una pantalla definida
        peticionGetTarjetaGeneral()
            .then( proyectos => {
                //cambiamos el valor del loading en false, cuando se encuentre los datos de la api
                setLoading(false);
                //seteamos los datos de la api en setProyectos
                setProyectos(proyectos);
            })
    })

    return {
        //regresamos el isLoading y proyectos para su uso en la respectiva pantalla
        isLoading,
        proyectos
    }

}