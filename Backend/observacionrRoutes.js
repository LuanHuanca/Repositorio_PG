// observacionrRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las observaciones
router.get('/observacionr', (req, res) => {
    db.query('SELECT * FROM observacionr', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las observaciones.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una observación por su ID
router.get('/observaciones/:id', (req, res) => {
    const observacionId = req.params.id;

    db.query('SELECT * FROM observacionr WHERE id_observacionR = ?', [observacionId], (error, results) => {
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
router.post('/observaciones', (req, res) => {
    const { id_relador, comentario, presentacion_id_presentacion } = req.body;

    const sql = 'INSERT INTO observacionr (id_relador, comentario, presentacion_id_presentacion) VALUES (?, ?, ?)';
    const values = [id_relador, comentario, presentacion_id_presentacion];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la observación.' });
            return;
        }

        const id_observacionR = results.insertId;
        res.json({ id_observacionR, id_relador, comentario, presentacion_id_presentacion, message: 'Observación creada con éxito.' });
    });
});

// Actualizar una observación por su ID
router.put('/observaciones/:id', (req, res) => {
    const observacionId = req.params.id;
    const { id_relador, comentario, presentacion_id_presentacion } = req.body;

    db.query('UPDATE observacionr SET id_relador = ?, comentario = ?, presentacion_id_presentacion = ? WHERE id_observacionR = ?', [id_relador, comentario, presentacion_id_presentacion, observacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la observación.' });
            return;
        }
        res.json({ message: 'Observación actualizada con éxito.' });
    });
});

// Eliminar una observación por su ID
router.delete('/observaciones/:id', (req, res) => {
    const observacionId = req.params.id;
    db.query('DELETE FROM observacionr WHERE id_observacionR = ?', [observacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la observación.' });
            return;
        }
        res.json({ message: 'Observación eliminada con éxito.' });
    });
});

module.exports = router;

