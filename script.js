let btn9 = document.getElementById('9');
let btn8 = document.getElementById('8');
let btn7 = document.getElementById('7');
let btn6 = document.getElementById('6');
let btn5 = document.getElementById('5');
let btn4 = document.getElementById('4');
let btn3 = document.getElementById('3');
let btn2 = document.getElementById('2');
let btn1 = document.getElementById('1');
let btn0 = document.getElementById('0');

let btnAdd = document.getElementById('+');
let btnSub = document.getElementById('-');
let btnMul = document.getElementById('x');
let btnDiv = document.getElementById('/');
let btnEql = document.getElementById('=');

let btnClear = document.getElementById('C');

let input = document.querySelector('.input');
let output = document.querySelector('.output');

let inputvalue = '';
var value1 = '';
var value2 = '';
var operation = '';

btn9.addEventListener('click', () => {
    input.textContent = inputvalue + btn9.textContent;
    inputvalue = input.textContent;
});
btn8.addEventListener('click', () => {
    input.textContent = inputvalue + btn8.textContent;
    inputvalue = input.textContent;
});
btn7.addEventListener('click', () => {
    input.textContent = inputvalue + btn7.textContent;
    inputvalue = input.textContent;
});
btn6.addEventListener('click', () => {
    input.textContent = inputvalue + btn6.textContent;
    inputvalue = input.textContent;
});
btn5.addEventListener('click', () => {
    input.textContent = inputvalue + btn5.textContent;
    inputvalue = input.textContent;
});
btn4.addEventListener('click', () => {
    input.textContent = inputvalue + btn4.textContent;
    inputvalue = input.textContent;
});
btn3.addEventListener('click', () => {
    input.textContent = inputvalue + btn3.textContent;
    inputvalue = input.textContent;
});
btn2.addEventListener('click', () => {
    input.textContent = inputvalue + btn2.textContent;
    inputvalue = input.textContent;
});
btn1.addEventListener('click', () => {
    input.textContent = inputvalue + btn1.textContent;
    inputvalue = input.textContent;
});
btn0.addEventListener('click', () => {
    input.textContent = inputvalue + btn0.textContent;
    inputvalue = input.textContent;
});
btnClear.addEventListener('click', () => {
    input.textContent = '';
    output.textContent = '';
    inputvalue = input.textContent;
});

function Operation() {
    value1 = input.textContent;
    output.textContent = value1;
    input.textContent = '';
    inputvalue = input.textContent;
    value2 = value1;
}

btnAdd.addEventListener('click', () => {

    Operation();
    operation = "add";

});
btnSub.addEventListener('click', () => {

    Operation();
    operation = "sub";

});
btnMul.addEventListener('click', () => {

    Operation();
    operation = "mul";

});
btnDiv.addEventListener('click', () => {

    Operation();
    operation = "div";

});

btnEql.addEventListener('click', () => {

    value1 = input.textContent;

    if (operation == "add") {
        Add(value2, value1)
    } else if (operation == "sub") {
        Sub(value2, value1)
    } else if (operation == "mul") {
        Mul(value2, value1)
    } else {
        Div(value2, value1)
    }

    input.textContent = z;
    output.textContent = '';
    value2 = '';

});

function Add(x, y) {
    x = Number(x);
    y = Number(y);
    z = x + y;
    return z;
}

function Sub(x, y) {
    x = Number(x);
    y = Number(y);
    z = x - y;
    return z;
}

function Mul(x, y) {
    x = Number(x);
    y = Number(y);
    z = x * y;
    return z;
}

function Div(x, y) {
    x = Number(x);
    y = Number(y);
    z = x / y;
    return z;
}