"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const constants_1 = require("../config/constants");
class UrlController {
    async shortner(req, res) {
        const { originURL } = req.body;
        console.log(originURL);
        const hash = shortid_1.default.generate();
        const shortURL = `${constants_1.config.API_URL}/${hash}}`;
        res.json({ originURL, hash, shortURL });
    }
}
exports.default = UrlController;
