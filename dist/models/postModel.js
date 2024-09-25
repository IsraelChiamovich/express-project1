"use strict";
// src/models/postModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Post {
    constructor(authorId, content, hashtag, ref) {
        this.authorId = authorId;
        this.content = content;
        this.hashtag = hashtag;
        this.ref = ref;
        this.likeBy = [];
        this.id = (0, uuid_1.v4)();
        this.createdAt = new Date();
    }
}
exports.default = Post;
//# sourceMappingURL=postModel.js.map