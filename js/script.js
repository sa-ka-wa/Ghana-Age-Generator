function handleEvent(event) {
  event.preventDefault();
}

const day = parseInt(document.getElementById("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const genderButton = parseInt(
  document.querySelector('input[name="gender"]:checked').value
);

const CC = Math.floor(year / 100);
const YY = Math.floor(year % 100);
const DD = Math.floor(day);
const MM = Math.floor(month);

if (DD <= 0 || DD > 31) {
  showResult("ERROR . please enter a valid date");
  return;
}

if (MM <= 0 || MM > 12) {
  showResult("ERROR . please enter a valid date");
  return;
}

const dayOfTheWeek =
  Math.floor(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) %
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

const index = ((dayOfTheWeek % 7) + 7) % 7;

const akanName = genderButton === 1 ? maleNames[index] : femaleNames[index];

if (genderButton === 1) {
  console.log(maleNames[index]);
} else if (genderButton === 2) {
  console.log(femaleNames[index]);
}

showResult(document.getElementById(akanName));
