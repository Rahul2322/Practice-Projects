"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const helmet_1 = __importDefault(require("helmet"));
const mongoCrud = __importStar(require("./product-crud-mongo"));
dotenv.config();
console.log(process.env.MONGO);
if (!process.env.PORT) {
    console.log('Error to get ports');
    process.exit(1);
}
const PORT = parseInt(process.env.PORT);
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
const uri = `${process.env.MONGO}`;
mongoose_1.default.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(`Connecting to MONGO`);
    }
});
// app.get('/',(req,res)=>res.json({mesg:"Welcome Typescript"}));
// app.get('/products',productCrud.getProductList);
// app.post('/products',productCrud.createProducts);
// app.put('/updateproduct',productCrud.updateProduct);
// app.delete('/deleteproduct',productCrud.deleteProduct);
app.get('/products', mongoCrud.getProductList);
app.post('/create-product', mongoCrud.createProduct);
app.put('/updateproduct', mongoCrud.updateproduct);
app.delete('/deleteproduct', mongoCrud.deleteProduct);
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
