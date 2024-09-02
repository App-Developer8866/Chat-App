import jwt from 'jsonwebtoken';

const generateJwtAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });

  res.cookie('jwt_token', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // Prevent from XSS attacks
    sameSite: 'strict', // Prevent from CSRF attacks
    secure: process.env.MODE_ENV !== 'development',
  });
};

export default generateJwtAndSetCookie;
