
//Task 01
//Change the background color of all "h3" element.

//Targeting all the h3
const select2 = document.querySelectorAll("h3");
//Querry selectorall return us a node list.we can style them using their index number.
select2[0].style.backgroundColor = "#9cb1c2";
select2[1].style.backgroundColor = "#9cb1c2";
select2[2].style.backgroundColor = "#9cb1c2";
select2[3].style.backgroundColor = "#9cb1c2";




// Task 2
// Add a new Div which consist of h3 and paragraph..and append to it
// ".accordian-wrapper" main div

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

















