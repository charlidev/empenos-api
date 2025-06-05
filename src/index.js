const express = require('express');
const app = express();
const prestamosRoutes = require('./routes/prestamos');

app.use(express.json());
app.use('/api', prestamosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});