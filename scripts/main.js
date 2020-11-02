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
        case '*':
            return multiply(op1, op2);
            break;
        case '/':
            return divide(op1, op2);
            break;
    }
}

const display = document.querySelector('.display');
const numBtns = document.querySelectorAll('.num-btn');
const opBtns = document.querySelectorAll('.op-btn');
const calcBtn = document.querySelector('.calc-btn');
const clearBtn = document.querySelector('.clear-btn');
const decimalBtn = document.querySelector('.decimal-btn');
const backBtn = document.querySelector('.back-btn');

let a;
let b;
let operator;
let clearScreen = false;

// EventListeners

numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.id);
    });
});

opBtns.forEach((button) => {
    button.addEventListener('click', () => {
        changeOperator(button.id);
    });
});

calcBtn.addEventListener('click', () => {
    calculate();
});

clearBtn.addEventListener('click', () => {
    clearDisplay();
});

backBtn.addEventListener('click', () => {
    deleteNumber();
});

decimalBtn.addEventListener('click', () => {
    addDecimal();
});
// Functions

function updateDisplay(value) {
    if(display.textContent === '0') {
        return display.textContent = value;
    }
    if(clearScreen) {
        display.textContent = '';
        clearScreen = false;
    }
    display.textContent += value;
}

function changeOperator(value) {
    if(operator != '' && clearScreen == false) {
        calculate();
    }
    a = Number(display.textContent);
    operator = value;
    clearScreen = true;

}

function calculate() {
    if(typeof a == 'number' && operator !== '') {
        b = Number(display.textContent);
        const test = roundNumber(operate(operator, a, b));
        console.log('test: ', test);
        display.textContent = test;
        // clearScreen = true;
        operator = '';
    }
    console.log(a);
    console.log(b)
}

function clearDisplay() {
    display.textContent = '0';
    a = '';
    b = '';
    operator = '';
    clearScreen = false;
}

function deleteNumber() {
    if(display.textContent != '') {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function roundNumber(num) {
    if(num % 1 != 0) {
        return num.toFixed(2);
    }
    return num;
}

function addDecimal() {
    let num = display.textContent;
    if(num == Math.floor(num) && num.charAt(num.length - 1) != '.') {
        display.textContent += '.';
    }
}

// Keyboard Support

window.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.key);
    numbers = Array.from(numBtns).map((num) => num.id);
    operators = Array.from(opBtns).map((op) => op.id);
    if(numbers.includes(e.key)) {
        updateDisplay(e.key);
    } else if(operators.includes(e.key)) {
        changeOperator(e.key);
    } else if(e.key == '.') {
        addDecimal();
    } else if(e.key == 'Backspace') {
        deleteNumber();
    } else if(e.key == 'Enter') {
        calculate();
    }
 });