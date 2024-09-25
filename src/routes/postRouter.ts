// src/routes/postRouter.ts

import { Router } from "express";
import PostController from "../controllers/postController";

const postRouter: Router = Router();

postRouter.post('/create', PostController.create);

postRouter.get('/getAll', PostController.getAll);

postRouter.get('/search', PostController.getPostBySearch);

postRouter.get('/:id', PostController.getPostById);

export default postRouter;
