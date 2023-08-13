import { IUser } from "./model";
import users from './schema';

export default class UserService {
    public createUser(user_params:IUser,callback:any){
        const _session = new users(user_params);
        _session.save();
        callback;
    }

    public async filterUser(query:any){
      const result =  await  users.findOne(query);
      return result
    }

    public updateUser(user_params:IUser,callback:any){
        const query = {_id:user_params._id};
        users.findOneAndUpdate(query,user_params,callback)
    }

    public deleteUser(_id:String,callback:any){
        const query = {_id:_id};
        users.deleteOne(query,callback);
    }
}

