11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

//- What is the year today?
const year= new Date();
console.log(year.getFullYear());

//What is the month today as a number?
console.log(year.getMonth());

//What is the date today?
console.log(year.getDate());

//What is the day today as a number
console.log(year.getDay());

//What is the hours now?
console.log(year.getHours());

//What is the minutes now?
console.log(year.getMinutes());

//- Find out the numbers of seconds elapsed from January 1, 1970 to now.
let now = Date.now();
let seconds = now / 1000;
console.log(seconds);

console.log("Question 11 completed");