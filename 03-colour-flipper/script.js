//Events for the button.
//calculate the hexstring and apply it to the background of the page

const newColorButton = document.getElementById("new-colour-button");
const currentColorButton = document.getElementById("current-colour");

//get an array that contains the hexvalues
const hexValues = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValues() {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  const randomHexValue = hexValues[randomIndexPosition];
  return randomHexValue;
}
//create another function to get the string
function getRandomHexString(stringLenght) {
  let hexString = "";
  for (let i = 0; i < stringLenght; i++) {
    hexString += getRandomHexValues();
  }

  return hexString;
}

newColorButton.addEventListener("click", () => {
  const randomHexString = "#" + getRandomHexString(6);

  document.body.style.setProperty("background-color", randomHexString);

  currentColorButton.textContent = randomHexString;
});
