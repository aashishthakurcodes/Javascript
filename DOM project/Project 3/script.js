const input=document.querySelector('input');
console.log(input);
 const button=document.querySelector('button');
 console.log(button);

const maindiv=document.querySelector(".container")


button.addEventListener('click',function(){
  let newelement=document.createElement('div');
  newelement.setAttribute("class","newdiv")
  let para=document.createElement('p');
  para.innerHTML=input.value;
  newelement.appendChild(para);

  let time=new Date();
  
  newelement.append(time.toLocaleTimeString())
  

  
  
  let rmvbtn = document.createElement("button");
  rmvbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>';
  rmvbtn.setAttribute('id',"rmvbutton");

  newelement.appendChild(rmvbtn)
  maindiv.append(newelement)



  if (input.value==='') {
    alert("Enter some text");
    maindiv.removeChild(newelement);
    
  }

  
  input.value=''

 rmvbtn.addEventListener('click',function(){
  maindiv.removeChild(newelement);
  

 }) 

})



// if(input.value===""){
//   console.log("Enter some text");
// }
// else{
//   console.log("Proceed further")
// }