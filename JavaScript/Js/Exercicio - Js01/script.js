// Exercício 1 - Faça um programa que SOME 2 números

let numb1 = 15;
let numb2 = 5;

const sum = numb1 + numb2;

console.log("Resultado do exercício 1 = " + sum);

// Exercício 2 - Faça um programa que multiplique 2 números e o resultado adicione 10

let numb3 = 5;
let numb4 = 2;

const sum2 = (numb3 * numb4) + 10;

console.log("Resultado do exercício 2 = " + sum2);

// Exercício 3 - Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33

let squareRoot = Math.sqrt(120,2)

const result = (squareRoot * 10) / 33;

console.log("Resultado do exercício 3 = " + result);

/* Exercício 4 - Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Olá, 
meu nome é (nome 1) e meu partner do CodeClub é (nome2) */

let name1 = "Marcos";
let name2 = "Lucas";

console.log(`Resultado do exercício 4 = Olá meu nome é ${name1} e meu partner do CodeClub é ${name2}.`);

/* Exercício 5 - Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. 
João e Maria, imprime false. */

let name3 = "João";
let name4 = "Maria";
 
let resultName = name3 == name4;
 
console.log("Resultado do exercício 5 = " + resultName);

/* Exercício 6 - Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. 
João e Maria, imprime false. */

let name5 = "João";
let name6 = "Maria";
    
let checkNames = name5 !== name6;
    
console.log("Resultado do exercício 6 = " + checkNames);

/* Exercício 7 - Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. 
Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false. */

const arrayName = ["joão", "Maria"];

const resultArrayName = arrayName[1] == arrayName[2];

console.log("Resultado do exercício 7 = " + resultArrayName);

/* Exercício 8 - Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. 
Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true. */

const arrayName2 = ["joão", "Maria"];

const resultArrayName2 = arrayName2[1] !== arrayName2[2];

console.log("Resultado do exercicio 8 = " + resultArrayName2);

// Exercício 9 - Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.

const friends = [{
        Name: "Horacio",
        age: 39,
        height: 1.87,
        sex: "male",
        Profession: "lawyer"
    },

    {
        Name: "Franklin",
        age: 37,
        height: 1.81,
        sex: "male",
        Profession: "military"
    },

    {
        Name: "Juliana",
        age: 34,
        height: 1.76,
        sex: "Female",
        Profession: "operational assistant"
    },

    {
        Name: "Bruno",
        age: 41,
        height: 1.79,
        sex: "male",
        Profession: "student"
    },

    {
        Name: "Carlos",
        age: 47,
        height: 1.86,
        sex: "male",
        Profession: "accountant"
    }
]

console.log("Resultado do exercício 9 = ");
console.log(friends);

/* Exercício 10 - Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem 
estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João 
e Maria, imprime false.
Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes 
devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, 
imprime false. */

const object1 = {Name: "João"};
const object2 = {Name: "Maria"};

const resultObjet =  object1 == object2;

const object3 = {firstName: "João", secondName: "Maria"};

const resultObjet2 =  object3.firstName == object3.secondName;

console.log(`Resultado do exercício 10 = ${resultObjet} e ${resultObjet2}`);

// Exercício 11 - Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.

const randomNumber = Math.random () * 100 + 1;

const randomInteger = Math.floor(randomNumber);

console.log("Resultado do exercício 11 = " + randomInteger);

/* Exercício 12 - Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 
deve imprimir: 1, 25/5 deve imprimir: 0.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número 
é maior que o segundo. Ex: 2 e 5. Imprime: false.Faça um programa onde entramos com dois números, e ele imprime se o primeiro 
número é menor que o segundo. Ex: 2 e 5. Imprime: true */

let numb8 = 7;
let numb9 = 5;

const calculationResult = numb8 % numb9;

console.log("Resultado do exercício 12 = " + calculationResult);

/* Exercício 13 - Crie um programa que mostra o tamanho do Array. Ex: const array = [0, 1] imprime: 2. const array = 
["banana", "Maça", "laranja"] imprime: 3 */

const array = [0, "João", {name: "Carlos"}, 5];

console.log("Resultado do exercício 13 = " + array.length);

//Exercício finalizado.