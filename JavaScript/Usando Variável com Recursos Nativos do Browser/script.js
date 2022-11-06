alert("Bem-vindo! A seguir pediremos que informe alguns dados." )

let userName = prompt("Qual o seu nome?") //utlizei o camelCase para descrever o nome da variável.
let userAge = prompt("Informe sua idade?")
let ageConfirmation = confirm("Sua idade é " + userAge + " anos?")


alert("Nome: " + userName + "\nIdade: " + userAge + " anos" + "\nIdade confirmada: " + ageConfirmation + ".")
/* Utilizei "\n" na frente do texto que quero que apareça na janela, pois isso permite que se quebre linha e assim 
cada um vai aparecer embaixo do outro.*/ 

