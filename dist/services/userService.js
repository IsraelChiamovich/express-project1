"use strict";
// src/services/userService.ts
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
const userModel_1 = __importDefault(require("../models/userModel"));
const fileDataLayer_1 = require("../config/fileDataLayer");
class UserService {
    static createNewUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password, email, birthday, avatarUrl } = newUser;
            const user = new userModel_1.default(username, password, email, birthday, avatarUrl);
            const users = yield (0, fileDataLayer_1.getFileData)('users');
            if (!users) {
                throw new Error('users not found');
            }
            users.push(user);
            yield (0, fileDataLayer_1.saveFileData)('users', users);
        });
    }
    static followUser(followerId, followingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, fileDataLayer_1.getFileData)('users');
            const user = users.find(user => user.id === followingId);
            const userToFollow = users.find(user => user.id === followerId);
            if (!user || !userToFollow) {
                throw new Error('user not found');
            }
            if (!user.followers.includes(followerId)) {
                user.followers.push(followerId);
                userToFollow.following.push(followingId);
                yield (0, fileDataLayer_1.saveFileData)('users', users);
            }
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map