//get elements
//increase the number using the button
//while at that change the background

const displayElement = document.getElementById("counterDisplay");
const addBtnElement = document.getElementById("counterAdd");
const subBtnElement = document.getElementById("counterSub");

let total = 0;
const limit = 20;

function updatedisplay() {
  if (total > limit) {
    total = limit;
  }
  if (total < 0) {
    total = 0;
  }
  //setting the background to change color
  //In this case I give it a green  variation
  displayElement.textContent = total;
  document.body.style.setProperty(
    "background-color",
    `rgb(${(total / limit) * 255},64,0)`
  );
}

addBtnElement.addEventListener("click", () => {
  total += 1;
  updatedisplay();
});

subBtnElement.addEventListener("click", () => {
  total -= 1;
  updatedisplay();
});

updatedisplay(); // this one helps us get the color to be green as defeault as it all starts from 0
