// carreraRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las carreras
router.get('/carreras', (req, res) => {
    db.query('SELECT * FROM carrera', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las carreras.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una carrera por su ID
router.get('/carreras/:id', (req, res) => {
    const carreraId = req.params.id;

    db.query('SELECT * FROM carrera WHERE id = ?', [carreraId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la carrera.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Carrera no encontrada.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear una nueva carrera
router.post('/carreras', (req, res) => {
    const { nombre_carrera } = req.body;

    const sql = 'INSERT INTO carrera (nombre_carrera) VALUES (?)';
    const values = [nombre_carrera];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la carrera.' });
            return;
        }

        const id = results.insertId;
        res.json({ id, nombre_carrera, message: 'Carrera creada con éxito.' });
    });
});

// Actualizar una carrera por su ID
router.put('/carreras/:id', (req, res) => {
    const carreraId = req.params.id;
    const { nombre_carrera } = req.body;

    db.query('UPDATE carrera SET nombre_carrera = ? WHERE id = ?', [nombre_carrera, carreraId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la carrera.' });
            return;
        }
        res.json({ message: 'Carrera actualizada con éxito.' });
    });
});

// Eliminar una carrera por su ID
router.delete('/carreras/:id', (req, res) => {
    const carreraId = req.params.id;
    db.query('DELETE FROM carrera WHERE id = ?', [carreraId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la carrera.' });
            return;
        }
        res.json({ message: 'Carrera eliminada con éxito.' });
    });
});

module.exports = router;

