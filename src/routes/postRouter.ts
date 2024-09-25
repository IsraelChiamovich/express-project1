// src/routes/postRouter.ts

import { Router } from "express";
import PostController from "../controllers/postController";

const postRouter: Router = Router();

postRouter.post('/create', PostController.create);

export default postRouter;
