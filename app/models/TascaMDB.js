const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testdb")
     .then(()=>console.log('connected to mongodb'))

const Schema = mongoose.Schema;

class Tasca {

    constructor(dades) {
        Object.assign(this, dades);
    }
  
    async llistar() {
        console.log('llistar')
        console.table(tasca.)
    }
  
    async afegir() {
        const newTasca = new tasca()
        await newTasca.save()
        .then (()=> console.log('save'))
    }
  
    async esborrar(id) {
        console.log(tasca.find({_id: id}))
       // tasca.deleteOne({_id: id})
    }
  
    async obtenir(id) {
        console.log(tasca.find({_id: id}))
    }
  
    async actualitzar(dades) {
  
    }
}
  

const tascaSchema = new Schema({
  nom:  String, // String is shorthand for {type: String}
  descripcio: String,
  hora_inici:   String,
  hora_final: String,
  estat: String,
  usuari: String
});
const tasca = mongoose.model('tasca',tascaSchema)

const newTasca = new tasca({
    nom: "test",
    descripcio:"test" ,
    hora_inici: "test" ,
    hora_final: "test" ,
    estat: "test",
    usuari: "test" })

//const Tasca = mongoose.model('todos', tascaSchema);

module.exports = { Tasca };
