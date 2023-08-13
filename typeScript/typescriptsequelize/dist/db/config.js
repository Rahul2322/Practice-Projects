"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = process.env.DB_NAME;
const userName = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dialect = process.env.DIALECT;
const seqConnection = new sequelize_1.Sequelize(dbName, userName, dbPassword, {
    host: dbHost,
    dialect: dialect
});
exports.default = seqConnection;
