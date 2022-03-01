require('dotenv').config()
const app = require('./controller/menu');

const { TascaService } = require('./services/TascaService');

switch (process.env.DATABASE) {
  case "MONGO":
    modelType = './models/TascaMDB';
    break;
  case "MYSQL":
    modelType = './models/TascaSql';
    break;
  default:
    modelType = './models/TascaJson';
}
const Tasca = require(modelType);
const model = new Tasca();
const tascaService = new TascaService(model);


app.start(tascaService);


