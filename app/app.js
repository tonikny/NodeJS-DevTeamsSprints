
const app = require('./controller/menu');
const config = require('./config');

const { TascaService } = require('./services/TascaService');



let tascaService = null;
switch (config.database){
    case "MONGO":
        const   TascaMongo   = require('./models/TascaMDB');
        const  modelMongo = new TascaMongo();
        tascaService = new TascaService(modelMongo);
        break;

    case "SQLITE":
        const   TascaSql   = require('./models/TascaSql');
        const modelSql = new TascaSql();
        tascaService = new TascaService(modelSql);
        break;
    default:
        const   TascaJson   = require('./models/TascaJson');
        const modelJson = new TascaJson();
        tascaService = new TascaService(modelJson);
        break;

}





app.start(tascaService);


