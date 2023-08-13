import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import * as productCrud from './product-crud';
import * as mongoCrud from './product-crud-mongo'
dotenv.config();

console.log(process.env.MONGO);


if(!process.env.PORT){
    console.log('Error to get ports');
    process.exit(1)
    
}

const PORT: number = parseInt(process.env.PORT);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const uri: string = `${ process.env.MONGO}`;
mongoose.connect(uri, (err: any) => {
if (err) {
console.log(err.message);
} else {
console.log(`Connecting to MONGO`);
}
});

// app.get('/',(req,res)=>res.json({mesg:"Welcome Typescript"}));
// app.get('/products',productCrud.getProductList);
// app.post('/products',productCrud.createProducts);
// app.put('/updateproduct',productCrud.updateProduct);
// app.delete('/deleteproduct',productCrud.deleteProduct);


//In order to avoid clashes with different Node versions, the typings for Node are not included. You must install @types/node manually.

app.get('/products',mongoCrud.getProductList);
app.post('/create-product',mongoCrud.createProduct);
app.put('/updateproduct',mongoCrud.updateproduct);
app.delete('/deleteproduct',mongoCrud.deleteProduct);

const server = app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})