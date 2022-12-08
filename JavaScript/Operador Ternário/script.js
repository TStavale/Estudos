/* Operador Ternário

?  se
:  se não

O uso é recomendado apenas quando a expressão de verificação e os blocos de codigos são pequenos (uma linha ou um comando no if ou else), porque
ficar encadeando operadores ternários pode-se gerar o um codigo "Macarronico", codigo dificil de se compreender.

*/

//Exemplo 1

const rain = false;

const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva';
/* A condição (no caso o rain) for verdadeira, ele vai mostrar o valor a direita da "?"" (levar guarda-chuva), 
se não, ele mostrará o valor a direita do ":" (deixar guarda-chuva) */

console.log("Exemplo 1 - " + umbrela);

//Exemplo 2

const balance = true;
const isNotBlocked = true;
const accountExist = true;

const tranferOk = balance && isNotBlocked && accountExist ? 'Transferência Realizada' : 'Transferência Negada';


console.log("Exemplo 2 - " + tranferOk);