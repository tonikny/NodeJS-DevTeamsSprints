const { Tasca } = require('../models/TascaJson');
const fs = require('fs');

class TascaService {

  constructor(database) {
    const tasca = new Tasca();
    this.database = database;
  }

  afegirTasca(dades) {
    console.log('afegir tasca')
    const tasca = new Tasca(dades);
    return tasca.afegir();
  }

  veureTasca(id) {
    const tasca = new Tasca();
  
    console.log(`La tasca ID ${ id }`)
    const tascaTrobada = this.cercarTasca(id);
    console.log(`La tasca es ${ tascaTrobada }`);
    
  }

  cercarTasca(id) {
    const tasca = new Tasca();
    console.log(`cercar tasca${tasca.obtenir(id)}`)
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
    console.log('llistartasques')
    const tasca = new Tasca();
    const tasques = await tasca.llistar();
    for (let i = 0; i < tasques.length; i ++) {
      console.log(`tasca : ${JSON.stringify(tasques[i])}`)
    }
  }

}


module.exports = { TascaService };

//test branch ferran