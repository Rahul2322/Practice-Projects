import {Sequelize,Dialect} from 'sequelize'


const dbName= process.env.DB_NAME as string;
const userName = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dialect = process.env.DIALECT as Dialect
const seqConnection = new Sequelize(dbName,userName,dbPassword,{
    host:dbHost,
    dialect:dialect
})

export default seqConnection