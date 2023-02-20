function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValueRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");

changeColorBtnRef.addEventListener("click", () => {
  console.log(getRandomHexColor());
  document.body.style.backgroundColor = getRandomHexColor();
  colorValueRef.textContent = getRandomHexColor();
});
