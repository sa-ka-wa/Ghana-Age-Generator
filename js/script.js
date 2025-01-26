let persInt = 0;

function handleEvent(event) {
  event.preventDefault();
}

const day = persInt(document.getElementById(day).value);
const month = persInt(document.getElementById(month).value);
const year = persInt(document.getElementById(year).value);
const genderButton = parseInt(
  document.querySelector('input[name="gender"]:checked').value
);

const CC = math.floor(year / 100);
const YY = math.floor(year % 100);
const DD = day;
const MM = month;

if (DD <= 0 || DD > 31) showResult("ERROR . please enter a valid date").return;

if (MM <= 0 || MM > 12) showResult("ERROR . please enter a valid date").return;

const dayOfTheWeek =
  math.floor(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) %
  7;

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

const akanName = genderButton === 1 ? maleNames[index] : femaleNames[index];

if (gender === male) {
  console.log(maleNames[index]);
} else if (gender === female) {
  console.log(femaleNames[index]);
}

showResult(`Your Akhan Name is ${akanName}`);

// Function to show error message
function showError(message) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";

  // Hide result if showing
  document.getElementById("result").style.display = "none";
}
