// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let marks=prompt("Enter Your Marks ")
if(marks>=80){
  console.log("Congrats You Got A Grade");
}
else if(marks>=70){
  console.log("Congrats You Got B Grade");
}
else if(marks>=60){
  console.log(" You Got C Grade");
}
else if(marks>=50){
  console.log(" You Got D Grade ");
}
else if(marks>=0){
  console.log("You are failed. Do some hardwork");
}
