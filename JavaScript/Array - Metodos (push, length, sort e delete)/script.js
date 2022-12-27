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

delete students[1]
console.log(students)
/* Serve para deletar algum item do array, para isso deve-se escolher a posição do array que quer deletar. 
Ele deixa o espaço do item como vaziu. Lembrando que no array, aa primeira posição é o "0"(zero). */ 