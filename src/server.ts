// src/server.ts

import exp, { Express } from "express";
import authController from "./controllers/authController.js";
import userController from "./controllers/userController.js";
import postController from "./controllers/postController.js"
import "dotenv/config";

const app: Express = exp();

app.use("/auth", authController);
app.use("/user", userController);
app.use("/post", postController);

app.listen(process.env.PORT, (): void => {
    console.log(`Server is running on port ${process.env.PORT}`);
});