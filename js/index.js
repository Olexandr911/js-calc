document.querySelectorAll('.number').forEach(el=>el.addEventListener('click', clickNumber));
document.querySelector('.operation').addEventListener('click', operation);
document.querySelector('.subtract').addEventListener('click', subtract);
document.querySelector('.calc').addEventListener('click', calc);
document.querySelector('.divided').addEventListener('click', divided);
document.querySelector('.multiply').addEventListener('click', multiply);
document.querySelector('.clear').addEventListener('click', clear);
const display = document.querySelector('.display');

function clickNumber(event) {
    display.value += event.target.innerText;
}

function operation() {
    display.value += '+';
}

function calc() {
    display.value = eval(display.value);
}

function subtract() {
    display.value += '-';
}

function divided() {
    display.value += '/';
}

function multiply() {
    display.value += '*';
}
function clear() {
    display.value = '';
}
