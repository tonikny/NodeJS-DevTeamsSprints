const { Tasca } = require('../models/TascaJson');
const fs = require('fs');

class TascaService {

  constructor(model) {
    const tasca = new Tasca();
    this.model = model;
  }

  afegirTasca(usuari,nom,descripcio,estat,hora_inici,hora_final) {
    const dades = {nom,descripcio,hora_inici,hora_final,estat,usuari};
    this.compararTasca(dades)
    const tasca = new Tasca(dades);
    tasca.afegir();
  }

  async veureTasca(id) {
    const tasca = new Tasca();
    const tascaTrobada = await this.cercarTasca(id);
    console.table(tascaTrobada);
    
  }

  async cercarTasca(id) {
    const tasca = new Tasca();
    console.log(`cercar tasca ${tasca.obtenir(id)}`)
    return await tasca.obtenir(id);

  }

  async actualitzarTasca(id,usuari,nom,descripcio,estat,hora_inici,hora_final) {
    const tasca = new Tasca();
    const dades = {id, nom,descripcio,hora_inici,hora_final,estat,usuari}; 
    const tascaAntiga = await this.cercarTasca(id);
    Object.values(dades).forEach(k=>{
      if(k === ''){
        console.log(tascaAntiga.k);
        //dades.k = tascaAntiga.k
      }
    })
    return await tasca.actualitzar(dades);
  }

  async esborrarTasca(id) {
    const tasca = new Tasca();
    return await tasca.esborrar(id);
  }

  async llistarTasques() {
    const tasca = new Tasca();
    const tasques = await tasca.llistar();
    console.table(tasques)
    // for (let i = 0; i < tasques.length; i ++) {
    //   console.log(`tasca : ${JSON.stringify(tasques[i])}`)
    // }
  }

}


module.exports = { TascaService };

//test branch ferran