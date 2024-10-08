"use strict";
// src/controllers/userController.ts
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
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password, email, birthday, avatarUrl } = req.body;
                yield userService_1.default.createNewUser({ username, password, email, birthday, avatarUrl });
                res.status(201).json({
                    err: false,
                    message: "User created successfully!",
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
    follow(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, followingId } = req.body;
                yield userService_1.default.followUser(userId, followingId);
                res.status(200).json({
                    err: false,
                    message: "User followed successfully!",
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
exports.default = new UserController();
//# sourceMappingURL=userController.js.map