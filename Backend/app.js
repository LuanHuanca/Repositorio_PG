const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// const asignacionRoutes = require("./asignacionRoutes");
// const carreraRoutes = require("./carreraRoutes");
const estadisticasRoutes = require("./estadisticasRoutes");
// const estudianteRoutes = require("./estudianteRoutes");
// const fasesRoutes = require("./fasesRoutes");
// const gestionRoutes = require("./gestionRoutes");
// const observacionrRoutes = require("./observacionrRoutes");
// const observaciontRoutes = require("./observaciontRoutes");
const personaRoutes = require("./personaRoutes");
// const presentacionRoutes = require("./presentacionRoutes");
// const proyectoRoutes = require("./proyectosRoutes");
// const relatorRoutes = require("./relatorRoutes");
// const tutorRoutes = require("./tutorRoutes");

//Middleware para el analisis de solicitudes JSON
app.use(bodyParser.json());

//Obtener Rutas del actor
app.use("/api",estadisticasRoutes);
app.use("/api",personaRoutes);

const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor en ejecucion en http://localhost:${puerto}`);
});
