const express = require('express');
const app = express();
const path = require('path');

// Importar rutas y middleware
const prestamosRoutes = require('./routes/prestamos');
const authMiddleware = require('./middleware/auth');

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, '../public')));

// Aplicar autenticación a todas las rutas /api/*
app.use('/api', authMiddleware, prestamosRoutes);

// Escuchar en localhost para pruebas locales
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
