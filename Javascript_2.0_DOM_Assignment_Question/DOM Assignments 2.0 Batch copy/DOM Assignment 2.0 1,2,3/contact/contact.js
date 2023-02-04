// Selecting the left div
let mainright= document.querySelector(".mainLeft");
// Selecting all it's input
let leftInput=mainright.querySelectorAll("input");
//Targetting 1st node
leftInput[0].placeholder="FSJS 2.0"
//Targetting 2nd node
leftInput[1].placeholder="fsjs@ineuron.ai"

// Targeting the lefttext area.
let lefttext=mainright.querySelector("textarea");
lefttext.placeholder="Hello World"

// Selecting the Right div.
let rightdiv=document.querySelector(".mainRight");
// Selecting all it's input
let rightInput=rightdiv.querySelectorAll("input");
//Targetting 1st node
rightInput[0].placeholder="FSJS 2.0";
//Targetting 2nd node
rightInput[1].placeholder="fsjs@ineuron.ai";

// Targeting the righttext area.
let rightText=rightdiv.querySelector("textarea");
rightText.placeholder="Hello World"