const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validación básica
  if (!email || !password) {
    return res.status(400).json({ error: 'Faltan credenciales' });
  }

  // Simulamos validación de usuario
  if (email !== 'dani@empenos.com' || password !== '1234') {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  // Generar token con SHA-256
  const token = crypto
    .createHash('sha256')
    .update(email + password)
    .digest('hex');

  return res.json({ token });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`AuthService corriendo en puerto ${PORT}`);
});
