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

    public static async getAllPosts(): Promise<Post[]> {
        try{
            const posts: Post[] = await getFileData('posts');
            return posts;
        } catch(err) {
            throw err
        }
    }

    public static async getPostById(id: string): Promise<Post> {
        try{
            const posts: Post[] = await getFileData('posts');
            const post = posts.find(post => post.id === id);
            if (!post) {
                throw new Error('post not found');
            }
            return post;
        } catch(err) {
            throw err
        }
    }

    public static async getPostByWord(word: string): Promise<Post[]> {
        try{
            const posts: Post[] = await getFileData('posts');
            const filteredPosts = posts.filter(post => post.content.includes(word));
            return filteredPosts;
        } catch(err) {
            throw err
        }
    }
}

export default PostService