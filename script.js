const today = new Date();

//Alter
const birthDate = new Date(2007, 7, 7); // Jahr, Monat, Tag

let age = today.getFullYear() - birthDate.getFullYear();

const birthdayThisYear = new Date(
  today.getFullYear(),
  birthDate.getMonth(),
  birthDate.getDate()
);

if (today < birthdayThisYear) {
  age--;
}

document.getElementById("age").textContent = age;

//Semester
const semesterStart = new Date(2025, 9, 1); // Beginn erstes Semester

const vergangeneMonate = ((today.getFullYear() - semesterStart.getFullYear()) * 12 + (today.getMonth() - semesterStart.getMonth()));

const semester = Math.floor(vergangeneMonate/6) + 1;

document.getElementById("semester").textContent = semester; 