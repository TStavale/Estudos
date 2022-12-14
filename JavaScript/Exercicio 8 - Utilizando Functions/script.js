
/* A calculadora terá 4 operações.
somar, subtrair, mutiplicar e dividir. */

function calculate(number1, number2, operation) {

    let result;
    switch (operation) {
        case "+":
            result = number1 + number2;
            break;

        case "-":
            result = number1 - number2;
            break;

        case "*":
            result = number1 * number2;
            break;

        case "/":
            result = number1 / number2;
            break;

        default:
            break;
    }

    return result;
}

console.log(calculate(2,4, '+'));