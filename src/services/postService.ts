// src/services/postService.ts

import { getFileData, saveFileData } from "../config/fileDataLayer";
import NewPostDto from "../DTO/newPostDto";
import Post from "../models/postModel";

class PostService {
    public static async createNewPost(newPost: NewPostDto): Promise<void> {
        const { authorId, content, hashtag} = newPost;
        const post = new Post(authorId, content, hashtag);
        const posts = await getFileData('posts');
        if (!posts) {
            throw new Error('posts not found');
        }
        posts.push(post);
        await saveFileData('posts', posts);
    }
}

export default PostService