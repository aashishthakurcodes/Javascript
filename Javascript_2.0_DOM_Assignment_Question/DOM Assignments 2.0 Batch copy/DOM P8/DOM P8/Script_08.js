// Task 01

// Add a scroll bar in aside tag

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


// Task 2
aside.removeChild(heading2);
aside.removeChild(para);
aside.style.overflow="hidden";
