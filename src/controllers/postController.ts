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

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const posts = await PostService.getAllPosts();
            res.status(200).json({
                err: false,
                posts,
            });
        } catch (err) {
            res.status(500).json({
                err: true,
                message: (err as Error).message,
            });
        }
    }

    async getPostBySearch(req: Request, res: Response): Promise<void> {
        try {
            const contentSearch: string = req.query.content as string; // תוקן שם המשתנה מ-contentSerch ל-contentSearch
            const posts = await PostService.getPostByWord(contentSearch);
            res.status(200).json({
                err: false,
                posts,
            });
        } catch (err) {
            res.status(500).json({
                err: true,
                message: (err as Error).message,
            });
        }
    }

    async getPostById(req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;
            const post = await PostService.getPostById(id);
            res.status(200).json({
                err: false,
                post,
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
