let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action = decrement]');
const incrementBtnRef = document.querySelector('[data-action = increment]');
const numberRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', decreaseTheNumber);
incrementBtnRef.addEventListener('click', increaseTheNumber);

function decreaseTheNumber () {
    counterValue -= 1;
    numberRef.textContent = counterValue;
}

function increaseTheNumber () {
    counterValue += 1;
    numberRef.textContent = counterValue;
}