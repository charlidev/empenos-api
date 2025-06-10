//importando express
const express = require('express');
const app = express();
const path = require('path');

// Importando las rutas de prestamos
const prestamosRoutes = require('./routes/prestamos');
app.use('/api', prestamosRoutes);

// Accede a la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

// levantando el servidor en puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});