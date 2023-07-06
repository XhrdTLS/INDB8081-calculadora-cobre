Number.prototype.roundTo = function() { return Math.round(this * 10 ** arguments[0]) / 10 ** arguments[0]};
const input = document.getElementById("input");
input.oninput = calc;
const inputFrame = document.querySelector(".input-frame")
input.onfocus = () => inputFrame.style.outline = "#556EA5 2px solid";
input.onmouseout = () => inputFrame.style.outline = "none";

const cobreFino = document.getElementById("cobre-fino");
const algoMas = document.getElementById("nose");
const anodos = document.getElementById("anodos");
const catodos = document.getElementById("catodos");

function calc() {
    cobreFino.innerText = (input.value * 0.012).roundTo(2);
    algoMas.innerText = input.value;
    anodos.innerText = (input.value / 0.2425).roundTo(2);
    catodos.innerText = (input.value / 0.75).roundTo(2);
}
calc();
