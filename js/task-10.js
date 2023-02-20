function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');



function createBoxes(amount) {
  let elements = [];
  for (let i = 0; i <= amount; i += 1) {
    const boxRef = document.createElement('div');
    boxRef.style.width = `${i * 10 + 30}px`;
    boxRef.style.height = `${i * 10 + 30}px`;
    boxRef.style.backgroundColor = getRandomHexColor();
    elements.push(boxRef);
  }
  boxesRef.append(...elements);
  return boxesRef;
}

function deleteBoxes () {
  boxesRef.innerHTML = '';
}

createBtnRef.addEventListener('click', () => {
	createBoxes();
})

destroyBtnRef.addEventListener('click', () => {
  deleteBoxes();
})