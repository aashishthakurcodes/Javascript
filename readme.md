# DOM Assignments

## Task  1
## <u> Append a new element in navigation menu "Hire me".</u>

### Task 1 Code
```
//Task 1
//Targeting Ul element 
 let targetUl=document.querySelector("ul");

 //selecting last element and change text to "Projects"
let lastElement=targetUl.lastElementChild;
lastElement.innerHTML=`<a href="./contact/contact.html">Projects</a>`

//Creating new li element.
let addElement=document.createElement("li");
addElement.innerHTML=`<a href="#">Hire Me</a>`;
//Appending to document
targetUl.appendChild(addElement);

```
## Output

![Output Image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/Screenshot%202023-02-03%20120523.png)

## Task 2
## <u>Change the Placeholder of searching input "Search My Product" from "Search"</u>


### Task 2 code
```
//Select input Element
let inputSelect=document.querySelector("input");
//Adding Id to input element
inputSelect.setAttribute("id","searchinput");
//By using id change the placeholder content.
document.getElementById("searchinput").placeholder = "Search My Project";

//Changing the list element from contact to Project

// //Select the li element 
//let ulelement=document.querySelector("ul");
// // Select the last child of li element
//let lastli=ulelement.lastElementChild;
// //Change  the text from Projects to contact
 //lastli.innerHTML=`<a href="./contact/contact.html">Projects</a>`;


```

## Output
![Output image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/Screenshot%202023-02-03%20120026.png)

## Task 3
## <u>Change the last element of li from "Project" to "Contact" </u>

### Task 3 code :-

``` 
//Select the li element
let ulelement=document.querySelector("ul");
// Select the last child of li element
let lastli=ulelement.lastElementChild;
//Change  the text from Projects to contact
lastli.innerHTML=`<a href="./contact/contact.html">Contact</a>`;
```
 ## Output
![Output image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/Screenshot%202023-02-03%20115142.png)


## Task 4 :-
## <u>Add an image in place of Avatar
</u>

### Task 4 Code :-

```
let imageSelect=document.querySelector("img");
imageSelect.src="DSC_8693.JPG";

```
## Output
![Output Image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/Screenshot%202023-02-03%20111218.png)

## Task 5 :-
 ## <u>Adding Button "Support Me"</u> 

### Task 5 code :-
```
//Selecting the parent class of buttons
let btnclas=document.querySelector(".hero-right-section-btns");
//Adding "Id" to the parent div
btnclas.setAttribute("id","hero-btn")

// Creating another button
let addbtn=document.createElement("button");
//Adding Text
addbtn.innerHTML="Support Me";
console.log(addbtn);

//Append both variable
btnclas.appendChild(addbtn);

```
## Output
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/Screenshot%202023-02-03%20113208.png)


## ** Assignment 1 Completed **

## ** Assignment 2 **

## Task 1
## <u> Change the background color of all "h3" element.</u>
## Task 1 code :-

```
//Targeting all the h3
const select2 = document.querySelectorAll("h3");
//Querry selectorall return us a node list.we can style them using their index number.
select2[0].style.backgroundColor = "#9cb1c2";
select2[1].style.backgroundColor = "#9cb1c2";
select2[2].style.backgroundColor = "#9cb1c2";
select2[3].style.backgroundColor = "#9cb1c2";
```
## Output
![Outout Image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/Screenshot%202023-02-05%20080305.png)

##  Task 2 
## <u>Add a new Div which consist of h3 and paragraph..and append to it ".accordian-wrapper" main div </u>

## Task 2 code :-
```
//Let's target the "".accordian-wrapper" bcz it consist of all div
let targetclass= document.querySelector(".accordian-wrapper");
//Creating a div in  ".accordian-wrapper" 
 let divcreate=document.createElement("div");
 // Add a class with classname="accordian";
 divcreate.setAttribute("class","accordian")
 //Craeting a h3 element for the div
 let heading = document.createElement("h3");
 //Adding Text to h3
 heading.innerHTML = "Skills";
 //Changing its bg-color
 heading.style.backgroundColor="#9cb1c2";
 // Creating an para element.
 let pra = document.createElement("p");
 // Adding text to it
pra.innerText="I posses a very good command over the Full Stack Web technologies like mern which can be seen in my work over the github.";

//Append Hedaing(h3) to div
divcreate.appendChild(heading);
//Append para(p) to div
divcreate.appendChild(pra);
//Adding our div to the main div
targetclass.appendChild(divcreate);



let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

```
## Output
![Output image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/Screenshot%202023-02-05%20080402.png)

## ** Assignment 2 completed **

## ** Assignment 3 **

## Task 1
## <u>Change the Input of User Input board and User Output board</u>

## Task 1 code

```
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

```
## Output

![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/Screenshot%202023-02-04%20121759.png)

## ** Assignment 3 completed**