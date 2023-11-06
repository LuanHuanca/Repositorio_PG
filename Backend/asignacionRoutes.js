// asignacionRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todas las asignaciones
router.get('/asignaciones', (req, res) => {
    db.query('SELECT * FROM asignacion', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las asignaciones.' });
            return;
        }
        res.json(results);
    });
});

// Obtener una asignacion por su ID
router.get('/asignaciones/:id', (req, res) => {
    const asignacionId = req.params.id;

    db.query('SELECT * FROM asignacion WHERE id_asignacion = ?', [asignacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la asignacion.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Asignacion no encontrada.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear una nueva asignacion
router.post('/asignaciones', (req, res) => {
    const { id_estudiante, id_tutor, id_relador, id_gestion, gestion_id_gestion } = req.body;

    const sql = 'INSERT INTO asignacion (id_estudiante, id_tutor, id_relador, id_gestion, gestion_id_gestion) VALUES (?, ?, ?, ?, ?)';
    const values = [id_estudiante, id_tutor, id_relador, id_gestion, gestion_id_gestion];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la asignacion.' });
            return;
        }

        const id_asignacion = results.insertId;
        res.json({ id_asignacion, id_estudiante, id_tutor, id_relador, id_gestion, gestion_id_gestion, message: 'Asignacion creada con éxito.' });
    });
});

// Actualizar una asignacion por su ID
router.put('/asignaciones/:id', (req, res) => {
    const asignacionId = req.params.id;
    const { id_estudiante, id_tutor, id_relador, id_gestion, gestion_id_gestion } = req.body;

    db.query('UPDATE asignacion SET id_estudiante = ?, id_tutor = ?, id_relador = ?, id_gestion = ?, gestion_id_gestion = ? WHERE id_asignacion = ?', [id_estudiante, id_tutor, id_relador, id_gestion, gestion_id_gestion, asignacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la asignacion.' });
            return;
        }
        res.json({ message: 'Asignacion actualizada con éxito.' });
    });
});

// Eliminar una asignacion por su ID
router.delete('/asignaciones/:id', (req, res) => {
    const asignacionId = req.params.id;
    db.query('DELETE FROM asignacion WHERE id_asignacion = ?', [asignacionId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la asignacion.' });
            return;
        }
        res.json({ message: 'Asignacion eliminada con éxito.' });
    });
});

module.exports = router;


