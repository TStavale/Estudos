/* Exercício 01 - Escreva um programa onde, você chame uma função enviando um número, 
a função deve imprime na tela os número de 1 até o número que você enviou. */

const numb = (number) => {
    for(i=1; i < number; i++ ){
        console.log('Resposta do exercício 01: Contando...', i)
    }
}

numb(6);

/* Exercício 02 - Escreva um programa onde, você chame uma função enviando um número 
(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. */

//primeira coisa criar uma função que so aceite numeros de 1 a 10.

const table = (number) => {
    if(number >10 || number <1) {
        console.log('Resposta do exercício 02: Desculpe! Aceitamos Apenas números entre 1 e 10.');
        return
    }

    for(let i = 1; i <= 10; i++) {
        console.log(`Resposta do exercício 02: ${i} x ${number} = ${i * number}`);
    }
}

table(5);

// Exercício 03 - Escreva um programa onde, você chame uma função, e ela diga a hora exata!

const currentDate = () => {
    
    const dateActual = new Date();
    const day = dateActual.getDate();
    const month = (dateActual.getMonth() + 1);
    const year = dateActual.getFullYear();
    const hours = dateActual.getHours();
    const minutes = dateActual.getMinutes();

    console.log(`Resposta do exercício 03: Hoje é dia ${day} do ${month} de ${year}. Agora são ${hours}:${minutes}.`);
}

currentDate();

// Exercício 04 - Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const currentYear = () => {
    
    const dateActual = new Date();
    const year = dateActual.getFullYear();


    console.log(`Resposta do exercício 04: Estamos no ano de ${year}.`);
}

currentYear();

// Exercício 05 - Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior.

const numbers = (number1, number2) => {
    if(number1 > number2) {
        console.log(`Resposta do exercício 05: O número ${number1} é maior que ${number2}.`);
    }
    else {
        console.log(`Resposta do exercício 05: O número ${number1} é menor que ${number2}.`);
    }
}

numbers(9,8);

/* Exercício 06 - A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
A prefeitura deseja saber: 
- média do salário da população; 
- média do número de filhos; 
- maior salário; 
- O final da leitura de dados se dará com a entrada de um salário negativo. 
- Faça isso usando uma função! */


const population = [ 
    {
        name: "Julia",
        salary: 300,
        children: 3
    },
    {
        name: "Marcos",
        salary: 700,
        children: 1
    },
    {
        name: "Antonio",
        salary: 1100,
        children: 2
    },
    {
        name: "Marcia",
        salary: 1500,
        children: 0
    },
    {
        name: "Lucas",
        salary: 500,
        children: 2
    },
    {
        name: "Flavia",
        salary: -300,
        children: 3
    }
]

function findAverageAndHighestSalary (populationInformation) {

    let averageChildren = 0;
    let averageSalary = 0;
    let highestSalary = 0;

    for(let i = 0; i <= populationInformation.length; i++) {
        const salary = populationInformation[i].salary;
        const children = populationInformation[i].children;
        
        if (salary > highestSalary) highestSalary = salary

        if (salary < 0) {
            console.log("Resposta do exercício 06:");
            console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`);
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`);
            console.log(`Maior salário R$${highestSalary}`);
            break
        }
        else {
            averageSalary = averageSalary + salary;
            averageChildren += children;
        }

    }

}


findAverageAndHighestSalary(population);

// Exercício 07 - Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.



/* Exercício 08 - Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - 
Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. 
Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo. */