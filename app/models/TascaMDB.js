const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONN)
    .then(() => console.log('connected to mongodb'))

const Schema = mongoose.Schema;

class Tasca {
    constructor(dades) {
        Object.assign(this, dades);
    }

    async llistar() {
        const tasques = await TascaModel.find()
        if (!tasques.length) {
            return null;
        }
        return tasques.map(x => {
            const y = x.toObject();
            delete y['__v'];
            return y;
        });
    }

    async afegir() {
        try {
            const tasques = await TascaModel.find()
            const id = (tasques.length === 0) ? 1 : Math.max.apply(Math, tasques.map(function (o) { return o.id; })) + 1;
            const newTasca = new TascaModel({
                _id: id,
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
        await TascaModel.findOneAndDelete({ _id: id })
    }

    async obtenir(id) {
        const obtingut = await TascaModel.find({ _id: id })
        return obtingut.map(x => {
            const y = x.toObject();
            delete y['__v'];
            return y;
        });
    }

    async actualitzar(dades) {
        await TascaModel.findOneAndUpdate({ _id: dades.id }, dades)
    }
}


const tascaSchema = new Schema({
    _id: Number,
    nom: String,
    descripcio: String,
    hora_inici: String,
    hora_final: String,
    estat: String,
    usuari: String
});

const TascaModel = mongoose.model('tasca', tascaSchema)


module.exports = Tasca;
