let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(operator, op1, op2) {
    switch(operator) {
        case '+':
            return add(op1, op2);
            break;
        case '-':
            return subtract(op1, op2);
            break;
        case 'x':
            return multiply(op1, op2);
            break;
        case '÷':
            return divide(op1, op2);
            break;
    }
}

const display = document.querySelector('.display');
const numBtns = document.querySelectorAll('.num-btn');
const opBtns = document.querySelectorAll('.op-btn');
const calcBtn = document.querySelector('.calc-btn');
const clearBtn = document.querySelector('.clear-btn');

let a = '';
let b = '';
let operator = '';

numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.id;
    });
});

opBtns.forEach((button) => {
    button.addEventListener('click', () => {
        a = Number(display.textContent);
        display.textContent += button.id;
        operator = button.id;
    });
});

calcBtn.addEventListener('click', () => {
    string = display.textContent;
    opArray = ['+','-','x','÷'];
    opArray.forEach((operator) => {
        let index = string.indexOf(operator);
        if (index > 0) b = Number(string.slice(index + 1));
    });
    display.textContent = operate(operator, a, b);
});

clearBtn.addEventListener('click', () => {
    display.textContent = '0';
    a = '';
    b = '';
    operator = '';
});

