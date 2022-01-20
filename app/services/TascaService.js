const { Tasca } = require('../models/TascaJson');
const fs = require('fs');

class TascaService {

  constructor(database) {
    const tasca = new Tasca();
    this.database = database;
  }

  afegirTasca(dades) {
    const tasca = new Tasca(dades);
    return tasca.afegir();
  }

  veureTasca(id) {
    //const tasca = new Tasca();
    const tascaTrobada = this.cercarTasca(id);
    console.log(`La tasca es ${ tascaTrobada }`);
  }

  cercarTasca(id) {
    const tasca = new Tasca();
    return tasca.obtenir(id);
  }

  async actualitzarTasca(dades) {
    const tasca = new Tasca();
    return await tasca.actualitzar(dades);
  }

  async esborrarTasca(id) {
    const tasca = new Tasca();
    return await tasca.esborrar(id);
  }

  async llistarTasques() {
    const tasca = new Tasca();
    return await tasca.database.llistar();
    return await tasca.llistar();
  }

}



module.exports = { TascaService };

//test branch ferran