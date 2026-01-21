// 1. String

let name = "Natia";
let myName = "Natia";
const lastName = "Mosia";

console.log(name);
console.log(myName);

// 2. Number

const birthYear = 1991;
const carModel = 2024;
const studentScore = 90.5;

console.log(birthYear);
console.log(carModel);
console.log(studentScore);

// 3. Boolean
//--Try to start boolean variable names with "is" --//

// let isStudentPresent;
// let isGameStarted;
// let isMoviesGood;

let isLightOn = false; // The light is off when you enter the room
console.log("Is the light on?", isLightOn);

// Later, someone comes and turn on the light

isLightOn = true;

console.log("Is the light on?", isLightOn);

// 4. Null

// In the assigned seats in a party, it is 4pm  nobody has arrived so it is null

let seatOwner = null;
console.log("Seat status:", seatOwner);

// Party starts at 5pm, the seat has an owner now

seatOwner = "Bohdana";
console.log("Seat status:", seatOwner);

// 5. Undefined

//Before teacher checking attendance
let studentPresent;
console.log("Student present?", studentPresent);

// After checking attendance
studentPresent = "Yes";
console.log("Student present?", studentPresent);

// 6. Arrays (Non-primitive) --> square brackets (mutable)

// Make your variables name descriptive, try to use same data type.

const colors = ["red", "green", "blue"];
console.log(colors);

const studentScores = [70, 85, 88, 95];
console.log(studentScores);

// Not Recommended for arrays!!! - Array that has all kind of data types
// Ex: const array = ["Johnathan", 30, true"];

// 7. Object (Non-primitive) mutable  --> curly braces
// left side inside curly braces is "keys" and the right side is "values"

let person = {
  name: "Alex",
  age: 42,
  isStudent: false,
  isInNYC: true,
  favoriteFruits: ["banana", "apple", "mango"],
};

console.log(person);

let soccerPlayer = {
  name: "Cristiano",
  age: 41,
  isSoccerPlayer: true,
  country: {
    countryName: "Saudi Arabia",
    city: "Riyadh",
    zipcode: "567890",
  },
};
console.log(soccerPlayer);

// Accessing a key in an object
console.log(soccerPlayer.country);
