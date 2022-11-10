alert("Nesse exercício iremos fazer um conversor de distância espacial, utilizando o switch.\nO Objetivo é colocar uma distância em anos-luz e converter para a unidade desejada.")

let lightYearsDistance = prompt("Digite a distância em Anos-luz.");

let conversionOptions = prompt("Selecione o número para a forma de conversão que deseja realizar. \n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilometros(km)" );

let chosenUnity
let convertedDistance

switch (conversionOptions) {
    case "1":
        chosenUnity = "Parsec(pc)";
        convertedDistance = lightYearsDistance * 0.306601;
        break;
    case "2":
        chosenUnity = "Unidade astronômica(AU)";
        convertedDistance = lightYearsDistance * 63241.1;
        break;
    case "3":
        chosenUnity = "Quilometros(km)";
        convertedDistance = lightYearsDistance * 9.5 * Math.pow(10, 12); //Math (com M maiusculo) - Biblioteca nativa do Js, com o recurso 'pow' que vai obter o valor de 10¹².
        break;
    default:
        chosenUnity = "Unidade não identificada";
        convertedDistance = "Conversão fora do escopo";
        break;
}

alert("Distância em Anos-luz: " + lightYearsDistance + "\nUnidade escolhida: " + chosenUnity + "\nConversão: " + convertedDistance);