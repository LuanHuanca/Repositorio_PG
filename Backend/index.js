import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
const salt = 10;

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyectos_de_grado",
});
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET"],
        credentials: true,
    })
);

// Screen Busqueda
// Busqueda por titulo
app.get('/busquedaPorTitulo',(req,res)=>{
    const {titulo} = req.query;
    const q = `
    SELECT 
        p.titulo AS "TítuloDelProyecto",
        p.resumen AS "Resumen",
        g.anio AS "Gestión",
        p.keywords AS "PalabrasClave",
        pe_autor.nombre AS "Autor",
        pe_tutor.nombre AS "Tutor",
        c.nombre_carrera AS "Carrera"
    FROM 
        proyecto p
    JOIN 
        asignacion a ON p.id_asignacion = a.id_asignacion
    JOIN 
        estudiante e ON a.id_estudiante = e.id_estudiante
    JOIN 
        persona pe_autor ON e.id_persona = pe_autor.id_persona
    JOIN 
        tutor t ON a.id_tutor = t.id_tutor
    JOIN 
        persona pe_tutor ON t.persona_id_persona = pe_tutor.id_persona
    JOIN 
        gestion g ON a.id_gestion = g.id_gestion
    JOIN 
        carrera c ON p.carrera_id = c.id
    WHERE 
        p.titulo LIKE (?);`;
    db.query(q,[`%${titulo}%`], (err,result)=>{
        if(err){
            return res.json({Error: "Error al buscar por Titulo"})
        }
        return res.json({busquedaPorTitulo:result});
    });
});

// Busqueda por carrera
app.get('/busquedaPorCarrera',(req,res)=>{
    const {carrera} = req.query;
    const q = `
    SELECT 
        p.titulo AS "TítuloDelProyecto",
        p.resumen AS "Resumen",
        g.anio AS "Gestión",
        p.keywords AS "Palabras Clave",
        pe_autor.nombre AS "Autor",
        pe_tutor.nombre AS "Tutor",
        c.nombre_carrera AS "Carrera"
    FROM 
        proyecto p
    JOIN 
        asignacion a ON p.id_asignacion = a.id_asignacion
    JOIN 
        estudiante e ON a.id_estudiante = e.id_estudiante
    JOIN 
        persona pe_autor ON e.id_persona = pe_autor.id_persona
    JOIN 
        tutor t ON a.id_tutor = t.id_tutor
    JOIN 
        persona pe_tutor ON t.persona_id_persona = pe_tutor.id_persona
    JOIN 
        gestion g ON a.id_gestion = g.id_gestion
    JOIN 
        carrera c ON p.carrera_id = c.id
    WHERE 
        c.nombre_carrera LIKE (?);`;
    db.query(q,[`%${carrera}%`], (err,result)=>{
        if(err){
            return res.json({Error: "Error al buscar por Titulo"})
        }
        return res.json({busquedaPorCarrera:result});
    });
});

// Datos por año (hay dos)
app.get('/anioDes',(req,res)=>{
    const q = `
    SELECT 
        p.titulo AS "TítuloDelProyecto",
        p.resumen AS "Resumen",
        g.anio AS "Gestión",
        p.keywords AS "Palabras Clave",
        pe_autor.nombre AS "Autor",
        pe_tutor.nombre AS "Tutor",
        c.nombre_carrera AS "Carrera"
    FROM 
        proyecto p
    JOIN 
        asignacion a ON p.id_asignacion = a.id_asignacion
    JOIN 
        estudiante e ON a.id_estudiante = e.id_estudiante
    JOIN 
        persona pe_autor ON e.id_persona = pe_autor.id_persona
    JOIN 
        tutor t ON a.id_tutor = t.id_tutor
    JOIN 
        persona pe_tutor ON t.persona_id_persona = pe_tutor.id_persona
    JOIN 
        gestion g ON a.id_gestion = g.id_gestion
    JOIN 
        carrera c ON p.carrera_id = c.id
    ORDER BY 
        g.anio DESC
    LIMIT 5;`;
    db.query(q, (err,result)=>{
        if(err){
            return res.json({Error: "Error al buscar por Titulo"})
        }
        return res.json({anioDes:result});
    });
});

// Busqueda por autor
app.get('/busquedaPorAutor',(req,res)=>{
    const {autor} = req.query;
    const q = `
    SELECT 
        p.titulo AS "TítuloDelProyecto",
        p.resumen AS "Resumen",
        g.anio AS "Gestión",
        p.keywords AS "PalabrasClave",
        pe_autor.nombre AS "Autor",
        pe_tutor.nombre AS "Tutor",
        c.nombre_carrera AS "Carrera"
    FROM 
        proyecto p
    JOIN 
        asignacion a ON p.id_asignacion = a.id_asignacion
    JOIN 
        estudiante e ON a.id_estudiante = e.id_estudiante
    JOIN 
        persona pe_autor ON e.id_persona = pe_autor.id_persona
    JOIN 
        tutor t ON a.id_tutor = t.id_tutor
    JOIN 
        persona pe_tutor ON t.persona_id_persona = pe_tutor.id_persona
    JOIN 
        gestion g ON a.id_gestion = g.id_gestion
    JOIN 
        carrera c ON p.carrera_id = c.id
    WHERE 
        pe_autor.nombre LIKE (?);`;
    db.query(q,[`%${autor}%`], (err,result)=>{
        if(err){
            return res.json({Error: "Error al buscar por Titulo"})
        }
        return res.json({busquedaPorAutor:result});
    });
});

