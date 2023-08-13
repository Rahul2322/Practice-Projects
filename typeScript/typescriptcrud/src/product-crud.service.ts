import {products,Product} from './product';

export const getAllProducts = async (): Promise<Product[]> =>{
    return products;
}

export const createProducts = async(product:Product): Promise<void> =>{
    products.push(product);
}

export const updateProduct = async(product:Product): Promise<void> =>{
    let index = products.findIndex(d=>product.id === d.id);
    if(index > 0 || index == 0){
        products[index]['productName'] = product['productName'];
        products[index]['productCode'] = product['productCode'];
        products[index]['prodRating']  = product['prodRating'];
    }
}

export const deleteProduct = async(id: number): Promise<void> =>{
    let index = products.findIndex(d => d.id === id);
    if(index >0 || index == 0){
        products.splice(index,1)
    }
}