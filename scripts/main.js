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

let a;
let b;
let operator;
let clearScreen = false;

numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if(display.textContent == '0') {
            return display.textContent = button.id;
        }
        if(clearScreen) {
            display.textContent = '';
            clearScreen = false;
        }
        // add number to display
        display.textContent += button.id;
    });
});

opBtns.forEach((button) => {
    button.addEventListener('click', () => {
        // sets operator
        if(typeof a == 'number' && operator != '') {
            b = Number(display.textContent);
            result = operate(operator, a, b);
            display.textContent = roundNumber(result);
        }
        a = Number(display.textContent);
        operator = button.id;
        clearScreen = true;
    });
});

calcBtn.addEventListener('click', () => {
    // calculate
    if (b == '' && operator == '') {
        return
    }
    b = Number(display.textContent);
    let result = operate(operator, a, b);
    display.textContent = roundNumber(result);
    a = Number(display.textContent);
    b = '';
    operator = '';
    clearScreen = true;
});

clearBtn.addEventListener('click', () => {
    // clears display
    display.textContent = '0';
    a = '';
    b = '';
    operator = '';
});

function roundNumber(num) {
    if(num % 1 != 0) {
        return num.toFixed(2);
    }
    return num;
}