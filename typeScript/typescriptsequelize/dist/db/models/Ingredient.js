"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
/*
The definite assignment assertion is a feature that allows a ! to be placed after instance property and variable declarations to relay to TypeScript that a variable is indeed assigned for all intents and purposes, even if TypeScript’s analyses cannot detect so

let x: number;
initialize();
console.log(x + x);
//          ~   ~
// Error! Variable 'x' is used before being assigned.
function initialize() {
  x = 10;
}
*/
class Ingredient extends sequelize_1.Model {
}
Ingredient.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    foodGroup: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: true,
    sequelize: config_1.default,
    paranoid: true
});
exports.default = Ingredient;
