import { ModificationNote } from "../common/models";

export interface IUser{
    _id?:String;
    name:{
        first_name:String;
        middle_name:String;
        last_name:String;

    };
    email:String;
    phone_number:String;
    is_deleted?:Boolean;
    gender:String;
    modification_notes:ModificationNote[]
}

