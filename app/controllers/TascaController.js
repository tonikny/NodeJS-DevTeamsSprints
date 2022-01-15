const { Tasca } = require('../models/Tasca');
const fs = require('fs');

class TascaController {

  constructor() {
    this.ruta = 'database/tasques_db.json';
    this.tasques = { tasques: [] };
    try {
      const file_data = fs.readFileSync(this.ruta, 'utf8');
      this.tasques = JSON.parse(file_data);
    } catch (err) {
      if (err.code === 'ENOENT') {
        fs.writeFileSync(this.ruta, JSON.stringify(this.tasques), 'utf-8');
      } else {
        throw err;
      }
    }

  }

  afegirTasca() {
    let tasca = new Tasca();
    console.log('Tasca creada:', tasca);
  }

  veureTasca() {

  }

  cercarTasca() {

  }

  actualitzarTasca() {

  }

  esborrarTasca() {

  }

  llistarTasques() {
    this.tasques.tasques.forEach(element => {
      console.log(element);
    });
  }

}

module.exports = { TascaController };