module.exports = function (req, res, next) {
  const token = req.headers['authorization'];
  const expectedToken = '536ba5f66b4c3d0397ff7301887370ce62333340e8a545b4bc067de1bfb963f0';

  if (token === expectedToken) {
    next();
  } else {
    res.status(403).json({ error: 'Token inválido o faltante' });
  }
};
