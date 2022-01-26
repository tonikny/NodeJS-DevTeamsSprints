
class TascaService {

  constructor(model) {
    this.model = model;
  }

  afegirTasca(usuari,nom,descripcio,estat,hora_inici,hora_final) {
    const dades = {nom,descripcio,hora_inici,hora_final,estat,usuari};
    //this.compararTasca(dades)
    Object.assign(this.model, dades);
    this.model.afegir();
  }

  async veureTasca(id) {
    const tascaTrobada = await this.cercarTasca(id);
    console.table(tascaTrobada);
  }

  async cercarTasca(id) {
    console.log(`cercar tasca ${this.model.obtenir(id)}`)
    return await this.model.obtenir(id);
  }

  async actualitzarTasca(id,usuari,nom,descripcio,estat,hora_inici,hora_final) {
    const dades = {id,nom,descripcio,hora_inici,hora_final,estat,usuari}; 
    const tascaAntiga = await this.cercarTasca(id);
    if(dades.nom === ''){
      dades.nom = tascaAntiga.nom
    }if(dades.descripcio === ''){
      dades.descripcio = tascaAntiga.descripcio
    }if(dades.hora_final === ''){
      dades.hora_final = tascaAntiga.hora_final
    }if(dades.hora_inici === ''){
      dades.hora_inici = tascaAntiga.hora_inici
    }
    // Object.keys(dades).forEach(k=>{
    //   console.log(dades.k)
    //   if(dades.k === ''){
    //     //dades.k = tascaAntiga.k
    //     console.log('if')
    //     console.log(dades.k)
    //   }
    //})
    return await this.model.actualitzar(dades);
  }

  async esborrarTasca(id) {
    return await this.model.esborrar(id);
  }

  async llistarTasques() {
    const tasques = await this.model.llistar();
    console.table(tasques)
  }

}


module.exports = { TascaService };
