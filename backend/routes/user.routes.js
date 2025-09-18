import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/user.controllers.js';

const userRouter = express.Router()

userRouter.post('/signup', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/logout', logoutUser);

export default userRouter;