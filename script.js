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
let btn = document.getElementById('.');

let btnAdd = document.getElementById('+');
let btnSub = document.getElementById('-');
let btnMul = document.getElementById('x');
let btnDiv = document.getElementById('/');
let btnEql = document.getElementById('=');

let btnClear = document.getElementById('C');

let input = document.querySelector('.input');
let output = document.querySelector('.output');

output.textContent = "0"

function AppendValue(value){
    input.value += value;

}

function ResultValue(){
output.textContent=eval(input.value)
}

function ClearValue(){

    input.value = "";
    output.textContent = "0"
}

function DeleteValue(){

}









