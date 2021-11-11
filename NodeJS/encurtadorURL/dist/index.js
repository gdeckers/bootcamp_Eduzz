"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_controller_1 = __importDefault(require("./controllers/url.controller"));
const api = (0, express_1.default)();
api.use(express_1.default.json());
const urlController = new url_controller_1.default();
api.post('/shortner', urlController.shortner);
api.get('/test', () => console.log('testando'));
api.listen(5000, () => console.log('Servidor rodando...'));
