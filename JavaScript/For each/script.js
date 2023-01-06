// For each


/* 
Serve para percorrer arrays, ele é uma função. 
O for Each aceita até 3 argumentos (lembrando que o nome do argumento quem dá é você) e cada um desses argumentos faz uma coisa;
    - a 1ª posição do argumento, trás para você, os itens do array. 
    - a 2ª posição irá trazer o index, ou seja, a posição do array em que se encontra o item
    - a 3ª posição irá trazer o array completo. LEMBRANDO que se eu quero mostrar o array completo, preciso das duas posições anteriores
    preenchidas.

*/


const students = [

    {name: "Rodolfo", age: 25},
    {name: "Maria", age: 43},
    {name: "João", age: 21},
    {name: "Bruno", age: 43},
    {name: "Carla", age: 13},
    {name: "Ana", age: 20},
    {name: "Julio", age: 26},

];

students.forEach( (alunos, index, array) => {
    console.log(array)
})


// Caso Concreto.

const people = [

    {name: "Rodolfo", age: 25},
    {name: "Maria", age: 43},
    {name: "João", age: 21},
    {name: "Bruno", age: 43},
    {name: "Carla", age: 13},
    {name: "Ana", age: 20},
    {name: "Julio", age: 26},

];

let allPeopleAge = 0; // a variável irá começar no valor zero.

people.forEach( (alunos, index) => {
    allPeopleAge = allPeopleAge + alunos.age; /* A variável será o valor dela + o valor que estiver em age e a cada passagem ela irá somar
                                                o valor de age.*/

    console.log(`O aluno(a), chama-se ${alunos.name}, tem ${alunos.age} anos e está ana posição ${index} do array.`)                                            
});

const averageAge = allPeopleAge / people.length; // aqui será dividido o total da soma das idades do estudante pela quantidade de estudantes.

console.log(`A media de todos os alunos é de ${averageAge.toFixed(0)} anos.`);