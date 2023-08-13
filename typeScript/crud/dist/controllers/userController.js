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
exports.UserController = void 0;
const services_1 = require("../modules/common/services");
const service_1 = require("../modules/user/service");
class UserController {
    constructor() {
        this.user_service = new service_1.default();
    }
    create_user(req, res) {
        if (req.body.name && req.body.name.first_name && req.body.name.middle_name && req.body.name.last_name
            && req.body.email && req.body.phone_number && req.body.gender) {
            const user_params = {
                name: {
                    first_name: req.body.name.first_name,
                    middle_name: req.body.name.middle_name,
                    last_name: req.body.name.last_name
                },
                email: req.body.email,
                gender: req.body.gender,
                phone_number: req.body.phone_number,
                modification_notes: [{
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'New User Created'
                    }]
            };
            this.user_service.createUser(user_params, (0, services_1.successResponse)('user created successfull', null, res));
        }
        else {
            (0, services_1.insufficientParameters)(res);
        }
    }
    get_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.params.id) {
                const user_filter = { _id: req.params.id };
                const user = yield this.user_service.filterUser(user_filter);
                console.log(user);
                (0, services_1.successResponse)('get user successfull', user, res);
            }
            else {
                (0, services_1.insufficientParameters)(res);
            }
        });
    }
    update_user(req, res) {
        if (req.params.id && req.body.name || req.body.name.first_name || req.body.name.middle_name || req.body.name.last_name
            || req.body.email || req.body.phone_number || req.body.gender) {
            const user_filter = { _id: req.params.id };
            const user = this.user_service.filterUser(user_filter);
        }
        else {
            (0, services_1.insufficientParameters)(res);
        }
    }
    delete_user(req, res) {
        if (req.params.id) {
            this.user_service.deleteUser(req.params.id, (err, delete_details) => {
                if (err) {
                    (0, services_1.mongoError)(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    (0, services_1.successResponse)('delete user successfull', null, res);
                }
                else {
                    (0, services_1.failureResponse)('invalid user', null, res);
                }
            });
        }
        else {
            (0, services_1.insufficientParameters)(res);
        }
    }
}
exports.UserController = UserController;
