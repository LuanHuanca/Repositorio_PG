// fasesRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las fases
router.get('/fases', (req, res) => {
    db.query('SELECT * FROM fases', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las fases.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una fase por su ID
router.get('/fases/:id', (req, res) => {
    const faseId = req.params.id;

    db.query('SELECT * FROM fases WHERE id_fase = ?', [faseId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la fase.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Fase no encontrada.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear una nueva fase
router.post('/fases', (req, res) => {
    const { fase } = req.body;

    const sql = 'INSERT INTO fases (fase) VALUES (?)';
    const values = [fase];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la fase.' });
            return;
        }

        const id_fase = results.insertId;
        res.json({ id_fase, fase, message: 'Fase creada con éxito.' });
    });
});

// Actualizar una fase por su ID
router.put('/fases/:id', (req, res) => {
    const faseId = req.params.id;
    const { fase } = req.body;

    db.query('UPDATE fases SET fase = ? WHERE id_fase = ?', [fase, faseId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la fase.' });
            return;
        }
        res.json({ message: 'Fase actualizada con éxito.' });
    });
});

// Eliminar una fase por su ID
router.delete('/fases/:id', (req, res) => {
    const faseId = req.params.id;
    db.query('DELETE FROM fases WHERE id_fase = ?', [faseId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la fase.' });
            return;
        }
        res.json({ message: 'Fase eliminada con éxito.' });
    });
});

module.exports = router;

