const { Tasca } = require('../models/TascaJson');
const fs = require('fs');

class TascaService {

  constructor() {
    const tasca = new Tasca();
  }

  afegirTasca(dades) {
    const tasca = new Tasca(dades);
    return tasca.afegir();
  }

  veureTasca() {

  }

  cercarTasca() {

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
    return await tasca.llistar();
  }

}

module.exports = { TascaService };

//test branch ferran