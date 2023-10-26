
// personaRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las personas
router.get('/personas', (req, res) => {
    db.query('SELECT * FROM persona', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las personas.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una persona por su ID
router.get('/personas/:id', (req, res) => {
    const personaId = req.params.id;

    db.query('SELECT * FROM persona WHERE id_persona = ?', [personaId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la persona.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Persona no encontrada.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear una nueva persona
router.post('/personas', (req, res) => {
    const { nombre, edad, profesion, correo } = req.body;

    const sql = 'INSERT INTO persona (nombre, edad, profesion, correo) VALUES (?, ?, ?, ?)';
    const values = [nombre, edad, profesion, correo];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la persona.' });
            return;
        }

        const id_persona = results.insertId;
        res.json({ id_persona, nombre, edad, profesion, correo, message: 'Persona creada con éxito.' });
    });
});

// Actualizar una persona por su ID
router.put('/personas/:id', (req, res) => {
    const personaId = req.params.id;
    const { nombre, edad, profesion, correo } = req.body;

    db.query('UPDATE persona SET nombre = ?, edad = ?, profesion = ?, correo = ? WHERE id_persona = ?', [nombre, edad, profesion, correo, personaId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la persona.' });
            return;
        }
        res.json({ message: 'Persona actualizada con éxito.' });
    });
});

// Eliminar una persona por su ID
router.delete('/personas/:id', (req, res) => {
    const personaId = req.params.id;
    db.query('DELETE FROM persona WHERE id_persona = ?', [personaId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la persona.' });
            return;
        }
        res.json({ message: 'Persona eliminada con éxito.' });
    });
});

module.exports = router;

