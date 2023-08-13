"use strict";
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
exports.deleteProduct = exports.updateproduct = exports.createProduct = exports.getProductList = void 0;
const product_schema_1 = __importDefault(require("./product-schema"));
const getProductList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productList = yield product_schema_1.default.find();
        res.status(200).json({ msg: "Success", result: productList });
    }
    catch (error) {
        res.status(404).json({ msg: "Not Found" });
    }
});
exports.getProductList = getProductList;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('hello');
        const product = req.body;
        console.log('product', product);
        const create = yield product_schema_1.default.create(product);
        console.log(create);
        res.status(201).json({ msg: "SuccessFully Created", result: create });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
exports.createProduct = createProduct;
const updateproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const update = yield product_schema_1.default.updateOne(product);
        res.status(201).json({ msg: "Updated Successfully", result: update });
    }
    catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
});
exports.updateproduct = updateproduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productCode = req.body.code;
        const delProduct = yield product_schema_1.default.deleteOne({ productCode });
        res.status(200).json({ msg: "Deleted Successfully", result: delProduct });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
exports.deleteProduct = deleteProduct;
