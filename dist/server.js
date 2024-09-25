"use strict";
// src/server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const postRouter_1 = __importDefault(require("./routes/postRouter"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// שימוש בראוטרים המופרדים
app.use("/user", userRouter_1.default);
app.use("/post", postRouter_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map