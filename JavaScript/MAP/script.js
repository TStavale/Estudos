// MAP

/* 
Ele é uma função.
Cria um novo array, a partir do array percorrido (array original).
Cria um novo array, com a mesma quantidade de itens do array original. ELe RETORNA um novo array que pode ser guardado em algum lugar.
Aceita 3 parâmetros;
    -item do array;
    -index;
    -array completo.
*/


const numbers = [1,2,3,4];
const students = [

    {name: "Rodolfo", age: 25},
    {name: "Maria", age: 43},
    {name: "João", age: 21},
    {name: "Bruno", age: 43},
    {name: "Carla", age: 13},
    {name: "Ana", age: 20},
    {name: "Julio", age: 26},

];

/*const newArray = numbers.map((digitos) => {
    return digitos
});
*/

const newStudents = students.map((alunos) => {
    const newStudent = {
        name: alunos.name + ' da silva', // Aqui estou pegando o item existente e acrescentando o novo item ('da silva').
        age: alunos.age - 5 // Aqui estou pegando o item existente e diminuindo em 5 anos a idade.
    };
    return newStudent // // Aqui estou retornando a informação, atraves de um novo array já com as novas informações atualizadas.
});

console.log(students)
console.log(newStudents)


// É possivel colocar uma variável dentro do .map() e inclusive utilisar mais de uma vez o .map().

const double = number => number * 2; // O return já está incluso na arrowfunction.
const sum = number => number + 10;
const minus = number => number - 5;

const newArray2 = numbers.map(double).map(sum).map(minus);

console.log(newArray2);

