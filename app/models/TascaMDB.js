const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testdb")
     .then(()=>console.log('connected to mongodb'))

const Schema = mongoose.Schema;

class Tasca {
    constructor(dades) {
        Object.assign(this, dades);
    }
  
    async llistar() {
       const tasques = await TascaModel.find()
       if(!tasques.length){
           return null;
       }
       return tasques.map(x => x.toObject());
    }
  
    async afegir() {
        try {
            const newTasca = new TascaModel({
                nom: this.nom,
                descripcio: this.descripcio,
                hora_inici: this.hora_inici,
                hora_final: this.hora_final,
                estat: this.estat,
                usuari: this.usuari
            })
            await newTasca.save()
        } catch (e) {
            console.log(e)
        }
    }
  
    async esborrar(id) {
       await TascaModel.findOneAndDelete({_id: id})
    }
  
    async obtenir(id) {
        return await TascaModel.find({_id:id})
    }
  
    async actualitzar(dades) {
        await TascaModel.findOneAndUpdate({_id:dades.id}, dades)
    }
}
  

const tascaSchema = new Schema({
  nom:  String, 
  descripcio: String,
  hora_inici:   String,
  hora_final: String,
  estat: String,
  usuari: String
});

const TascaModel = mongoose.model('tasca',tascaSchema)


module.exports = { Tasca };
