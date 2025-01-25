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

console.log(persInt);
