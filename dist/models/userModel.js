"use strict";
// src/models/userModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(username, password, email, birthday, avatarUrl) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthday = birthday;
        this.avatarUrl = avatarUrl;
        this.followers = [];
        this.following = [];
        this.isLockedAccount = false;
        this.token = "";
        this.id = (0, uuid_1.v4)();
    }
}
exports.default = User;
//# sourceMappingURL=userModel.js.map