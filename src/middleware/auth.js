const axios = require('axios');

module.exports = async function (req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Token faltante' });
  }

  try {
    const response = await axios.post('http://localhost:4000/verify-token', { token });

    if (response.data.valid) {
      next();
    } else {
      res.status(403).json({ error: 'Token inválido' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al verificar el token' });
  }
};
