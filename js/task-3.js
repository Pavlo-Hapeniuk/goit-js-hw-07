const inputElem = document.querySelector("#name-input");
console.log(inputElem);
const outputElem = document.querySelector("#name-output");
console.log(outputElem);

inputElem.addEventListener("input", function (event) {
  const value = event.currentTarget.value.trim();
  if (value === "") {
    outputElem.textContent = "Anonymous";
  } else {
    outputElem.textContent = value;
  }
});
