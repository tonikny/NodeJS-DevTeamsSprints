const { TascaController } = require('./controllers/TascaController');

const tc = new TascaController();
//console.log(tc.tasques);
tc.llistarTasques();
