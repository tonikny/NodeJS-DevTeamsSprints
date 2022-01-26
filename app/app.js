
const app = require('./controller/menu.js');
const { TascaService } = require('./services/TascaService');
const  { Tasca }  = require('./models/TascaSql');

const model = new Tasca();
const tascaService = new TascaService(model);

app.start(tascaService);
