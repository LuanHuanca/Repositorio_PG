import { proyectosApi } from "../api/proyectosApi"


export const peticionGetTarjetaGeneral = async()=>{
    
    //Elegiremos que datos traeremos en el get
    //FALLA(REVISAR)
    //PRUEBA EN LA CUAL UTILIZAMOS EL MODE NO-CORS, PARA QUE NOS PERMITA INGRESAR SIN LA POLITICA DE SEGURIDAD DE CORS
    // const resp = await proyectosApi.get('/todosLosTitulos',{ mode: 'no-cors'});
    
    //Prueba funcional, en la cual en el get colocamos la identificacion a que tabla nos referimos de la api
    const resp = await proyectosApi.get('/todoLosTitulos');
    const resultados = resp.data;

    return resultados;

} 