// Exercício 1 - Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual".

const numb = 25;

if (numb > 10) {
    console.log("Resposta do exercício 1: É maior que 10!");
    
}
else if (numb < 10) {
    console.log("Resposta do exercício 1: É menor que 10!");

}
else {
    console.log("Resposta do exercício 1: É igual que 10!");

}

// Exercício 2 - Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO.

const object = {
    name: "Enzo",
    age: 21,
    nationality: "Italiana"
}

const nationality = (object.nationality);

if (nationality === "brasileira") {
    console.log(`Resposta do exercício 2: ${object.name} é brasileiro.`);
}
else {
    console.log(`Resposta do exercício 2: ${object.name} não é brasileiro.`);
}

/* Exercício 3 - Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter 
ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem. */

const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);

const winningNumber = Math.floor(Math.random() * (10 - 1) + 1);

if (randomNumber === winningNumber) {
    console.log("Resposta do exercício 3: Você ganhou o grande prêmio!");
}
else {
    console.log("Resposta do exercício 3: Desculpe, você não ganhou!");
};

// Exercício 4 - Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const numb1 = 5;
const numb2 = 30;
const numb3 = 47;

if (numb1 > numb2 && numb1 > numb3) {
    console.log("Resposta do exercício 4: O maior número é " + numb1);
}
else if (numb2 > numb1 && numb2 > numb3) {
    console.log("Resposta do exercício 4: O maior número é " + numb2);
}
else if (numb3 > numb1 && numb3 > numb2) {
    console.log("Resposta do exercício 4: O maior número é " + numb3);
}


if (numb1 < numb2 && numb1 < numb3) {
    console.log("Resposta do exercício 4: O menor número é " + numb1);
}
else if (numb2 < numb1 && numb2 < numb3) {
    console.log("Resposta do exercício 4: O menor número é " + numb2);
}
else if (numb3 < numb1 && numb3 < numb2) {
    console.log("Resposta do exercício 4: O menor número é " + numb3);
}

/* Exercício 5 - Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" } Ao rodar o programa, 
deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada. */

const object1 = {
    nome: "Horacio",
    idade: 39,
    sexo: "masculino",
    profissão: "advogado",
    nacionalidade: "brasileira"
};

const object2 = {
    nome: "Franklin",
    idade: 37,
    sexo: "masculino",
    profissão: "militar",
    nacionalidade: "argentina"
};

const object3 = {
    nome: "Juliana",
    idade: 17,
    sexo: "feminino",
    profissão: "assist. Operacional",
    nacionalidade: "brasileira"
};

const object4 = {
    nome: "Bruno",
    idade: 41,
    sexo: "masculino",
    profissão: "Estudante",
    nacionalidade: "brasileira"
};

const object5 = {
    nome: "Carlos",
    idade: 47,
    sexo: "masculino",
    profissão: "Contador",
    nacionalidade: "Português"
};

console.log("Resposta do exercício 5:")

if (object1.idade >= 18 && object1.nacionalidade === "brasileira") {
    console.log(`${object1.nome} está aprovado para obter a nacionalidade.`);
}
else {
    console.log(`${object1.nome} não foi aprovado para obter a nacionalidade.`);
};

if (object2.idade >= 18 && object2.nacionalidade === "brasileira") {
    console.log(`${object2.nome} está aprovado para obter a nacionalidade.`);
}
else {
    console.log(`${object2.nome} não foi aprovado para obter a nacionalidade.`);
};

if (object3.idade >= 18 && object3.nacionalidade === "brasileira") {
    console.log(`${object3.nome} está aprovado para obter a nacionalidade.`);
}
else {
    console.log(`${object3.nome} não foi aprovado para obter a nacionalidade.`);
};

if (object4.idade >= 18 && object4.nacionalidade === "brasileira") {
    console.log(`${object4.nome} está aprovado para obter a nacionalidade.`);
}
else {
    console.log(`${object4.nome} não foi aprovado para obter a nacionalidade.`);
};

if (object5.idade >= 18 && object5.nacionalidade === "brasileira") {
    console.log(`${object5.nome} está aprovado para obter a nacionalidade.`);
}
else {
    console.log(`${object5.nome} não foi aprovado para obter a nacionalidade.`);
};


/* Exercício 6 - Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente. */

const note = Math.floor(Math.random() * 10 - 1);

console.log("Resposta do exercício 6:")

switch (note) {
    case 0:
        console.log("A sua nota foi 0, você foi desclassificado sendo o ultimo colocado.");
    break

    case 1:
        console.log("A sua nota foi 1, você foi desclassificado, sendo penultimo colocado.");
    break

    case 2:
        console.log("A sua nota foi 2, você foi desclassificado, ficando entre os 3 ultimos.");
    break

    case 3:
        console.log("A sua nota foi 3, você foi desclassificado, tente outra vez no futuro.");
    break

    case 4:
        console.log("A sua nota foi 4, você está na repescagem, mas está 2 pontos atrás dos outros. não desanime.");
    break

    case 5:
        console.log("A sua nota foi 5, você está na repescagem, mas está 1 pontos atrás do outro. não desanime.");
    break

    case 6:
        console.log("A sua nota foi 6, você está na repescagem, é o primeiro da lista com 2 pontos a frente dos outros.");
    break

    case 7:
        console.log("A sua nota foi 7, você está classificado para a proxima rodada.");
    break

    case 8:
        console.log("A sua nota foi 8, você está classificado para a proxima rodada.");
    break

    case 9:
        console.log("A sua nota foi 9, você está classificado para a proxima rodada.");
    break

    case 10:
        console.log("A sua nota foi 10, você está classificado e vai direto para a final.");
    break

    default:
        console.log("Desculpe, mas não encontramos sua pontuação. Verifique junto a administração.");
    break
};


// Exercício 7 - Faça um programa onde leia um numero e diga se ele é par ou impar.

const number = 21;

if (number % 2 === 0) {
    console.log("Resposta do exercício 7: O número é par.");
}
else {
    console.log("Resposta do exercício 7: O número é impar.");
}

// Exercício 8 - Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const numbers = Math.floor(Math.random() * (100 - 1) + 1);

if (numbers % 2 === 0) {

    if (numbers % 5 === 0) console.log("Resposta do exercício 8: O número é par e divisivel por 5.")
    else console.log("Resposta do exercício 8: O número é par e não é divisivel por 5.");
}
else {
    for (let i = 2; i < numbers; i++)
    if(numbers % i === 0) {
        console.log("Resposta do exercício 8: Ele é impar, mas não é primo.");
        break
    } else {
        if(i === numbers -1) console.log("Resposta do exercício 8: Ele é um número primo.");
    }
}

/* Exercício 9 - Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - 
Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - 
Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
Em caso negativo dos casos a cima, 
colocar uma mensagem => Há números pares e ímpares. */

const number1 = 72;
const number2 = 48;
const number3 = 36;
const number4 = 24;

if (number1 % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0 && number4 % 2 === 0) {
    console.log("Resposta do exercício 9: TODOS OS NÚMEROS SÃO PARES.");
}
else if (number1 % 2 !== 0 && number2 % 2 !== 0 && number3 % 2 !== 0 && number4 % 2 !== 0) {
    console.log("Resposta do exercício 9: TODOS OS NÚMEROS SÃO IMPARES.");
}
else {
    console.log("Resposta do exercício 9: Há números pares e ímpares.");
}