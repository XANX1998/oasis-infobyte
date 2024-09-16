const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.btn'));
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');
        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

equalsButton.addEventListener('click', () => {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    display.value = '';
});
