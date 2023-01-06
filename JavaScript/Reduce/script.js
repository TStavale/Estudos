// REDUCE

/*
Ele é uma função.
Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)
Aceita 4 parâmetros
    -acumulador
    -valor atual
    -index
    -array completo
*/

const list = [1,2,3,4];

const sum = list.reduce((acc, current) => {
    return acc + current
}, 0)

console.log(sum)
/* Aqui o acc é o acumulador, ele é responsavel por acumular os valores, no caso em tela, ele está iniciando em 0, a cada passagem ele
irá somar o current (os itens do array) a ele. A operação poderia ser de multiplicação, divisão ou suibtração e o valor do acumulador
pode ser outro diferente de 0. O resultado nesse caso, será a soma de todos os itens no array.*/ 
