// src/routes/userRouter.ts

import { Router } from "express";
import UserController from "../controllers/userController";

const userRouter: Router = Router();

userRouter.post('/register', UserController.register);

export default userRouter;
