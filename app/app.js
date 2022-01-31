
const app = require('./controller/menu');
const config = require('./config');

const { TascaService } = require('./services/TascaService');
const  { TascaMongo }  = require('./models/TascaMDB');
const  { TascaJson }  = require('./models/TascaJson');
const  { TascaMysql }  = require('./models/TascaSql');




let model = null;

switch (config.database){
    case "MONGO":
  model = new TascaMongo();
        break;

    case "MYSQL":
  model = new TascaMysql();
        break;
    default:
  model = new TascaJson();
        break;

}





const tascaService = new TascaService(model);
app.start(tascaService);


