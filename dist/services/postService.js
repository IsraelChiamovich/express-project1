"use strict";
// src/services/postService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileDataLayer_1 = require("../config/fileDataLayer");
const postModel_1 = __importDefault(require("../models/postModel"));
class PostService {
    static createNewPost(newPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorId, content, hashtag } = newPost;
            const post = new postModel_1.default(authorId, content, hashtag);
            const posts = yield (0, fileDataLayer_1.getFileData)('posts');
            if (!posts) {
                throw new Error('posts not found');
            }
            posts.push(post);
            yield (0, fileDataLayer_1.saveFileData)('posts', posts);
        });
    }
    static getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield (0, fileDataLayer_1.getFileData)('posts');
                return posts;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield (0, fileDataLayer_1.getFileData)('posts');
                const post = posts.find(post => post.id === id);
                if (!post) {
                    throw new Error('post not found');
                }
                return post;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static getPostByWord(word) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield (0, fileDataLayer_1.getFileData)('posts');
                const filteredPosts = posts.filter(post => post.content.includes(word));
                return filteredPosts;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = PostService;
//# sourceMappingURL=postService.js.map