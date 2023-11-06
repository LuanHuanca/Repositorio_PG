// tutorRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todos los tutores
router.get('/tutores', (req, res) => {
    db.query('SELECT * FROM tutor', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener los tutores.' });
            return;
        }
        res.json(results);
    });
});

// Obtener un tutor por su ID
router.get('/tutores/:id', (req, res) => {
    const tutorId = req.params.id;

    db.query('SELECT * FROM tutor WHERE id_tutor = ?', [tutorId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener el tutor.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Tutor no encontrado.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear un nuevo tutor
router.post('/tutores', (req, res) => {
    const { persona_id_persona } = req.body;

    const sql = 'INSERT INTO tutor (persona_id_persona) VALUES (?)';
    const values = [persona_id_persona];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear el tutor.' });
            return;
        }

        const id_tutor = results.insertId;
        res.json({ id_tutor, persona_id_persona, message: 'Tutor creado con éxito.' });
    });
});

// Actualizar un tutor por su ID
router.put('/tutores/:id', (req, res) => {
    const tutorId = req.params.id;
    const { persona_id_persona } = req.body;

    db.query('UPDATE tutor SET persona_id_persona = ? WHERE id_tutor = ?', [persona_id_persona, tutorId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar el tutor.' });
            return;
        }
        res.json({ message: 'Tutor actualizado con éxito.' });
    });
});

// Eliminar un tutor por su ID
router.delete('/tutores/:id', (req, res) => {
    const tutorId = req.params.id;
    db.query('DELETE FROM tutor WHERE id_tutor = ?', [tutorId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el tutor.' });
            return;
        }
        res.json({ message: 'Tutor eliminado con éxito.' });
    });
});

module.exports = router;


