import axios from "axios";

export const proyectosApi = axios.create({
    //Aqui entregamos la url de la api, para su propio consumo en el frontend
    baseURL: 'https://jsonplaceholder.typicode.com'
})