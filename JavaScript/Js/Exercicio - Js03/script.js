/* Exercício 01 - Escreva um programa onde, você chame uma função enviando um número, 
a função deve imprime na tela os número de 1 até o número que você enviou. */

const numb = (number) => {
    for(i=1; i < number; i++ ){
        console.log('Exercício 01: Contando...', i)
    }
}

numb(6)