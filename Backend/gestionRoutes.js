// gestionRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las gestiones
router.get('/gestiones', (req, res) => {
    db.query('SELECT * FROM gestion', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las gestiones.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una gestión por su ID
router.get('/gestiones/:id', (req, res) => {
    const gestionId = req.params.id;

    db.query('SELECT * FROM gestion WHERE id_gestion = ?', [gestionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la gestión.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Gestión no encontrada.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear una nueva gestión
router.post('/gestiones', (req, res) => {
    const { anio } = req.body;

    const sql = 'INSERT INTO gestion (anio) VALUES (?)';
    const values = [anio];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la gestión.' });
            return;
        }

        const id_gestion = results.insertId;
        res.json({ id_gestion, anio, message: 'Gestión creada con éxito.' });
    });
});

// Actualizar una gestión por su ID
router.put('/gestiones/:id', (req, res) => {
    const gestionId = req.params.id;
    const { anio } = req.body;

    db.query('UPDATE gestion SET anio = ? WHERE id_gestion = ?', [anio, gestionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la gestión.' });
            return;
        }
        res.json({ message: 'Gestión actualizada con éxito.' });
    });
});

// Eliminar una gestión por su ID
router.delete('/gestiones/:id', (req, res) => {
    const gestionId = req.params.id;
    db.query('DELETE FROM gestion WHERE id_gestion = ?', [gestionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la gestión.' });
            return;
        }
        res.json({ message: 'Gestión eliminada con éxito.' });
    });
});

module.exports = router;

