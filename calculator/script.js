const display = document.getElementById('display');
let currentInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    currentInput += ` ${op} `;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    display.innerText = '';
}

function calculateResult() {
    if (currentInput === '' || operator === '') return;
    const parts = currentInput.split(` ${operator} `);
    if (parts.length < 2) return;

    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[1]);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.innerText = result;
    currentInput = result.toString();
    operator = '';
}