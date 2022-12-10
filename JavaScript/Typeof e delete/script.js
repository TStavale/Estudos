// Operadores typeof e delete.


//typeof

/* O typeof serve para você identificar o tipo da variável */

const myNumber = 20;
const myString = "olá, sou uma string";

const myObject = {
    name: "João",
    height: 1.75,
    age: 20
};

console.log(typeof myObject);
//coloca o typeof e depois a variável que quer identificar o tipo.


//delete


delete myObject.height;
// coloco o delete o objeto, uso o "ponto (.)" e o atributo que quero deletar do objeto, no caso em exemplo é o "height".

console.log(myObject);