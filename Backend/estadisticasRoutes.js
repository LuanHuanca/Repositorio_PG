// estadisticasRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las estadísticas
router.get('/estadisticas', (req, res) => {
    db.query('SELECT * FROM estadisticas', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las estadísticas.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una estadística por su ID
router.get('/estadisticas/:id', (req, res) => {
    const estadisticaId = req.params.id;

    db.query('SELECT * FROM estadisticas WHERE id_estadistica = ?', [estadisticaId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la estadística.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Estadística no encontrada.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear una nueva estadística
router.post('/estadisticas', (req, res) => {
    const { id_proyecto, tipo_metrica, valor, fecha, proyecto_id_proyecto } = req.body;

    const sql = 'INSERT INTO estadisticas (id_proyecto, tipo_metrica, valor, fecha, proyecto_id_proyecto) VALUES (?, ?, ?, ?, ?)';
    const values = [id_proyecto, tipo_metrica, valor, fecha, proyecto_id_proyecto];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la estadística.' });
            return;
        }

        const id_estadistica = results.insertId;
        res.json({ id_estadistica, id_proyecto, tipo_metrica, valor, fecha, proyecto_id_proyecto, message: 'Estadística creada con éxito.' });
    });
});

// Actualizar una estadística por su ID
router.put('/estadisticas/:id', (req, res) => {
    const estadisticaId = req.params.id;
    const { id_proyecto, tipo_metrica, valor, fecha, proyecto_id_proyecto } = req.body;

    db.query('UPDATE estadisticas SET id_proyecto = ?, tipo_metrica = ?, valor = ?, fecha = ?, proyecto_id_proyecto = ? WHERE id_estadistica = ?', [id_proyecto, tipo_metrica, valor, fecha, proyecto_id_proyecto, estadisticaId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la estadística.' });
            return;
        }
        res.json({ message: 'Estadística actualizada con éxito.' });
    });
});

// Eliminar una estadística por su ID
router.delete('/estadisticas/:id', (req, res) => {
    const estadisticaId = req.params.id;
    db.query('DELETE FROM estadisticas WHERE id_estadistica = ?', [estadisticaId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la estadística.' });
            return;
        }
        res.json({ message: 'Estadística eliminada con éxito.' });
    });
});

module.exports = router;


