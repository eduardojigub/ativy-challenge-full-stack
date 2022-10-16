import jwt from 'jsonwebtoken';

// middleware que se o jwt existe e está no cookie de access_token;

export default (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.json('no token available');
  }
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json('Invalid Token');
    }
    req.user = decoded;
    return next();
  });
};
