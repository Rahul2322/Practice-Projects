import * as ProductService from './product-crud.service';
import { Product } from './product';

export const getProductList = async(req:any,res:any)=>{
    try {
    const productList: Product[] = await ProductService.getAllProducts();
    res.status(200).send(productList)
    } catch (e: any) {
        res.status(404).send(e.message)
       }
}

export const createProducts = async(req:any,res:any) =>{
    try {
        const product:Product = req.body 
        const createProduct = await ProductService.createProducts(product);
        res.status(201).json({
            message:"Success",
            result:createProduct
        })
    }  catch (e: any) {
        res.status(404).send(e.message)
       }
}

export const updateProduct = async(req:any,res:any)=>{
   try {
    const product: Product = req.body;
    const update = await ProductService.updateProduct(product);
    res.status(201).json({
        mesage:"Updated Successfully",
    })
   } catch (e: any) {
    res.status(404).send(e.message)
   }
}

export const deleteProduct  = async(req:any,res:any)=>{
   try {
    const id: number = req.body.id
    const removeProduct = await ProductService.deleteProduct(id);
    res.status(200).send({
        message:"Successfully deleted"
    })
   }  catch (e: any) {
    res.status(404).send(e.message)
   }
}