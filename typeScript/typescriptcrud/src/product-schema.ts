import mongoose from "mongoose";
import {Schema} from "mongoose";


export const Prouct = new Schema({
    id:{type:mongoose.Schema.Types.ObjectId,required:false},
    productName:{type: String},
    productDescription:{type: String},
    productCode:{type: String},
    productRating:{type: Number},
})

const products = mongoose.model('product',Prouct);
export default products