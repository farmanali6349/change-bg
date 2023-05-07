let inputField = document.getElementById('input-field');
let container = document.getElementById('container');
let label = document.getElementById('label');

inputField.addEventListener('input', changeBg);

function changeBg() {
    container.style.backgroundColor = inputField.value;
}