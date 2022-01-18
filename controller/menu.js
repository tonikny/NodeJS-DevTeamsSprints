
const username = [
    {
        type: "input",
        name: "username",
        message: "el teu nom?"
    }


]

const menuPrueguntes = [
    {
        type: "input",
        name: "opcio",
        message: "Menu:\n1.Afegir\n2.Editar\n3.Esborrar\n4.Llistar\n5.Veure tasca\n6.Sortir\n"
    }
]



const idTasca = [
    {
        type: "input",
        name: "idTasca",
        message: "id de la tasca?"
    }


]

const newTask = [
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
const controller = (service) =>{ 

    inquirer
        .prompt(username)
        .then((answers) => {
            menu(service,username);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("No funciona per consola")
            } else {
                console.log(error)
            }
        })



}
const menu = (service,username) => {

    inquirer
        .prompt(menuPrueguntes)
        .then((answers) => {
            selected(service,username,answers.opcio) 
        })

        .catch((error) => {
            if (error.isTtyError) {
                console.log("Your console environment is not supported!")

            } else {
                console.log(error)
            }
        })

}

const selected = (service,username,opcio) => {


    switch(opcio){

        case 1: 

            inquirer
                .prompt(newTask)
                .then((answers) => {
                    service.afegir(username,answers.nom,answers.descripcio,answers.estat);
                });

            break;

        case 2: 

            inquirer
                .prompt(idTasca)
                .then((answer) => {
                    service.editar(answer);
                });
            break;
        case 3:

            inquirer
                .prompt(idTasca)
                .then((answer) => {
                    service.esborrar(answer.idTasca);
                });

            break;
        case 4:

            inquirer
                .prompt(idTasca)
                .then((answer) => {
                    service.veureTasca(answer.idTasca);
                });


            break;
        case 5: service.llistar();
            break;

    }
    if( answer.opcio != 6){

        menu();
    }



}





