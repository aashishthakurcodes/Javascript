// Task 1 add "pro subscription" ;

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

