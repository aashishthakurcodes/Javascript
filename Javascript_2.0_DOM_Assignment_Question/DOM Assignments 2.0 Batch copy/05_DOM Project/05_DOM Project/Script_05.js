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
  
  //Creating anew div
  let newdiv=document.createElement("div");
  newdiv.setAttribute("class","card");

  let atag2=document.createElement("a");
  let img=document.createElement("img");
  img.src="./img/recipe-2.jpeg";
  img.setAttribute("class","recipe-img");

  let header5=document.createElement("h5");
  header5.setAttribute("class","recipe-name");
  header5.innerHTML="Momos"

  let para=document.createElement("p");
  para.setAttribute("class","recipe-disp");
  para.innerHTML="Prep : 15min | Cook : 30min";


  atag2.appendChild(img);
  atag2.appendChild(header5);
  atag2.appendChild(para);

  newdiv.appendChild(atag2)


  maindiv.appendChild(newdiv)

