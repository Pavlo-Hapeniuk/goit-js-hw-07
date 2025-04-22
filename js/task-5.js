const backgroundElem = document.querySelector(".color");
const btnElem = document.querySelector(".change-color");

btnElem.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpanElem.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
