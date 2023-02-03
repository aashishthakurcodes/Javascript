## DOM Assignments

### Task  1
Append a new element in navigation menu "Hire me".

![Output Image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

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

### Task 2
Change the Placeholder of searching input.
"Search My Product" from "Search"

### Task 2 code
```
//Select input Element
let inputSelect=document.querySelector("input");
//Adding Id to input element
inputSelect.setAttribute("id","searchinput");
//By using id change the placeholder content.
document.getElementById("searchinput").placeholder = "Search My Project";


```

![Output image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

### Task 3
Change the last element of li from "Project" to "Contact"

### Task 3 code :-

``` 
//Select the li element
let ulelement=document.querySelector("ul");
// Select the last child of li element
let lastli=ulelement.lastElementChild;
//Change  the text from Projects to contact
lastli.innerHTML=`<a href="./contact/contact.html">Project</a>`;

```

![Output image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)


### Task 4 :-
Add an image in place of Avatar

### Task 4 Code :-

```
let imageSelect=document.querySelector("img");
imageSelect.src="DSC_8693.JPG";

```
![Output Image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/Screenshot%202023-02-03%20111218.png)

### Task 5 :-
Adding Button "Support Me" 

### Task 4 code :-
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
![Output](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/Screenshot%202023-02-03%20113208.png)