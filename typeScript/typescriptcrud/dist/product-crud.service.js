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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProducts = exports.getAllProducts = void 0;
const product_1 = require("./product");
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return product_1.products;
});
exports.getAllProducts = getAllProducts;
const createProducts = (product) => __awaiter(void 0, void 0, void 0, function* () {
    product_1.products.push(product);
});
exports.createProducts = createProducts;
const updateProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    let index = product_1.products.findIndex(d => product.id === d.id);
    if (index > 0 || index == 0) {
        product_1.products[index]['productName'] = product['productName'];
        product_1.products[index]['productCode'] = product['productCode'];
        product_1.products[index]['prodRating'] = product['prodRating'];
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let index = product_1.products.findIndex(d => d.id === id);
    if (index > 0 || index == 0) {
        product_1.products.splice(index, 1);
    }
});
exports.deleteProduct = deleteProduct;
