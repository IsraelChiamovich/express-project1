"use strict";
// src/routes/postRouter.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = __importDefault(require("../controllers/postController"));
const postRouter = (0, express_1.Router)();
postRouter.post('/create', postController_1.default.create);
postRouter.get('/getAll', postController_1.default.getAll);
postRouter.get('/search', postController_1.default.getPostBySearch);
postRouter.get('/:id', postController_1.default.getPostById);
exports.default = postRouter;
//# sourceMappingURL=postRouter.js.map