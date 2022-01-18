const app = require('../controller/menu.js');

const Service = require('../service/task.js');


// en el seguents nivells asignarem a database depenent el que volguem utilitzar si JSON, Mysql, Mongo
//
// ara asigno directament el json

database = require('../model/json.js');






const service = new Service(database);



app.start(service);
