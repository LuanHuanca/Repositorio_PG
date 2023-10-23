const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const actorRoutes = require("./actorRoutes");
//Middleware para el analisis de solicitudes JSON
app.use(bodyParser.json());
//Obtener Rutas del actor
// app.use("/api",actorRoutes);
// const puerto = 3000;
// app.listen(puerto, () => {
//     console.log(`Servidor en ejecucion en http://localhost:${puerto}`);
// });
