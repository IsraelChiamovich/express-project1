// src/server.ts

import express, { Express } from "express";
import userRouter from "./routes/userRouter";
import postRouter from "./routes/postRouter";
import "dotenv/config";

const app: Express = express();

app.use(express.json());

// שימוש בראוטרים המופרדים
app.use("/user", userRouter);
app.use("/post", postRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
});
