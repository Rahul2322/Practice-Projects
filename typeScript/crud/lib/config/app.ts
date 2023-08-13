import * as express from "express";
import { CommonRoutes } from "../routes/common_routes";
import { TestRoutes } from "../routes/test_routes";
import { UserRoutes } from "../routes/user_routes";
import environment from "../environment";
import * as mongoose from 'mongoose';

class App{
    public app:express.Application;
    public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

    private test_routes:TestRoutes = new TestRoutes();
    private user_routes:UserRoutes =  new UserRoutes();
    private common_routes:CommonRoutes = new CommonRoutes();


    
    constructor(){
        this.app = express();
        this.config();
        this.mongoSetUp();
        this.test_routes.route(this.app);
        this.user_routes.route(this.app);
        this.common_routes.route(this.app);
        
        

    }

    private config():void{
         // support application/json type post data
         this.app.use(express.json());
          //support application/x-www-form-urlencoded post data
         this.app.use(express.urlencoded({extended:false}))
    }

    private mongoSetUp(): void{
        mongoose.connect(this.mongoUrl)
    }
}

export default new App().app