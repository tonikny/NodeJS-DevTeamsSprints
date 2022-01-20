
const app = require('./controller/menu.js');
const { TascaService } = require('./services/TascaService');

database = 'JSON';
const tascaService = new TascaService(database);

app.start(tascaService);

