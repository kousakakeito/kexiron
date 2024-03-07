"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const publicPath = path_1.default.join(__dirname, '..', 'Public');
app.use(express_1.default.static(publicPath));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const accessKeyController_1 = __importDefault(require("../Public/controllers/accessKeyController"));
app.use(accessKeyController_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
