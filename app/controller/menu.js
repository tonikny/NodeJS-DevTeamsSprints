const inquirer  = require('inquirer');

// el programaça aqui
const start = async (service) =>{ 
    const user = await mostraMenu(usernamePreguntes);
    let sortir = false;

do{
    const menu = await mostraMenu(menuPreguntes);
    await   selected(service,user.name,menu.opcio);
    if (menu.opcio == 6 ){
            sortir = true;
    }
    }while(!sortir);
}

const mostraMenu = async (question) => {

    const answer = await   inquirer .prompt(question)
    return answer;
}

const selected = async (service,username,opcio) => {
    let  sortir = false
    let answer = []; 
    switch(opcio){

        case 1: 
            answer = await mostraMenu(novaTasca);
            
            console.log(answer);
            service.afegirTasca(username,answer.nom,answer.descripcio,answer.estat);
            console.log("crear tasca");
            break;

        case 2: 
            answer = await mostraMenu(idTasca);
            console.log(answer);
            break;
        case 3:
            answer = await mostraMenu(idTasca);
            service.esborrarTasca(answer.idTasca);
            break;
        case 4:
            await service.llistarTasques();
            break;
        case 5:
            answer = await mostraMenu(idTasca);
            service.veureTasca(answer.idTasca);
            break;

        case 6:
            // const llista = service.llistar();
            console.log("sortir");
            sortir = true;
            break;
    }
}
const usernamePreguntes = [
    {
        type: "input",
        name: "name",
        message: "el teu nom?"
    }


]

const menuPreguntes = [
    {
        type: "number",
        name: "opcio",
        message: "Menu:\n1.Afegir\n2.Editar\n3.Esborrar\n4.Llistar\n5.Veure tasca\n6.Sortir\n"
    }
]



const idTasca = [
    {
        type: "number",
        name: "idTasca",
        message: "id de la tasca?"
    }
]

const novaTasca = [
    {
        type: "input",
        name: "nom",
        message: "Nom de la tasca?"
    },
    {
        type: "input",
        name: "descripcio",
        message: "Descripció:"
    },
    {
        type: "list",
        name: "estat",
        message: "Quin estat?",
        choices: ["pendent", "començat","finalitzat"]
    }
]
module.exports = {start}
