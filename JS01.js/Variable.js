// 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

// String Data type
let str="Aashish Thakur"
console.log(str);
console.log(typeof(str));


// Boolean Data type
let bol=true;
console.log(bol);
console.log(typeof(bol));


//Undefined data type
let undf;
console.log(undf);
console.log(typeof(undf));


//Null data type
let nl= null;
console.log(nl);
console.log(typeof(nl));
console.log("Question 1 solved");


// 02. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.


let fname="Aashish"
let lname="Thakur"
let mrtlsts="Unmarried"

console.log(`Full Name :- ${fname} ${lname} and Martial Status:- ${mrtlsts}`);
console.log("Question 2 solved");


// 03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.


let str2="Welcome to our Country"
console.log(str2.toUpperCase());

console.log("Question 3 Solved");


//04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

let str4 = "the lazy fox jumps over the lazy dog";
console.log(str4.includes("Script")); //false

console.log("Question 4 solved");


//05. Declare a varibale and assign string value to it and then split it into an array using split() method.

let splt="Aashish Thakur"
console.log(splt.split('')); // convert into object

console.log("Question 5 solved");



//06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let splt2= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(splt2);
console.log(typeof(splt2));

let splt3=splt2.split(" ");
console.log(splt3);
console.log(typeof(splt3));

console.log("Question 6 solved");

//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".
let arr2=["Arun","gopal","pw skills","Aman",564,"ineuron","pw skills"]

console.log(arr2.lastIndexOf('pw skills')); //it return last index value

console.log(arr2.indexOf('pw skills')); // it return first index value

console.log("Question 7 solved");

// 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

let val1="   Aashish Thakur "
let val2=val1.trim();
console.log(val2);
console.log(val2.length); //14


// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

//1.
let var1="Javascript is very powerful language";
let var2= var1.includes("is")
console.log(var2); //true

let var3= var1.includes("of")
console.log(var3); //true

//2.
let var4="Never Fold Never Break down";
console.log(var4.startsWith("Never")); // true

console.log(var4.startsWith("DOWN")); // False Exact match.

//3.
let var5=895;
console.log(var5>500);
console.log(var5>1500);

console.log("Question 9 solved");

// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 true     w = wrong prediction   c = correct  prediction
//     - 4 >= 3 false w
//     - 4 < 3 f c
//     - 4 <= 3 f c
//     - 4 == 4 t c
//     - 4 === 4 t c
//     - 4 != 4 f c
//     - 4 !== 4 f c
//     - 4 != '4' t  w   
//     - 4 == '4' t c
//     - 4 === '4' f c
//     - Find the length of python and jargon and make a falsy comparison statement.

console.log(4 == '4'); //true
console.log(4 != '4'); //False
console.log(4 !== 4); //false
console.log(4 != 4); //false
console.log(4 === '4'); //false
console.log(4 >= 4); //true

//Find the length of python and jargon and make a falsy comparison statement.

let pyt="python";
let jrg="jargon";
let pyt1=pyt.length
let jrg1=jrg.length
console.log(pyt1,jrg1);
console.log(pyt1 != jrg1);

console.log("Question 10 Sol");

// 11. Use the Date object to do the following activities
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


// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let dte=new Date()
 let years=(dte.getFullYear());
 let month=(dte.getMonth());
 let date=(dte.getDate());
 let hours=(dte.getHours());
 let minutes=(dte.getMinutes());

 //YYYY-MM-DD HH:mm
  console.log(years,"-",month,"-",date, " ",hours,":",minutes);

//DD-MM-YYYY HH:mm
console.log(date,"-",month,"-",years, " ",hours,":",minutes);

//DD/MM/YYYY HH:mm
console.log(date,"/",month,"/",years, " ",hours,":",minutes);

console.log("Question 12 solved");


// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let input=prompt("Enter your age")
if(input>=18){
  console.log("You are old enough to drive");
}
else{
  console.log("You are below 18 years");
}

console.log("Question 13 solved");

// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd. .

let number=56;
if(number%2==0){
  document.write("The Number is even")
}
else{
  document.write("The Number is Odd")
}
console.log("Question 14 solveed");


// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let marks=prompt("Enter Your Marks ")
if(marks>=80){
  console.log("Congrats You Got A Grade");
}
else if(marks>=70){
  console.log("Congrats You Got B Grade");
}
else if(marks>=60){
  console.log(" You Got C Grade");
}
else if(marks>=50){
  console.log(" You Got D Grade ");
}
else if(marks>=0){
  console.log("You are failed. Do some hardwork");
}
else{
  console.log("Invalid input");
}
console.log("Question 15 solved");

// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let season = prompt("Enter any month name to find season");
if(season == "September" || season == "October"|| season == "November"){
  console.log("The season is Autumn.");
}
else if(season == "December" || season == "January"|| season == "February"){
  console.log("The season is Winter.");
}
else if(season == "June" || season == "July"|| season == "August"){
  console.log("The season is Summer.");
}
else{
  console.log("Invalid Input");
}
console.log("Question 16 solved");



//17. Write a program which tells the number of days in a month.

let months = prompt("Enter any month name to find the number of total days");
if(months == "January" || months == "March"|| months == "May" || months == "July"|| months == "August"|| months == "October"|| months == "December"){
  console.log("The totol number of days in this month is 31.");
}
else if(months == "April" || months == "June"|| months == "September"|| months == "November"){
  console.log("The totol number of days in this month is 30.");
}
else if(months == "February"){
  console.log("The totol number of days in this month is 28.");
}
else{
  console.log("Invalid Input");
}
console.log("Question 17 solved");






