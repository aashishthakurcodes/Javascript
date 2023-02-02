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
  
// const select=document.querySelector("h3");
// select.style.backgroundColor="#9cb1c2"
  
// const select2=document.getElementsByClassName(".accordian h3")
// select2.style.backgroundColor="#9cb1c2";

//Task 01
const select2=document.querySelectorAll("h3")
select2[0].style.backgroundColor="#9cb1c2";
select2[1].style.backgroundColor="#9cb1c2";
select2[2].style.backgroundColor="#9cb1c2";
select2[3].style.backgroundColor="#9cb1c2";


//Task 02
// //Target
// const clas=document.getElementsByClassName("accordian-wrapper");
// console.log(clas);
// //Craete a div
// const add=document.createElement("div");
// add.setAttribute("class","accordian");

// //Add h3
// const heading=document.createElement("h3");
// heading.innerHTML="Skills"
// //Add para
// const para=document.createElement("p");
// para.innerHTML="I posses a very good command over the full stack developement technologies like MERN which can be seen in my work over the Github"


// //div and heading
// add.append(heading);
// //div and para
// add.appendChild(para)


// console.log(add);

// document.appendChild(clas)




let xft=document.getElementsByClassName("accordian-wrapper");

let eele=document.createElement("div");
eele.innerText="Hello World";

eele.append(xft)
console.log(eele);

xft.append(eele)



