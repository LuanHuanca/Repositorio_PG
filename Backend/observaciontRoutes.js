// observaciontRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las observaciones
router.get('/observaciont', (req, res) => {
    db.query('SELECT * FROM observaciont', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las observaciones.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una observación por su ID
router.get('/observacionesT/:id', (req, res) => {
    const observacionId = req.params.id;

    db.query('SELECT * FROM observaciont WHERE id_observacionT = ?', [observacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la observación.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Observación no encontrada.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear una nueva observación
router.post('/observacionesT', (req, res) => {
    const { id_tutor, comentario, presentacion_id_presentacion } = req.body;

    const sql = 'INSERT INTO observaciont (id_tutor, comentario, presentacion_id_presentacion) VALUES (?, ?, ?)';
    const values = [id_tutor, comentario, presentacion_id_presentacion];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la observación.' });
            return;
        }

        const id_observacionT = results.insertId;
        res.json({ id_observacionT, id_tutor, comentario, presentacion_id_presentacion, message: 'Observación creada con éxito.' });
    });
});

// Actualizar una observación por su ID
router.put('/observacionesT/:id', (req, res) => {
    const observacionId = req.params.id;
    const { id_tutor, comentario, presentacion_id_presentacion } = req.body;

    db.query('UPDATE observaciont SET id_tutor = ?, comentario = ?, presentacion_id_presentacion = ? WHERE id_observacionT = ?', [id_tutor, comentario, presentacion_id_presentacion, observacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la observación.' });
            return;
        }
        res.json({ message: 'Observación actualizada con éxito.' });
    });
});

// Eliminar una observación por su ID
router.delete('/observacionesT/:id', (req, res) => {
    const observacionId = req.params.id;
    db.query('DELETE FROM observaciont WHERE id_observacionT = ?', [observacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la observación.' });
            return;
        }
        res.json({ message: 'Observación eliminada con éxito.' });
    });
});

module.exports = router;

