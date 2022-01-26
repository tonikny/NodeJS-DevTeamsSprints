const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:',{
  //logging: false
});

class Tasca {

  constructor(dades) {
    Object.assign(this, dades);
    this.dbo = TascaSequelize.build(dades);
  }

  async llistar() {
    const tasques = await TascaSequelize.findAll();
    console.log("tasques:", tasques);
  }

  async afegir() {

  }

  async esborrar(id) {

  }

  async obtenir(id) {

  }

  async actualitzar(dades) {

  }
}

const TascaSequelize = sequelize.define('Tasca', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estat: {
    type: DataTypes.STRING
  },
  descripcio: {
    type: DataTypes.STRING
  },
  nora_inici: {
    type: DataTypes.STRING
  },
  hora_final: {
    type: DataTypes.STRING
  },
  usuari: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

(async () => {
  await sequelize.sync();
})();


/* class TascaSequelize extends Model { }

Tasca.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estat: {
    type: DataTypes.STRING
  },
  descripcio: {
    type: DataTypes.STRING
  },
  nora_inici: {
    type: DataTypes.STRING
  },
  hora_final: {
    type: DataTypes.STRING
  },
  usuari: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Tasca' // We need to choose the model name
});
 */

module.exports = { Tasca };
