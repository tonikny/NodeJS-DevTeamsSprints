const mysql = require('mysql2/promise');
const { Sequelize, Model, DataTypes } = require('sequelize');

const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASS;
const database = process.env.MYSQL_DB;

(async () => {
    try {
      const conn = await mysql.createConnection({ host, port, user, password });
      await conn.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
      await sequelize.sync({ force: false });
    } catch (e) {
      console.error('No es pot connectar a la bd', e);
    }
  })();



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


const sequelize = new Sequelize(database, user, password, {host, port, dialect:'mysql', logging: false });

const TascaSequelize = sequelize.define('Tasca', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: {
    type: DataTypes.STRING,
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
  updatedAt: false,
  tableName: 'tasques'
});


module.exports = Tasca;
