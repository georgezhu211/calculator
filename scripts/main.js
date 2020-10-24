let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(operator, op1, op2) {
    switch(operator) {
        case 'add':
            return add(op1, op2);
            break;
        case 'subtract':
            return subtract(op1, op2);
            break;
        case 'multiply':
            return multiply(op1, op2);
            break;
        case 'divide':
            return divide(op1, op2);
            break;
    }
}