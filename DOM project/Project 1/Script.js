
// Make a function refresh_btn to refresh the webpage when user click the button 
function refresh_btn(){
  document.location.reload(true)
;}


//Targeting the element

let divElement = document.getElementById("contianer") //it target the container element by its ID
.addEventListener("click", function (e) {   // Adding Event listner with the click event and a function.
    let newDiv = document.createElement("div"); //Creating a new div with variable newDiv
    newDiv.setAttribute("id", "circle"); // Set it's attribute id=circle
    document.body.appendChild(newDiv);  //Appending newDiv to the page

    let x = e.clientX;  //The clientX read-only property of the MouseEvent interface provides the horizontal coordinate 

    let y = e.clientY;  //The clientY read-only property of the MouseEvent interface provides the vertical coordinate e = mouseevent

    newDiv.style.top = `${y}px`;  //it convert coordinates value into px
    newDiv.style.left = `${x}px`; //it convert coordinates value into px


    setTimeout(() => {
      document.body.removeChild(newDiv)
    }, 5000);  // remove the newDiv after 5 seconds
    

    //This is the function to create randomcolor
    function randomcolor() {
      let hash = "#";
      let color = "123456789ABCDEFG";
      for (let i = 0; i < 6; i++) {
        hash = hash + color[Math.floor(Math.random() * 16)];  
      }
      return hash;
    }
     newDiv.style.backgroundColor=randomcolor() //Adding to its background
  });

