
// Basic operatation functions
function add(a, b) {
    return parseFloat(a) + parseFloat(b)
}
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
}
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
}
function divide(a, b) {
    return parseFloat(a) / parseFloat(b)
};
// Takes an operator & 2 numbers and calls one function above
function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber,secondNumber);
            break;
        case '-':
            return subtract(firstNumber,secondNumber);
            break;
        // case 'x':
        //     return multiply(firstNumber,secondNumber);
        //     break;
        case '*':
            return multiply(firstNumber,secondNumber);
            break;
        case '/':
            return add(firstNumber,secondNumber);
            break;
    }
};

const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
const userInput = document.getElementById('.user-input');
const result = document.getElementById('.result');




