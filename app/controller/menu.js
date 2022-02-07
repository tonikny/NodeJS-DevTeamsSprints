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
            service.afegirTasca(username,answer.nom,answer.descripcio,answer.estat,answer.hora_inici,answer.hora_final);
            break;

        case 2: 
            const resposta = await mostraMenu(idTasca);
            const task = await service.veureTasca(resposta.idTasca);
            console.table(task);
            const editarTasca = [
                {
                    type: "input",
                    name: "nom",
                    message: "Nom de la tasca?["+ task.nom +"]"
                },
                {
                    type: "input",
                    name: "descripcio",
                    message: "Descripció:["+ task.descripcio +"]"
                },
                {
                    type: "list",
                    name: "estat",
                    message: "Quin estat?["+ task.estat +"]",
                    choices: ["pendent", "començat","finalitzat"]
                },
                {
                    type: "input",
                    name: "hora_inici",
                    message: "A quina hora comença? ["+ task.hora_inici +"]"
                },
                {
                    type: "input",
                    name: "hora_final" ,
                    message: "A quina hora acaba?["+ task.hora_final +"]"
                }
            ]
            answer = await mostraMenu(editarTasca);
            service.actualitzarTasca(task.id,username,answer.nom,answer.descripcio,answer.estat,answer.hora_inici,answer.hora_final)
            //console.log(answer);
            break;
        case 3:
            answer = await mostraMenu(idTasca);
            service.esborrarTasca(answer.idTasca);

            break;
        case 4:
            const tasques =  await service.llistarTasques();
            console.table(tasques);

            break;
        case 5:
            answer = await mostraMenu(idTasca);
            const tasca = await service.veureTasca(parseInt(answer.idTasca));
            console.table(tasca);
            break;

        case 6:
            // const llista = service.llistar();
            console.log("sortir");
            sortir = true;
            break;
    }
    process.exit();
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
    },
    {
        type: "input",
        name: "hora_inici",
        message: "A quina hora comença?"
    },
    {
        type: "input",
        name: "hora_final",
        message: "A quina hora acaba?"
    }
]
module.exports = {start}