// Traer todos los titulos
app.get('/todoLosTitulos',(req,res)=>{
    // const {titulo} = req.query;
    const q = `
    SELECT 
        p.titulo AS "TítuloDelProyecto",
        p.resumen AS "Resumen",
        g.anio AS "Gestión",
        p.keywords AS "PalabrasClave",
        pe_autor.nombre AS "Autor",
        pe_tutor.nombre AS "Tutor",
        c.nombre_carrera AS "Carrera"
    FROM 
        proyecto p
    JOIN 
        asignacion a ON p.id_asignacion = a.id_asignacion
    JOIN 
        estudiante e ON a.id_estudiante = e.id_estudiante
    JOIN 
        persona pe_autor ON e.id_persona = pe_autor.id_persona
    JOIN 
        tutor t ON a.id_tutor = t.id_tutor
    JOIN 
        persona pe_tutor ON t.persona_id_persona = pe_tutor.id_persona
    JOIN 
        gestion g ON a.id_gestion = g.id_gestion
    JOIN 
        carrera c ON p.carrera_id = c.id;`;
    db.query(q, (err,result)=>{
        if(err){
            return res.json({Error: "Error al buscar por Titulo"})
        }
        return res.json({TodosLosTitulos:result});
    });
});

// DESTACADO
app.get('/destacados',(req,res)=>{
    const q = `
        SELECT 
        p.titulo AS 'TítuloDelProyecto',
        p.resumen AS 'Resumen',
        g.anio AS 'Gestión',
        p.keywords AS 'PalabrasClave',
        pe_autor.nombre AS 'Autor',
        pe_tutor.nombre AS 'Tutor',
        c.nombre_carrera AS 'Carrera',
        SUM(es.valor) AS 'TotalValorEstadísticas'
    FROM 
        proyecto p
    JOIN 
        asignacion a ON p.id_asignacion = a.id_asignacion
    JOIN 
        estudiante e ON a.id_estudiante = e.id_estudiante
    JOIN 
        persona pe_autor ON e.id_persona = pe_autor.id_persona
    JOIN 
        tutor t ON a.id_tutor = t.id_tutor
    JOIN 
        persona pe_tutor ON t.persona_id_persona = pe_tutor.id_persona
    JOIN 
        gestion g ON a.id_gestion = g.id_gestion
    JOIN 
        carrera c ON p.carrera_id = c.id
    JOIN 
        estadisticas es ON p.id_proyecto = es.id_proyecto
    GROUP BY 
        p.id_proyecto, p.titulo, p.resumen, g.anio, p.keywords, pe_autor.nombre, pe_tutor.nombre, c.nombre_carrera
    ORDER BY 
        SUM(es.valor) DESC;`;
    db.query(q, (err,result)=>{
        if(err){
            return res.json({Error: "Error al obtener destacados"})
        }
        return res.json({destacados:result});
    });
});

// para ir a la general
app.get('/general',(req,res)=>{
    const {general} = req.query;
    const q = `
    SELECT 
        p.titulo AS 'TítulodelProyecto',
        p.resumen AS 'Resumen',
        g.anio AS 'Gestión',
        p.keywords AS 'PalabrasClave',
        pe_autor.nombre AS 'Autor',
        pe_tutor.nombre AS 'Tutor',
        c.nombre_carrera AS 'Carrera',
        p.drive_link AS 'EnlaceDeDrive'
    FROM 
        proyecto p
    JOIN 
        asignacion a ON p.id_asignacion = a.id_asignacion
    JOIN 
        estudiante e ON a.id_estudiante = e.id_estudiante
    JOIN 
        persona pe_autor ON e.id_persona = pe_autor.id_persona
    JOIN 
        tutor t ON a.id_tutor = t.id_tutor
    JOIN 
        persona pe_tutor ON t.persona_id_persona = pe_tutor.id_persona
    JOIN 
        gestion g ON a.id_gestion = g.id_gestion
    JOIN 
        carrera c ON p.carrera_id = c.id
    WHERE 
        p.titulo LIKE (?);`;
    db.query(q, [`%${general}%`], (err,result)=>{
        if(err){
            return res.json({Error: "Error al obtener general"})
        }
        return res.json({general:result});
    });
});



app.listen(3000, () => {
    console.log("conectado con el backend");
});
