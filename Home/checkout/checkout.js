const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

// const dateInput = document.getElementById("movie-date-time-picker__date-input");
// const timeInput = document.getElementById("movie-date-time-picker__time-input");
// const submitButton = document.querySelector(".movie-date-time-picker__submit");
// const dateDisplay = document.getElementById("checkout__date");
// const timeDisplay = document.getElementById("checkout__time");
// const priceDisplay = document.getElementById("checkout__price");
// const vatDisplay = document.getElementById("checkout__vat");
// const totalDisplay = document.getElementById("checkout__total");

// // disable submit button initially
// submitButton.disabled = true;

// // add event listeners to inputs to enable submit button if both are filled
// dateInput.addEventListener("input", enableSubmitButton);
// timeInput.addEventListener("input", enableSubmitButton);

// function enableSubmitButton() {
//   if (dateInput.value && timeInput.value) {
//     submitButton.disabled = false;
//   }
//   // add event listener to submit button to update checkout summary
//   submitButton.addEventListener("click", updateCheckoutSummary);

//   function updateCheckoutSummary(event) {
//     event.preventDefault();

//     // get date and time from inputs
//     const date = dateInput.value;
//     const time = timeInput.value;

//     // set date and time in checkout summary
//     dateDisplay.textContent = date;
//     timeDisplay.textContent = time;

//     // calculate price and VAT
//     const price = 10.0; // replace with actual price
//     const vatRate = 0.11;
//     const vat = price * vatRate;
//     const total = price + vat;

//     // display price and VAT in checkout summary
//     priceDisplay.textContent = price.toFixed(2);
//     vatDisplay.textContent = vat.toFixed(2);
//     totalDisplay.textContent = total.toFixed(2);
//   }
// }
