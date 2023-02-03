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
lastli.innerHTML=`<a href="./contact/contact.html">Contact</a>`;

```