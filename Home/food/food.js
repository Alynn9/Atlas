// let count = 0;
// const counterElement = document.getElementById("counter");
// const decrementButton = document.getElementById("decrement-btn");

// function increment() {
//   count++;
//   counterElement.innerHTML = count;
// }

// function decrement() {
//   count--;
//   if (count <= 0) {
//     count = 0;
//     for (let i = 0; i < buttons.length; i++) {
//       buttons[i].classList.remove("selected");
//     }
//   }
//   counterElement.innerHTML = count;
// }

// // decrementButton.addEventListener("click", decrement);

// let selected = false;
// let buttons = document.querySelectorAll(".glass-button");

// function select(selectedButton) {
//   for (let i = 0; i < buttons.length; i++) {
//     if (buttons[i] !== selectedButton) {
//       buttons[i].classList.remove("selected");
//     }
//   }

//   selectedButton.classList.add("selected");
//   increment();
// }

// const productData = {
//   product1: {
//     title: "Cold Beverages",
//     description:
//       "Pepsi is a refreshing and energizing carbonated soft drink that has been enjoyed by millions around the world for decades. With its unique blend of cola flavor and crisp carbonation, Pepsi is the perfect choice for anyone looking for a delicious and satisfying beverage.",
//     image: "../../Assets/3d-fluency-cola.png",
//     buttons: [
//       { id: "small", text: "Small", price: "3.00" },
//       { id: "medium", text: "Medium", price: "3.50" },
//       { id: "large", text: "Large", price: "4.00" },
//     ],
//   },
//   product2: {
//     title: "Hot Beverages",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sapien sodales, facilisis enim vitae, fermentum enim. Donec convallis sapien non orci consectetur, vel iaculis dolor fringilla. Nam aliquam congue tincidunt. Duis posuere libero quam, vel varius odio dapibus id.",
//     image: "../../Assets/3d-fluency-coffee.png",
//     buttons: [
//       { id: "small", text: "Short", price: "2.50" },
//       { id: "medium", text: "Tall", price: "3.00" },
//       { id: "large", text: "Grande", price: "3.50" },
//     ],
//   },
// };

// const product = productData.product1; // change this to select a different product

// const titleElement = document.getElementById("product-title");
// const descriptionElement = document.getElementById("product-description");
// const imageElement = document.getElementById("product-image");
// const buttonContainerElement = document.getElementById("button-container");
// const counterElement = document.getElementById("counter");
// const decrementButton = document.getElementById("decrement-btn");
// const incrementButton = document.getElementById("increment-btn");

// titleElement.textContent = product.title;
// descriptionElement.textContent = product.description;
// imageElement.src = product.image;

// product.buttons.forEach(button => {
//   const buttonElement = document.createElement("button");
//   buttonElement.classList.add("glass-button");
//   buttonElement.textContent = `${button.text} ${button.price}$`;
//   buttonElement.addEventListener("click", () => {
//     select(buttonElement);
//   });
//   buttonContainerElement.appendChild(buttonElement);
// });

// let count = 0;

// function increment() {
//   count++;
//   counterElement.innerHTML = count;
// }

// function decrement() {
//   count--;
//   if (count < 0) {
//     count = 0;
//   }
//   counterElement.innerHTML = count;
// }

// function select(selectedButton) {
//   const buttons = buttonContainerElement.querySelectorAll("button");
//   buttons.forEach(button => {
//     if (button !== selectedButton) {
//       button.classList.remove("selected");
//     }
//   });
//   selectedButton.classList.add("selected");
//   increment();
// }

const productData = {
  product1: {
    title: "Cold Beverages",
    description:
      "Pepsi is a refreshing and energizing carbonated soft drink that has been enjoyed by millions around the world for decades. With its unique blend of cola flavor and crisp carbonation, Pepsi is the perfect choice for anyone looking for a delicious and satisfying beverage.",
    image: "../../Assets/3d-fluency-cola.png",
    buttons: [
      { id: "small", text: "Small 3.00$", price: 3.0 },
      { id: "medium", text: "Medium 3.50$", price: 3.5 },
      { id: "large", text: "Large 4.00$", price: 4.0 },
    ],
  },
  product2: {
    title: "Hot Beverages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sapien sodales, facilisis enim vitae, fermentum enim. Donec convallis sapien non orci consectetur, vel iaculis dolor fringilla. Nam aliquam congue tincidunt. Duis posuere libero quam, vel varius odio dapibus id.",
    image: "../../Assets/3d-fluency-coffee.png",
    buttons: [
      { id: "short", text: "Short 2.50$", price: 2.5 },
      { id: "tall", text: "Tall 3.00$", price: 3.0 },
      { id: "grande", text: "Grande 3.50$", price: 3.5 },
    ],
  },
};

const productContainer = document.getElementById("product-container");

for (const key in productData) {
  const product = productData[key];

  const glassBoxElement = document.createElement("div");
  glassBoxElement.classList.add("glass-box");

  const glassBoxTextImageElement = document.createElement("div");
  glassBoxTextImageElement.classList.add("glass-box-text-image");

  const glassBoxTextElement = document.createElement("div");
  glassBoxTextElement.classList.add("glass-box-text");

  const titleElement = document.createElement("h2");
  titleElement.textContent = product.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;

  const buttonContainerElement = document.createElement("div");
  buttonContainerElement.classList.add("glass-box-buttons");

  const counterButtonElement = document.createElement("div");
  counterButtonElement.classList.add("counter-btn");

  const decrementButton = document.createElement("button");
  decrementButton.id = "decrement-btn";
  decrementButton.textContent = "-";
  decrementButton.onclick = decrement;

  const counterElement = document.createElement("div");
  counterElement.id = "counter";
  counterElement.textContent = "0";

  const incrementButton = document.createElement("button");
  incrementButton.id = "increment-btn";
  incrementButton.textContent = "+";
  incrementButton.onclick = increment;

  const imageElement = document.createElement("img");
  imageElement.id = "product-image";
  imageElement.src = product.image;

  glassBoxTextElement.appendChild(titleElement);
  glassBoxTextElement.appendChild(descriptionElement);
  glassBoxTextElement.appendChild(buttonContainerElement);

  product.buttons.forEach(button => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("glass-button");
    buttonElement.textContent = button.text;
    buttonElement.addEventListener("click", () => {
      select(buttonElement, button.price);
    });
    buttonContainerElement.appendChild(buttonElement);
  });

  counterButtonElement.appendChild(decrementButton);
  counterButtonElement.appendChild(counterElement);
  counterButtonElement.appendChild(incrementButton);

  glassBoxTextElement.appendChild(counterButtonElement);
  glassBoxTextImageElement.appendChild(glassBoxTextElement);
  glassBoxTextImageElement.appendChild(imageElement);
  glassBoxElement.appendChild(glassBoxTextImageElement);
  productContainer.appendChild(glassBoxElement);

  const line = document.createElement("div");
  line.classList.add("line");
  glassBoxTextElement.appendChild(line);
}

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

let selected = false;
let buttons = document.querySelectorAll(".glass-button");
function select(selectedButton , id) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] !== selectedButton) {
      buttons[i].classList.remove("selected");
    }
  }
  selectedButton.classList.add("selected");
  increment();
}