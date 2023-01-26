//Targeting the container Element
 
function refresh_btn(){
  document.location.reload(true)
;}




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


    setTimeout(() => {
      document.body.removeChild(newDiv)
    }, 4000);
    
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

