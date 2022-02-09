
# Devteams

## Descripció
Es tracta d'una aplicació per a la gestió de tasques en diferents tipus de persistència.
- Json: arxiu json al sistema de fitxers
- SQL: base de dades SQLite en memòria
- MongoDB: base de dades a localhost

## Ús
Per fer servir els diferent tipus de persitència, es configura a l'arxiu .env o la la linia de comandes.

- Si es configura a .env, l'execució és:
`npm start`

- Si es vol forçar alguna variable d'entorn:
`DATABASE=JSON node app/app.js`


## Estructura Projecte

- <b>app/</b>:
    - <b>controller/</b> - Menú d'opcions de la aplicació
    - <b>models/</b> - Models diferents per cada tipus de persistència
    - <b>database/</b> - Persistència mitjançant arxiu json
    - <b>services/</b> - Lògica de la aplicació independent del model de persistència
- <b>app.js</b> - Entrada a la aplicació
- <b>.env</b> - Configuració d'entorn. Veure [dotenv doc](https://www.npmjs.com/package/dotenv).
- <b>package.json</b>.

## Tecnologies externes
- [Inquirer](https://github.com/SBoudrias/Inquirer.js), per gestionar entrada d'usuari
- [Sequelize](https://sequelize.org/), per gestionar bsases de dades SQL
- [Mongoose](https://mongoosejs.com/), per gestionar MongoDB.
