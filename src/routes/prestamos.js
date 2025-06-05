const express = require('express');
const router = express.Router();
const materiales = require('../data/materiales');

router.get('/prestamo', (req, res) => {
  const { id, gramos } = req.query;

  if (!id || !gramos || !materiales[id]) {
    return res.status(400).json({ error: "ID o gramos inválidos." });
  }

  const precio = materiales[id];
  const montoPrestamo = (gramos * precio) * 0.80;

  res.json({ id, gramos, montoPrestamo });
});

module.exports = router;
