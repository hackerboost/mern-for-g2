import express from 'express';
import { loginUser, logoutUser, registerUser, updateUser } from '../controllers/user.controllers.js';

const userRouter = express.Router()

userRouter.post('/signup', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/logout', logoutUser);
userRouter.put('/update/:id', updateUser);

export default userRouter;