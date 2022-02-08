const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.SQLITE_CONN, { logging: false });

class Tasca {

  constructor(dades) {
    Object.assign(this, dades);
    this.dbo = TascaSequelize.build(dades);
  }

  async llistar() {
    return await TascaSequelize.findAll({ raw: true });
  }

  async afegir() {
    Object.assign(this.dbo, this);
    await this.dbo.save();
  }

  async esborrar(id) {
    await TascaSequelize.destroy({
      where: {
        id: id
      }
    });
  }

  async obtenir(id) {
    return await TascaSequelize.findByPk(id, { raw: true });
  }

  async actualitzar(dades) {
    await TascaSequelize.update(dades, {
      where: {
        id: dades.id
      }
    });

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
    //allowNull: false
  },
  estat: {
    type: DataTypes.STRING
  },
  descripcio: {
    type: DataTypes.STRING
  },
  hora_inici: {
    type: DataTypes.STRING
  },
  hora_final: {
    type: DataTypes.STRING
  },
  usuari: {
    type: DataTypes.STRING
  }
}, {
  createdAt: false,
  updatedAt: false
});

(async () => {
  await sequelize.sync();
  await TascaSequelize.bulkCreate([
    { nom: 'rest', estat: 'pendent', descripcio: 'practica rest', hora_inici: '12:00', hora_final: '17:00', usuari: 'toni' },
    { nom: 'prova', estat: 'començat', descripcio: 'prova', hora_inici: '12:00', hora_final: '13:00', usuari: 'toni' }
  ]);
})();


module.exports = Tasca;
