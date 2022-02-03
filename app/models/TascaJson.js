const fs = require('fs/promises');

class TascaJson {

  ruta = process.env.JSON_FILE;

  constructor(dades) {
    Object.assign(this, dades);
    //this.dbo = TascaSequelize.build(dades);
  }

  async _llegirArxiu() {
    try {
      const file_data = await fs.readFile(this.ruta, 'utf8');
      const tasquesJson = JSON.parse(file_data);
      return tasquesJson.tasques;
    } catch (e) {
      throw e;
    }
  }

  async _escriureArxiu(tasques) {
    try {
      await fs.writeFile(this.ruta, JSON.stringify({ tasques: tasques }), 'utf-8');
    } catch (e) {
      throw e;
    }
  }

  async llistar() {
    const tasques = await this._llegirArxiu();
    return tasques;
  }

  async afegir() {
    try {
      const tasques = await this._llegirArxiu();
      const id = (tasques.length === 0) ? 1 : Math.max.apply(Math, tasques.map(function (o) { return o.id; })) + 1;
      tasques.push({
        id: id,
        nom: this.nom,
        descripcio: this.descripcio,
        hora_inici: this.hora_inici,
        hora_final: this.hora_final,
        estat: this.estat,
        usuari: this.usuari
      });
      await this._escriureArxiu(tasques);
      return id;
    } catch (e) {
      throw e;
    }
  }

  async esborrar(id) {
    try {
      const tasquesAbans = await this._llegirArxiu();
      const tasquesDespres = tasquesAbans.filter(o => o.id !== id);
      await this._escriureArxiu(tasquesDespres);
      return true;
    } catch (e) {
      throw e;
    }
  }

  async obtenir(id) {
    const tasques = await this._llegirArxiu();
    const tasca = tasques.find(o => o.id === id);
    return tasca;
  }

  async actualitzar(dades) {
    const tasquesAbans = await this._llegirArxiu();
    const tasquesDespres = tasquesAbans.map(o => {
      if (o.id === dades.id) {
        Object.assign(o, dades);
      }
      return o;
    });
    await this._escriureArxiu(tasquesDespres);
    return true;
  }
  
}


module.exports =  TascaJson ;
