import { Request,Response } from "express";
import { successResponse,failureResponse,mongoError,insufficientParameters } from "../modules/common/services";
import { IUser } from "../modules/user/model";
import UserService from "../modules/user/service";


export class UserController{
    private user_service:UserService = new UserService();

    public create_user(req:Request,res:Response){
        if(req.body.name && req.body.name.first_name && req.body.name.middle_name && req.body.name.last_name
            && req.body.email && req.body.phone_number && req.body.gender){
                const user_params:IUser = {
                    name:{
                        first_name:req.body.name.first_name,
                        middle_name:req.body.name.middle_name,
                        last_name :req.body.name.last_name 
                    },
                    email:req.body.email,
                    gender:req.body.gender,
                    phone_number:req.body.phone_number,
                    modification_notes:[{
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note : 'New User Created'
                    }]
                };

                this.user_service.createUser(user_params,successResponse('user created successfull',null,res))
            }else{
                insufficientParameters(res)
            }
    }

    public async get_user(req:Request,res:Response){
        if(req.params.id){
            const user_filter = { _id: req.params.id };
           const user =  await this.user_service.filterUser(user_filter);
           console.log(user)
           successResponse('get user successfull',user,res)
        }else{
            insufficientParameters(res)
        }
    }

    public update_user(req:Request,res:Response){
        if(req.params.id && req.body.name || req.body.name.first_name || req.body.name.middle_name || req.body.name.last_name
            || req.body.email || req.body.phone_number || req.body.gender ){
                const user_filter = {_id :  req.params.id};
                const user =  this.user_service.filterUser(user_filter)
    
            }else{
                insufficientParameters(res)
            }
    }

    public delete_user(req:Request,res:Response){
        if(req.params.id){
            this.user_service.deleteUser(req.params.id,(err:any,delete_details)=>{
                if(err){
                    mongoError(err,res)
                }else if(delete_details.deletedCount !== 0){
                    successResponse('delete user successfull',null,res)
                }else{
                    failureResponse('invalid user',null,res)
                }
            })
        }else{
            insufficientParameters(res)
        }
    }
}