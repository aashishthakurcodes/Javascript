//Targeting the container Element

// let containerElement= document.body.getElementsByClassName("container");

// document.body.addEventListener('click',function(e) {
//     let newDiv =document.createElement("div");
//     newDiv.setAttribute("id","circle")
//     document.body.appendChild(newDiv);

//     //creating x and y cordinates

//     let x = e.clientX;
//     let y = e.clientY;

//     newDiv.style.top = `${y}px`;
//     newDiv.style.left = `${x}px`;

// })

//Targeting the container Element

let divElement = document
  .getElementById("contianer")
  .addEventListener("click", function (e) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "circle");
    document.body.appendChild(newDiv);

    let x = e.clientX;
    let y = e.clientY;

    newDiv.style.top = `${y}px`;
    newDiv.style.left = `${x}px`;

    // setTimeout(() => {
    //   document.body.removeChild(newDiv);
    // }, 3000);

    setTimeout(() => {
       location.reload(true);
    }, 5000);

    function randomcolor() {
      let hash = "#";
      let color = "123456789ABCDEFG";
      for (let i = 0; i < 6; i++) {
        hash = hash + color[Math.floor(Math.random() * 16)];
      }
      return hash;
    }
     newDiv.style.backgroundColor=randomcolor()
  });

// document.addEventListener("click", function (e) {
//     let newDiv = document.createElement("div");
//     newDiv.setAttribute("id", "circle");
//     document.body.appendChild(newDiv);

//     //creating x and y cordinates

//     let x = e.clientX;
//     let y = e.clientY;

//     newDiv.style.top = `${y}px`;
//     newDiv.style.left = `${x}px`;

//
// });
