// presentacionRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las presentaciones
router.get('/presentaciones', (req, res) => {
    db.query('SELECT * FROM presentacion', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las presentaciones.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una presentación por su ID
router.get('/presentaciones/:id', (req, res) => {
    const presentacionId = req.params.id;

    db.query('SELECT * FROM presentacion WHERE id_presentacion = ?', [presentacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la presentación.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Presentación no encontrada.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear una nueva presentación
router.post('/presentaciones', (req, res) => {
    const { id_proyecto, fecha_presentacion, fases_id_fase } = req.body;

    const sql = 'INSERT INTO presentacion (id_proyecto, fecha_presentacion, fases_id_fase) VALUES (?, ?, ?)';
    const values = [id_proyecto, fecha_presentacion, fases_id_fase];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la presentación.' });
            return;
        }

        const id_presentacion = results.insertId;
        res.json({ id_presentacion, id_proyecto, fecha_presentacion, fases_id_fase, message: 'Presentación creada con éxito.' });
    });
});

// Actualizar una presentación por su ID
router.put('/presentaciones/:id', (req, res) => {
    const presentacionId = req.params.id;
    const { id_proyecto, fecha_presentacion, fases_id_fase } = req.body;

    db.query('UPDATE presentacion SET id_proyecto = ?, fecha_presentacion = ?, fases_id_fase = ? WHERE id_presentacion = ?', [id_proyecto, fecha_presentacion, fases_id_fase, presentacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la presentación.' });
            return;
        }
        res.json({ message: 'Presentación actualizada con éxito.' });
    });
});

// Eliminar una presentación por su ID
router.delete('/presentaciones/:id', (req, res) => {
    const presentacionId = req.params.id;
    db.query('DELETE FROM presentacion WHERE id_presentacion = ?', [presentacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la presentación.' });
            return;
        }
        res.json({ message: 'Presentación eliminada con éxito.' });
    });
});

module.exports = router;


