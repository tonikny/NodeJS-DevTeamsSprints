require('dotenv').config();
const database = process.env.DATABASE || "JSON";
const mysql = {  
    host:process.env.MYSQL_HOST || 'localhost',
    port:parseInt(process.env.MYSQL_PORT) || 3306,
    username:process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
}

const mongo = {  
    host:process.env.MONGO_HOST || 'localhost',
    port:parseInt(process.env.MONGO_PORT)|| 27017,
    database:process.env.MONGO_DATABASE,
}
const config = {
    database,
    mysql,
    mongo
}
module.exports = config
