const express = require('express');
const crypto = require('crypto');
const app = express();

const validTokens = [];

app.use(express.json());

// Endpoint de login que genera el token
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Faltan credenciales' });
  }

  if (email !== 'admin@empenos.com' || password !== '1234') {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = crypto.createHash('sha256').update(email + password).digest('hex');

  if (!validTokens.includes(token)) {
    validTokens.push(token);
  }

  res.json({ token });
});

// Nuevo endpoint que valida si el token es válido
app.post('/verify-token', (req, res) => {
  const { token } = req.body;

  if (validTokens.includes(token)) {
    res.json({ valid: true });
  } else {
    res.status(403).json({ valid: false });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`AuthService corriendo en puerto ${PORT}`);
});
