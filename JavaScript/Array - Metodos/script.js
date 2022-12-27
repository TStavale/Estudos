// ARRAY - Métodos

const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']

// push

students.push('Rodolfo')

// Server para adcionar novos itens dentro do meu array. Este item será sermpre adicionado ao final do arry.

console.log(students)

// length

console.log(students.length)
// Server para dizer o tamanho do array (quantidade de itens no array).

// sort

console.log(students.sort())
// Serve apara organizar o array em ordem alfabetica.

// delete

delete students[0]
console.log(students)

/* Serve para deletar algum item do array, para isso deve-se escolher a posição do array que quer deletar. 
Ele deixa o espaço do item como vaziu. Lembrando que no array, aa primeira posição é o "0"(zero). */ 

// splice (unir / ligar)

const people = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']

people.splice(1,2)

console.log(people)
/* Serve apara tirar ou colocar itens em lugar determinado do array. 

Para retirar o item do espaço determinado - Primeiro você tem que definir de onde quer começar a tirar (o primeiro item),
no caso acima é a "maria" que está na posição "1" do array, depois apartir disso, você deve colocar o numero de elementos que quer tirar, no caso acima
são 2 (maria e pedro). 

Posso também, colocar itens - Seleciono o espaço do item onde o novo item vai entrar e depois, caso queria coloco quantos itens quero tirar,
caso não, coloco "0" e depois o item que desejo que seja inserido no array.

*/
const groupPeople = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']

groupPeople.splice(1,0, 'Rodolfo')

console.log(groupPeople)

// slice (fatiar)

const trainees = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']

const newTrainees = trainees.slice(1,4)

console.log(newTrainees)
/* Permite que selecione e tire (exibir, pegar para utilizar) itens do array. Ele começa a tirar apartir do indice que você escolher, 
tirando todos os outros em seguida. Você pode definir uma posição para ele parar, caso não queira que ele pegue todos os itens 
seguintes. Nesse caso ele pega o indice de start e não pega o indice de stop. 

DIFERENÇA ENTRE SPLICE E SLICE = 
O splice modifica o array original, acrescentando ou retirando itens específico. Já o slice, cria um novo array, por isso a obrigação 
de criar uma nova variável.

*/

// pop

trainees.pop()

console.log(trainees)
/* Serve apara retirar o último item do array.*/

// shift

trainees.shift()

console.log(trainees)
/* Serve apara retirar o primeiro item do array.*/