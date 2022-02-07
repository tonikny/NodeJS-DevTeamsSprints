
class TascaService {

  constructor(model) {
    this.model = model;
  }

  afegirTasca(usuari,nom,descripcio,estat,hora_inici,hora_final) {
    const dades = {nom,descripcio,hora_inici,hora_final,estat,usuari};
    Object.assign(this.model, dades);
    this.model.afegir();
  }

  async veureTasca(id) {
    const tascaTrobada = await this.cercarTasca(id);
      return tascaTrobada;
  }

  async cercarTasca(id) {
    if(await this.model.obtenir(id) == ''){
      console.log('id no trobada')
      process.exit()
    }
    else return await this.model.obtenir(id);
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
    return await this.model.actualitzar(dades);
  }

  async esborrarTasca(id) {
    return await this.model.esborrar(id);
  }

  async llistarTasques() {
    const tasques = await this.model.llistar();
      return tasques;
  }

}
module.exports = { TascaService };
