"use strict";
// src/controllers/postController.ts
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
const postService_1 = __importDefault(require("../services/postService"));
class PostController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorId, content, hashtag } = req.body;
                yield postService_1.default.createNewPost({ authorId, content, hashtag });
                res.status(201).json({
                    err: false,
                    message: "Post created successfully!",
                });
            }
            catch (err) {
                res.status(500).json({
                    err: true,
                    message: err.message,
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield postService_1.default.getAllPosts();
                res.status(200).json({
                    err: false,
                    posts,
                });
            }
            catch (err) {
                res.status(500).json({
                    err: true,
                    message: err.message,
                });
            }
        });
    }
    getPostBySearch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contentSearch = req.query.content; // תוקן שם המשתנה מ-contentSerch ל-contentSearch
                const posts = yield postService_1.default.getPostByWord(contentSearch);
                res.status(200).json({
                    err: false,
                    posts,
                });
            }
            catch (err) {
                res.status(500).json({
                    err: true,
                    message: err.message,
                });
            }
        });
    }
    getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const post = yield postService_1.default.getPostById(id);
                res.status(200).json({
                    err: false,
                    post,
                });
            }
            catch (err) {
                res.status(500).json({
                    err: true,
                    message: err.message,
                });
            }
        });
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map