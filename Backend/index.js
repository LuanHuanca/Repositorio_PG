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
        p.titulo, 
        c.nombre_carrera, 
        pe_est.nombre AS nombre_estudiante, 
        pe_tut.nombre AS nombre_tutor, 
        pe_rel.nombre AS nombre_relator, 
        COUNT(f.id_fase) AS numero_fases, 
        p.resumen, p.drive_link 
    FROM 
        proyecto p 
    JOIN 
        carrera c 
    ON 
        p.carrera_id = c.id 
    JOIN 
        asignacion a 
    ON 
        p.id_asignacion = a.id_asignacion 
    JOIN 
        estudiante e 
    ON 
        a.id_estudiante = e.id_estudiante 
    JOIN 
        persona pe_est 
    ON 
        e.id_persona = pe_est.id_persona 
    JOIN 
        tutor t 
    ON 
        a.id_tutor = t.id_tutor 
    JOIN 
        persona pe_tut 
    ON 
        t.persona_id_persona = pe_tut.id_persona 
    JOIN 
        relator r 
    ON 
        a.id_relador = r.id_relador 
    JOIN 
        persona pe_rel 
    ON 
        r.persona_id_persona = pe_rel.id_persona 
    JOIN 
        presentacion pr 
    ON 
        p.id_proyecto = pr.id_proyecto 
    JOIN 
        fases f 
    ON 
        pr.fases_id_fase = f.id_fase 
    WHERE 
        p.titulo LIKE (?)
    GROUP BY 
        p.titulo, 
        c.nombre_carrera, 
        pe_est.nombre, 
        pe_tut.nombre, 
        pe_rel.nombre, 
        p.resumen, 
        p.drive_link;`;
    db.query(q,[`%${titulo}%`], (err,result)=>{
        if(err){
            return res.json({Error: "Error al buscar por Titulo"})
        }
        return res.json({busquedaPorTitulo:result});
    });
});

// Traer todos los titulos
app.get('/todoLosTitulos',(req,res)=>{
    // const {titulo} = req.query;
    const q = `
    SELECT 
        p.titulo,
        c.nombre_carrera,
        pe_est.nombre AS nombre_estudiante,
        pe_tut.nombre AS nombre_tutor,
        pe_rel.nombre AS nombre_relator,
        COUNT(f.id_fase) AS numero_fases,
        p.resumen,
        p.drive_link
    FROM 
        proyecto p
    JOIN 
        carrera c ON p.carrera_id = c.id
    JOIN 
        asignacion a ON p.id_asignacion = a.id_asignacion
    JOIN 
        estudiante e ON a.id_estudiante = e.id_estudiante
    JOIN 
        persona pe_est ON e.id_persona = pe_est.id_persona
    JOIN 
        tutor t ON a.id_tutor = t.id_tutor
    JOIN 
        persona pe_tut ON t.persona_id_persona = pe_tut.id_persona
    JOIN 
        relator r ON a.id_relador = r.id_relador
    JOIN 
        persona pe_rel ON r.persona_id_persona = pe_rel.id_persona
    JOIN 
        presentacion pr ON p.id_proyecto = pr.id_proyecto
    JOIN 
        fases f ON pr.fases_id_fase = f.id_fase
    GROUP BY 
        p.titulo, c.nombre_carrera, pe_est.nombre, pe_tut.nombre, pe_rel.nombre, p.resumen, p.drive_link;`;
    db.query(q, (err,result)=>{
        if(err){
            return res.json({Error: "Error al buscar por Titulo"})
        }
        return res.json({TodosLosTitulos:result});
    });
});



app.listen(3000, () => {
    console.log("conectado con el backend");
});
