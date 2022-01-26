
const app = require('./controller/menu.js');
const { TascaService } = require('./services/TascaService');
const  { Tasca }  = require('./models/TascaJson');

const model = new Tasca();
const tascaService = new TascaService(model);

app.start(tascaService);
