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
## <u>Change the input of searching Placeholder from "Search" to  "Search My Product" </u>


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

## *Assignment 3 completed*


## ** Assignment 4 **

## Task 1
## <u> Change the background-color and text color of all div with classname "clash-card__unit-stats</u>

## Task 1 code

```
//It select the class ".clash-card__unit-stats--barbarian" and give it to a background color

let card1=document.querySelector(".clash-card__unit-stats--barbarian");
card1.style.background="#bd7c2f";

let card2=document.querySelector(".clash-card__unit-stats--archer");
card2.style.background="#d04976"

let card3=document.querySelector(".clash-card__unit-stats--giant");
card3.style.background="#de7b09";

let card4=document.querySelector(".clash-card__unit-stats--goblin");
card4.style.background="#71a32a";

let card5=document.querySelector(".clash-card__unit-stats--wizard");
card5.style.background="#309eff";


// Now we have to change the color of text also

function textcolor(){
    let stat =document.querySelectorAll(".stat,.stat-value");
    stat.forEach(element => {
        element.style.color="white"
    });
}
textcolor()

```
## Output
![output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/04_DOM%20Project/04_DOM%20Project/Output/Screenshot%202023-02-06%20103835.png)

## *Assignment 4 completed*

## ** Assignment 5 **

## Task 
## <u> Add "Pro subscription" and a "sixth card at the end"</u>

## Task 1 code

```
//Targeting the parent div wuth class name "nav-center"
let target=document.querySelector(".nav-center")

//craeting anchor tag <a>.. <a/>
let atag=document.createElement("a");
//Creating a class for it
atag.setAttribute("class","btn");
//Adding Text to it
atag.innerHTML="Pro Subscription";

//Append anchor tag in the last position
target.lastElementChild.append(atag);

```
## Task 2 code
```
// Task 2 Add a new sixth card at the end

// Targeting the main div of classname=".recipe-gallery" 

let maindiv=document.querySelector(".recipe-gallery");
  
  //Creating a new div
  let newdiv=document.createElement("div");
  // Give it a class name which is same as previous div
  newdiv.setAttribute("class","card");
// Creating an anchor tag
  let atag2=document.createElement("a");
  //craeting an image tag
  let img=document.createElement("img");
  //Image source
  img.src="./img/recipe-2.jpeg";
  img.setAttribute("class","recipe-img");
// Craeting h5
  let header5=document.createElement("h5");
  // Create with a class name "recipe-name"
  header5.setAttribute("class","recipe-name");
  //Adding text to it
  header5.innerHTML="Momos"

  // Creating a paragraph
  let para=document.createElement("p");
  // Providing class name
  para.setAttribute("class","recipe-disp");
  // Enter text to it.
  para.innerHTML="Prep : 15min | Cook : 30min";

//Appending the img, h5, para, in atag2 (anchor tag)
  atag2.appendChild(img);
  atag2.appendChild(header5);
  atag2.appendChild(para);

  //Append atag2 to newdiv
  newdiv.appendChild(atag2)
//Append newdiv to maindiv
  maindiv.appendChild(newdiv)

```
## Output
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/05_DOM%20Project/05_DOM%20Project/Output/Screenshot%202023-02-06%20111311.png)


## ** Assignment 6 **

## Task 
## <u> Add "ineuron logo" at the top of the page</u>

## Task 1 code

```
let img=document.querySelectorAll("img");
img[1].src="./assets/ineuron-logo.png"

```
## Output
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/06_DOM%20Project/06_DOM%20Project/Output/Screenshot%202023-02-07%20214501.png)

## Task 2   Change the dollar value

##  code
```
let span=document.querySelector("span");
console.log(span);
span.innerHTML="$10"

```

## Output
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/06_DOM%20Project/06_DOM%20Project/Output/Screenshot%202023-02-07%20215220.png)

## _Assignment 6 completed_

## ** Assignment 7 **

## Task 
## <u>Removing the languages that have 2.0 in their name</u>

## Task 1 code

```
let removeLang = document.querySelectorAll(".main__languages a");

for (let i = 0; i < removeLang.length; i++) {
  if (removeLang[i].innerText.includes("2.0")) {
    removeLang[i].style.display = "none";
  }
}

// Enable button and Input field

let inputField = document.querySelector(".main__form-input");
inputField.disabled = false;

let submitBtn = document.querySelector(".main__form-btn");
submitBtn.disabled = false;

```
## Task 02
## <u>Adding a eventlistener in submit button</u>
```
submitBtn.addEventListener("click", click);
function click() {
  for (let i = 0; i < removeLang.length; i++) {
    removeLang[i].style.display = "inline-block";
  }
}

```



## ** Assignment 8 **

## Task 
## <u>  Add a scroll bar in aside tag</u>

## Task 1 code
```
//Select aside element
let aside = document.querySelector("aside")
// Adding CSS property
aside.style.overflow = "auto";
// Create a dummy h2
let heading2 = document.createElement("h2");
heading2.setAttribute("class", "new-head");
heading2.innerHTML = "This is my custom heading?";
// Create a dummy para
let para = document.createElement("p");
para.setAttribute("class", "new-p");
para.innerHTML =
  "Private funding by VC firms is down 50% YOY. We take a look at what that means.";

  //appending in aside tag
aside.appendChild(heading2);
aside.appendChild(para);


```
## Output
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20P8/DOM%20P8/Screenshot%202023-02-07%20215843.png)

## Task 

## Remove the slide bar

### Task code

```
aside.removeChild(heading2);
aside.removeChild(para);
aside.style.overflow="hidden";
```
## Output
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20P8/DOM%20P8/Screenshot%202023-02-07%20220501.png)

##
### Toggle the Navbar element

## Task code

```
let button=document.querySelector(".navbar-toggler"); // Target button
let listbtn=document.querySelector(".list-btn"); //Select li element;

let div=document.querySelector(".col-lg-8")// main div
console.log(div);

//Create another div
let newdiv=document.createElement("div");
//Insert Element at the begininig in the main div
div.insertBefore(newdiv,div.childNodes[0]);
//newdiv append all li elements
newdiv.appendChild(listbtn);
newdiv.style.display='none'

// Button click event
button.addEventListener('click',function(){
    if(newdiv.style.display === 'none'){
        newdiv.style.display ='block';
    }
    else{
        newdiv.style.display ='none';

    }
})
```
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20P8/DOM%20P8/Screenshot%202023-02-08%20122207.png)

## _Assignmnet 8 completed_

## ** Assignment 9 **

## Task 
## <u> Change the heading (h1) color</u>

## Task 1 code
```
// Assignment 9.1
let heading1=document.querySelector('h1');
heading1.style.color="#da2a2a";

```
![Output](Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20P9/DOM%20P9/Screenshot%202023-02-08%20123559.png)

## Assignment 9.2
## Change the color of cart button

## Code
```
// Assignment 9.2
let button=document.querySelector(".add-to-cart");
button.style.background="#ec1237";
heading1.style.color="black"

```
## Output
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20P9/DOM%20P9/Screenshot%202023-02-08%20123951.png)

## _Assignment 9 completed_