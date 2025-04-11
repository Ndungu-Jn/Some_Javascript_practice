//change the span and interchange with an input name by the use of the button.

const btnElment = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElment.addEventListener("click", () => {
  const myName = prompt("Please Enter your name:");
  spanElement.textContent = myName;
});
