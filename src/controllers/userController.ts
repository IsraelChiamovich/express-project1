// src/controllers/userController.ts

import { Request, Response } from "express";
import NewUserDto from "../DTO/newUserDto";
import UserService from "../services/userService";

class UserController {
    async register(req: Request<any, any, NewUserDto>, res: Response): Promise<void> {
        try {
            const { username, password, email, birthday, avatarUrl } = req.body;
            await UserService.createNewUser({ username, password, email, birthday, avatarUrl });
            res.status(201).json({
                err: false,
                message: "User created successfully!",
            });
        } catch (err) {
            res.status(500).json({
                err: true,
                message: (err as Error).message,
            });
        }
    }
}

export default new UserController();
