// const genderButton = document.getElementById("genderButton");

// document.getElementsByClassName(birthday).innerHTML = "Happy Birthday!";

// const cancelButton = document.getElementById("cancelButton");

// cancelButton.addEventListener("click", function () {
//   console.log("Cancel button clicked");
// });

// let male = document.getElementById("male");
// let female = document.getElementById("female");

// let dateInput = document.getElementById("dateInput");
// console.log(dateInput);

// function checkGender() {
//   if (male.checked) {
//     return {
//       Sunday: "Kwasi",
//       Monday: "Kwadwo",
//       Tuesday: "Kwabena",
//       Wednesday: "Kwaku",
//       Thursday: "Yaw",
//       Friday: "Kofi",
//       Saturday: "Kwame",
//     };
//   } else if (female.checked) {
//     return {
//       Sunday: "Akosua",
//       Monday: "Adwoa",
//       Tuesday: "Abenaa",
//       Wednesday: "Akua",
//       Thursday: "Yaa",
//       Friday: "Afua",
//       Saturday: "Ama",
//     };
//   }
// }
let persInt = ;

function handleEvent(event) {
  event.preventDefault();
}

const day = persInt(document.getElementById(day).value);
const month = persInt(document.getElementById(month).value);
const year = persInt(document.getElementById(year).value);
const genderButton = parseInt(
  document.querySelector('input[name="gender"]:checked').value
);

const CC = math.floor(year/100);
const YY = math.floor(year%100);
const DD = Math.floor(day);
const MM = Math.floor(month);

if (DD <=0 || DD>31) 
  showResult(error).return;

const dayOfTheWeek= math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
 
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]