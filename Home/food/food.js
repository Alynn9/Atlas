let count = 0;
const counterElement = document.getElementById("counter");
const decrementButton = document.getElementById("decrement-btn");

function increment() {
  count++;
  counterElement.innerHTML = count;
}

function decrement() {
  count--;
  if (count <= 0) {
    count = 0;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected");
    }
  }
  counterElement.innerHTML = count;
}

// decrementButton.addEventListener("click", decrement);

let selected = false;
let buttons = document.querySelectorAll(".glass-button");

function select(selectedButton) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] !== selectedButton) {
      buttons[i].classList.remove("selected");
    }
  }

  selectedButton.classList.add("selected");
  increment();
}
