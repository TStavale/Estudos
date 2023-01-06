// Exercicio 1

const list = [

    {name: "Rodolfo", vip: true },
    {name: "Maria", vip: false },
    {name: "João", vip: true },
    {name: "Bruno", vip: true },
    {name: "Carla", vip: false },
    {name: "Ana", vip: true },
    {name: "Julio", vip: false },

];

const newList = list.map((client) => {
    
    const listVip = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? 'Black' : 'Green'
        /* Para inserir um novo elemento ao item, eu repeti os anteriores e acrescentei o novo. Para saber se era Black ou Green conforme
         aao valor em vip, utilizei o operador Ternario.*/
    };
    return listVip
    
});

console.log(newList)


// Exercicio 2

const students = [

    {name: "Rodolfo", testGrade: 7 },
    {name: "Maria", testGrade: 5 },
    {name: "João", testGrade: 8 },
    {name: "Bruno", testGrade: 9 },
    {name: "Carla", testGrade: 3 },
    {name: "Ana", testGrade: 2 },
    {name: "Julio", testGrade: 10 },

];

const approvedStudents = students.map((student) => {
   let approvedOrNot

    if (student.testGrade >= 7) {
        approvedOrNot = 'approved'
    }
    else {
        approvedOrNot = 'disapproved'
    }

    const students = {
        name: student.name,
        finalResult: approvedOrNot
    }
    return students 

    /* Poderia ser com o OPERADOR TERNÁRIO também, ficaria assim;
    const students = {
        name: student.name,
        finalResult: student.testGrade >= 7 ? 'approved' : 'disapproved'
    }
    return students
    */

});

console.log(approvedStudents);