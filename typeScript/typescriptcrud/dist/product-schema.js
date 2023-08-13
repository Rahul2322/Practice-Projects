"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prouct = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
exports.Prouct = new mongoose_2.Schema({
    id: { type: mongoose_1.default.Schema.Types.ObjectId, required: false },
    productName: { type: String },
    productDescription: { type: String },
    productCode: { type: String },
    productRating: { type: Number },
});
const products = mongoose_1.default.model('product', exports.Prouct);
exports.default = products;
