import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
  const SECRET_KEY = process.env.JWT_SECRET_KEY;
  const time = new Date();

  const payload = { id: userId, date: time };

  console.log("Token payload:", payload);

  const token = jwt.sign(payload, SECRET_KEY, { 
    expiresIn: '7d' 
});

res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax', // Adjust based on your requirements
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
});

    return token;
};