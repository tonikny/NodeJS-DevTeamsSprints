
const app = require('./controller/menu.js');
const { TascaService } = require('./services/TascaService');
const  TascaJson  = require('./model/TascaJson');

const database = new TascaJson();
const tascaService = new TascaService(database);

app.start(tascaService);

