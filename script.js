let input = document.querySelector(".input");
let output = document.querySelector(".output");

let Equa = "";

input.textContent = "";
output.textContent = "0";

function AppendValue(value) {
  input.textContent = Equa + value;
  Equa = input.textContent
  output.textContent = eval(Equa);
  output.style.color = '#949494';
}

function ResultValue() {
  output.textContent = eval(Equa);
  Equa = output.textContent
  output.style.color = '#000';
}

function ClearValue() {
  input.textContent = "";
  Equa = ""
  output.textContent = "0";
}

function DeleteValue() {
    Equa = Equa.substring(0, Equa.length-1);
    input.textContent = input.textContent.substring(0, input.textContent.length-1);
}
