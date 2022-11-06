alert("Olá! Iremos fazer um exercicio com a finalidade de informar a diferença de idade entre duas pessoas.")

let olderUserName = prompt("Digite o nome da pessoa mais velha.")
let olderUserAge = prompt("Digite a idade da pessoa mais velha.")

let youngerUserName = prompt("Digite o nome da pessoa mais nova.")
let youngerUserAge = prompt("Digite a idade da pessoa mais nova.")

let agedifference = olderUserAge - youngerUserAge

alert(
    "Nome: " + olderUserName + " \nIdade: " + olderUserAge + " anos" + 
    "\n\n" + "\nNome: " + youngerUserName + "\nIdade: " + youngerUserAge + " anos"+ 
    "\n\n"  + "\nDiferença de idade: " + agedifference + " anos."
)