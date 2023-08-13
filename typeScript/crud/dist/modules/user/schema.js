"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const models_1 = require("../common/models");
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    name: {
        type: {
            first_name: String,
            middle_name: String,
            last_name: String
        }
    },
    email: String,
    phone_number: String,
    gender: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
    modification_notes: [models_1.ModificationNote]
});
exports.default = mongoose_1.default.model('users', UserSchema);
