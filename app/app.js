
const app = require('./controller/menu.js');
const { TascaService } = require('./services/TascaService');
const  { Tasca }  = require('./models/TascaJson');

const database = new Tasca();
const tascaService = new TascaService(database);

app.start(tascaService);

