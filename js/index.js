function handleEvent(event) {
  event.preventDefault();
}

const day = parseInt(document.getElementById("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const genderInput = parseInt(
  document.querySelector('input[name="gender"]:checked').value
);
let genderButton = null;

if (genderInput) {
  const genderButton = parseInt(genderInput.value, 10);
  console.log("Gender:", genderButton);
} else {
  console.error("No gender selected");
  showError("please select your gender");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", handleEvent);
});

console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

const CC = Math.floor(year / 100);
const YY = Math.floor(year % 100);
const DD = day;
const MM = month;

if (DD <= 0 || DD > 31) showResult("ERROR . please enter a valid date").return;

if (MM <= 0 || MM > 12) showResult("ERROR . please enter a valid date").return;

const dayOfTheWeek =
  Math.floor(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) %
  7;

console.log(dayOfTheWeek);

const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const index = (dayOfTheWeek % 7) + 7;

console.log("index ", index);

const akanName = genderButton === 1 ? maleNames[index] : femaleNames[index];

if (genderButton === male) {
  console.log(maleNames[index]);
} else if (genderButton === female) {
  console.log(femaleNames[index]);
}

console.log("Akan Name:", akanName);

function showResult(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = message;
  resultDiv.style.display = "block";
}

// Function to show error message
function showError(message) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";

  // Hide result if showing
  document.getElementById("result").style.display = "none";
}

if (akanName) {
  showResult(`Your Akan Name is ${akanName}`);
} else {
  showResult("ERROR: Unable to determine Akan name");
}
