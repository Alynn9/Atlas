const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Drama";
  }, 0);
  setTimeout(() => {
    text.textContent = " 3D";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Horror";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);
