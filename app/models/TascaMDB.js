const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONN + '?serverSelectionTimeoutMS=5000')
    //.then(() => console.log('connected to mongodb'))
    .catch(() => {
        console.log("Conexió a MongoDB ha trigat massa")
        process.exit()
    });

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
        const obtingut = await TascaModel.findById(id);
        if (obtingut) {
            const tasca = (({ _id, nom, descripcio, estat, hora_inici, hora_final, usuari }) =>
                ({ _id, nom, descripcio, estat, hora_inici, hora_final, usuari }))(obtingut);
            return tasca;
        } else {
            return undefined;
        }
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
