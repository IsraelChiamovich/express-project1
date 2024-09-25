// src/models/postModel.ts

import { v4 } from "uuid"


class Post {
    public id: string
    public createdAt: Date
    public likeBy: string[] = []
    constructor(
        public authorId: string,
        public content: string,
        public hashtag: string[],
        public ref?: string
    ) {
        this.id = v4();
        this.createdAt = new Date();
    }
}

export default Post