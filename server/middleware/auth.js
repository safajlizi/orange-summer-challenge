/*const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token']; 
  if (!token) {
    return res.status(403).send("Un token est requis pour l'authentication");
  }
  try {
    const veriedToken = jwt.verify(token, config.TOKEN_KEY);
    req.user = veriedToken;
  } catch (err) {
    return res.status(401).send("Votre token n'est pas valide !!!");
  }
  return next();
};

module.exports = verifyToken;*/