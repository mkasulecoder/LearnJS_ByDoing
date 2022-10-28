console.log("Hi there");

let name = "mkasule coder";
const action = "Like the video";

name = "Subscribe";
// action = "Comment";

/*
console.log(name);
console.log(action);
*/

let year = 2002;
let today = 2022;
let sub = today - year;
console.log("There are " + sub + " years between " + today + " and " + year);

//Addition

let oranges = 22;
let mangoes = 12;
let add = oranges + mangoes;
console.log(
  "The grocery bag had " +
    add +
    " items with " +
    oranges +
    " oranges and " +
    mangoes +
    " mangoes"
);

// Dividing
let divid = oranges / mangoes;
console.log("The grocery bag had " + divid);

// Remainder
let remainder = oranges % mangoes;
console.log(
  "There are " + remainder + " oranges when divided by " + mangoes + " mangoes"
);

//Functions
let roundOff = Math.round(divid);
console.log(roundOff);

// Floor
let floorNUmber = Math.floor(divid);
console.log(floorNUmber);

// length of strings
const channel = "mKasule Coder";
console.log(channel.length);
console.log(channel.charAt(3));
console.log("Last char " + channel.charAt(channel.length - 1));
console.log(channel.slice(3, 6));

// Functions
/*
function add(what we want to manipulate) {
    what we want to do
}
*/

// HTML
// <input type="text" name="year" id="year" placeholder="Enter YEar">
// <input type="text" name="today" id="year" placeholder="Enter today">
// HTML

let clientYear = document.getElementById("year");
let clientToday = document.getElementById("today");
let clientYr = clientYear.value;
let cleintTd = clientToday.value;

//declaring
function addYears(clientYr, cleintTd) {
  let result = year + today;
  return result;
}

// call the add function
let solution = addYears(clientYear.value, clientToday.value);

//Store 
console.log(solution);
