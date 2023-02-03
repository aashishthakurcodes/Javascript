// //Task 1
// //Targeting Ul element 
//  let targetUl=document.querySelector("ul");

//  //selecting last element and change text to "Projects"
// let lastElement=targetUl.lastElementChild;
// lastElement.innerHTML=`<a href="./contact/contact.html">Projects</a>`

// //Creating new li element.
// let addElement=document.createElement("li");
// addElement.innerHTML=`<a href="#">Hire Me</a>`;
// //Appending to document
// targetUl.appendChild(addElement);


//Task 02
//Select input Element
let inputSelect=document.querySelector("input");
//Adding Id to input element
inputSelect.setAttribute("id","searchinput");
//By using id change the placeholder content.
document.getElementById("searchinput").placeholder = "Search My Project";


// Task 2.1 
// Changing the list element from Projects to contact
//Select the li element
let ulelement=document.querySelector("ul");
// Select the last child of li element
let lastli=ulelement.lastElementChild;
//Change  the text from Projects to contact
lastli.innerHTML=`<a href="./contact/contact.html">Contact</a>`;



// //Task 03
// let seach=document.querySelector("input");
// seach.placeholder="Search"

// //Task 04:=
// // document.getElementById("img").src="DSC_8693.JPG";

// let imageSelect=document.querySelector("img");
// imageSelect.src="DSC_8693.JPG";

// //task 05

// let var2=document.getElementById("plko");
// let btn=document.createElement("button");
// btn.innerText="Support Me";
// var2.appendChild(btn)


// //2nd assisgnment






