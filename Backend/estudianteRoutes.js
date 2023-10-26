// estudianteRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todos los estudiantes
router.get('/estudiantes', (req, res) => {
    db.query('SELECT * FROM estudiante', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener los estudiantes.' });
            return;
        }
        res.json(results);
    });
});

// Obtener un estudiante por su ID
router.get('/estudiantes/:id', (req, res) => {
    const estudianteId = req.params.id;

    db.query('SELECT * FROM estudiante WHERE id_estudiante = ?', [estudianteId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener el estudiante.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Estudiante no encontrado.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear un nuevo estudiante
router.post('/estudiantes', (req, res) => {
    const { id_persona, carrera } = req.body;

    const sql = 'INSERT INTO estudiante (id_persona, carrera) VALUES (?, ?)';
    const values = [id_persona, carrera];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear el estudiante.' });
            return;
        }

        const id_estudiante = results.insertId;
        res.json({ id_estudiante, id_persona, carrera, message: 'Estudiante creado con éxito.' });
    });
});

// Actualizar un estudiante por su ID
router.put('/estudiantes/:id', (req, res) => {
    const estudianteId = req.params.id;
    const { id_persona, carrera } = req.body;

    db.query('UPDATE estudiante SET id_persona = ?, carrera = ? WHERE id_estudiante = ?', [id_persona, carrera, estudianteId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar el estudiante.' });
            return;
        }
        res.json({ message: 'Estudiante actualizado con éxito.' });
    });
});

// Eliminar un estudiante por su ID
router.delete('/estudiantes/:id', (req, res) => {
    const estudianteId = req.params.id;
    db.query('DELETE FROM estudiante WHERE id_estudiante = ?', [estudianteId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el estudiante.' });
            return;
        }
        res.json({ message: 'Estudiante eliminado con éxito.' });
    });
});

module.exports = router;



