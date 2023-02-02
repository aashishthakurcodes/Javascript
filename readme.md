## DOM Assignments

### Task  1
Append a new element in navigation menu "Hire me".

![Output Image](./Javascript_2.0_DOM_Assignment_Question/DOM%20Assignments%202.0%20Batch%20copy/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

### Project Code
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

