const dateInput = document.getElementById("movie-date-time-picker__date-input");
const timeInput = document.getElementById("movie-date-time-picker__time-input");
const submitButton = document.querySelector(".movie-date-time-picker__submit");

// disable submit button initially
submitButton.disabled = true;

// add event listeners to inputs to enable submit button if both are filled
dateInput.addEventListener("input", enableSubmitButton);
timeInput.addEventListener("input", enableSubmitButton);

function enableSubmitButton() {
  if (dateInput.value && timeInput.value) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

submitButton.addEventListener("click", submitDateTime);

function submitDateTime() {
  const date = dateInput.value;
  const time = timeInput.value;
  // do something with selected date and time
}
