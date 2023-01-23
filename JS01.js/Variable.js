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