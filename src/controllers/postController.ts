// src/controllers/postController.ts

import { Request, Response } from "express";
import PostService from "../services/postService";

class PostController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { authorId, content, hashtag } = req.body;
            await PostService.createNewPost({ authorId, content, hashtag });
            res.status(201).json({
                err: false,
                message: "Post created successfully!",
            });
        } catch (err) {
            res.status(500).json({
                err: true,
                message: (err as Error).message,
            });
        }
    }
}

export default new PostController();
