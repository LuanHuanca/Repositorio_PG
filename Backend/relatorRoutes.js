// relatorRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Importa la conexión a la base de datos

// Obtener todos los relatores
router.get('/relatores', (req, res) => {
    db.query('SELECT * FROM relator', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener los relatores.' });
            return;
        }
        res.json(results);
    });
});

// Obtener un relator por su ID
router.get('/relatores/:id', (req, res) => {
    const relatorId = req.params.id;

    db.query('SELECT * FROM relator WHERE id_relador = ?', [relatorId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener el relator.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Relator no encontrado.' });
            return;
        }
        res.json(results[0]);
    });
});

// Crear un nuevo relator
router.post('/relatores', (req, res) => {
    const { persona_id_persona } = req.body;

    const sql = 'INSERT INTO relator (persona_id_persona) VALUES (?)';
    const values = [persona_id_persona];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear el relator.' });
            return;
        }

        const id_relador = results.insertId;
        res.json({ id_relador, persona_id_persona, message: 'Relator creado con éxito.' });
    });
});

// Actualizar un relator por su ID
router.put('/relatores/:id', (req, res) => {
    const relatorId = req.params.id;
    const { persona_id_persona } = req.body;

    db.query('UPDATE relator SET persona_id_persona = ? WHERE id_relador = ?', [persona_id_persona, relatorId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar el relator.' });
            return;
        }
        res.json({ message: 'Relator actualizado con éxito.' });
    });
});

// Eliminar un relator por su ID
router.delete('/relatores/:id', (req, res) => {
    const relatorId = req.params.id;
    db.query('DELETE FROM relator WHERE id_relador = ?', [relatorId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el relator.' });
            return;
        }
        res.json({ message: 'Relator eliminado con éxito.' });
    });
});

module.exports = router;

