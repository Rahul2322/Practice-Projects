"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const isDev = process.env.NODE_ENV === 'development';
const dbInit = () => {
    models_1.Ingredient.sync({ alter: isDev });
};
exports.default = dbInit;
