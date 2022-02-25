
# Devteams

## Descripció
Es tracta d'una aplicació per a la gestió de tasques en diferents tipus de persistència.
- JSON: arxiu json al sistema de fitxers
- MYSQL: base de dades Mysql
- MONGO: base de dades MongoDB

## Ús
- S'han de configurar els paràmetres de connexió a les bases de dades l'arxiu .env
- Per fer servir els diferent tipus de persitència, es configura també a l'arxiu .env o es pot forçar des de la linia de comandes.
- L'execució és:
`npm start`

- Si es vol forçar el tipus de base de dades:
`DATABASE=JSON node app/app.js` Les opcions possibles són JSON (per defecte), MYSQL i MONGO.


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
- [Inquirer](https://github.com/SBoudrias/Inquirer.js), per gestionar entrada d'usuari.
- [Sequelize](https://sequelize.org/) i [Mysql2](https://github.com/sidorares/node-mysql2#readme) per gestionar bases de dades MySQL.
- [Mongoose](https://mongoosejs.com/), per gestionar MongoDB.
