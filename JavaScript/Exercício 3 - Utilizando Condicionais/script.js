alert("Nesse exercício, vamos simular o sistema de navegação de uma nave interagindo com o usuário");


let pilotName = prompt("Qual o seu nome, piloto?");

let velocity = 0;

let newVelocity = prompt("Qual a velocidade deseja que a nave alcance?");

let confirmVelocity = confirm("A velocidade desejada é " + newVelocity + "km/s. Confirma?");

if (confirmVelocity) {
    velocity = newVelocity;
}

//Mensagens  de alertas

if (newVelocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.");
}
else if (newVelocity < 40) {
    alert("Você está devagar, podemos aumentar mais.");
}
else if (newVelocity >= 40 && newVelocity < 80){
    alert("Parece uma boa velocidade para manter.");
}
else if (newVelocity >= 80 && newVelocity < 100){
    alert("Velocidade alta. Considere diminuir.");
}
else if (newVelocity >= 100) {
    alert("Velocidade perigosa. Controle automático forçado.");
}

alert("Nome do piloto: " + pilotName + "\nVelocidade da nave: " + newVelocity + "km/s.");
