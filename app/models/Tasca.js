class Tasca {

  constructor(nom, descripcio, hora_inici, hora_final, estat, usuari) {
    this.nom = nom;
    this.descripcio = descripcio;
    this.hora_inici = hora_inici;
    this.hora_final = hora_final;
    this.estat = estat;
    this.usuari = usuari;
  }

}

module.exports = { Tasca };
