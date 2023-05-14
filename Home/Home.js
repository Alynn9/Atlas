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

// carousel
const carousel = document.querySelector(".carousel");
const inner = carousel.querySelector(".carousel__inner");
const prevBtn = carousel.querySelector(".carousel__btn--prev");
const nextBtn = carousel.querySelector(".carousel__btn--next");
const indicators = carousel.querySelector(".carousel__indicators");
const slides = inner.querySelectorAll(".carousel__slide");
const slideWidth = carousel.querySelector(".carousel__slide").offsetWidth;
let currentPosition = 0;
let intervalId;

for (let i = 0; i < slides.length; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("carousel__indicator");
  if (i === 0) {
    indicator.classList.add("active");
  }
  indicator.addEventListener("click", () => {
    currentPosition = -slideWidth * i;
    updateCarousel();
    resetInterval();
  });
  indicators.appendChild(indicator);
}

prevBtn.addEventListener("click", () => {
  currentPosition += slideWidth;
  if (currentPosition > 0) {
    currentPosition = -slideWidth * (slides.length - 1);
  }
  updateCarousel();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  currentPosition -= slideWidth;
  if (currentPosition < -slideWidth * (slides.length - 1)) {
    currentPosition = 0;
  }
  updateCarousel();
  resetInterval();
});
startInterval();

function updateCarousel() {
  inner.style.transform = `translateX(${currentPosition}px)`;
  const activeIndex = Math.abs(currentPosition / slideWidth);
  updateActiveIndicator(activeIndex);
}

function updateActiveIndicator(index) {
  const activeIndicator = indicators.querySelector(".active");
  if (activeIndicator) {
    activeIndicator.classList.remove("active");
  }
  const newActiveIndicator = indicators.children[index];
  newActiveIndicator.classList.add("active");
}

function resetInterval() {
  clearInterval(intervalId);
  startInterval();
}

function startInterval() {
  intervalId = setInterval(() => {
    currentPosition -= slideWidth;
    if (currentPosition < -slideWidth * (slides.length - 1)) {
      currentPosition = 0;
    }
    updateCarousel();
  }, 4000);
}

// zoom animation
const scrollContainer = document.querySelector(".scroll-container");
const zoomImage = document.querySelector(".zoom-image");

scrollContainer.addEventListener("scroll", function () {
  const scrollPosition = scrollContainer.scrollTop;
  const imagePosition = zoomImage.offsetTop;
  const distance = imagePosition - scrollPosition;
  const threshold = scrollContainer.offsetHeight / 2;

  if (Math.abs(distance) < threshold) {
    const scale = 1 + (threshold - Math.abs(distance)) / threshold;
    zoomImage.style.transform = `scale(${scale})`;
  } else {
    zoomImage.style.transform = "scale(1)";
  }
});

