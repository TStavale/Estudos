alert("MiniApp que irá pedir a data de partida de uma espaçonave e vai fornecer opções para o usuário saber o tempo de vôo dela, em segundos, minutos, horas, dias e anos.")

let departureDateEntry = prompt("Digite a data de partida da espaçonave (Formato DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY"); // Aqui armazenarei a converção da data que o usuário digitou (em texto), em um dado que o moment entenda.

let today = moment(); // Assim ele simplesmente retorna a data de hoje.

let dateDiff = today - departureDate; // o momente ira transformar a data em milesegundos e ai ele faz a operação.

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias\n5- Anos")

if (chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000); //Math (com M maiusculo) - Biblioteca nativa do Js, com o recurso 'round' que vai arrendondar para cima ou para baixo um valor quebrado.  
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos.");
}
else if (chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos.");
}
else if (chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
    alert("Tempo de vôo: " + hoursOfDeparture + " horas.");
}
else if (chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
    alert("Tempo de vôo: " + daysOfDeparture + " dias.");
}
else if (chosenOption == "5") {
    let ageOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 / 30 / 12);
    alert("Tempo de vôo: " + ageOfDeparture + " anos.");
}
else {
    alert("Opção inválida!")
}