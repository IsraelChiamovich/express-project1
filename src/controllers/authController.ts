// src/controllers/authController.ts

import exp, { Router, Request, Response } from "express";
const router: Router = exp.Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({
                err: true,
                message: "Email and password are required",
            });
            return;
        }

        res.status(200).json({
            err: false,
            message: "Login successful!",
        });
    } catch (err: any) {
        res.status(500).json({
            err: true,
            message: err.message,
        });
    }
});

export default router;
