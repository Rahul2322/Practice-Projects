import products from './product-schema'
import { Product } from './product'

export const getProductList = async(req:any,res:any) =>{
    try {
        const productList = await products.find();
        res.status(200).json({msg:"Success",result:productList})
    } catch (error) {
        res.status(404).json({msg:"Not Found"})
    }
}

export const createProduct = async(req:any,res:any) =>{
    try {
        console.log('hello');
        
        const product: Product = req.body
        console.log('product',product);
        
        const create = await products.create(product);
        console.log(create);
        
        res.status(201).json({msg:"SuccessFully Created",result:create})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({msg:"Something went wrong"})
    }
}

export const updateproduct = async(req:any,res:any) =>{
    try {
        const product: Product = req.body;
        const update = await products.updateOne(product);
        res.status(201).json({msg:"Updated Successfully",result:update})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong"})
    }
}

export const deleteProduct = async(req:any,res:any) =>{
   try {
    const productCode: string = req.body.code;
    const delProduct = await products.deleteOne({productCode});
    res.status(200).json({msg:"Deleted Successfully",result:delProduct})
   } catch (error) {
    console.log(error);   
    res.status(500).json({msg:"Something went wrong"})
   }
}