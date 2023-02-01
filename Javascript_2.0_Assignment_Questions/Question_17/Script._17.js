//17. Write a program which tells the number of days in a month.

let months = prompt("Enter any month name to find the number of total days");
if(months == "January" || months == "March"|| months == "May" || months == "July"|| months == "August"|| months == "October"|| months == "December"){
  console.log("The totol number of days in this month is 31.");
}
else if(months == "April" || months == "June"|| months == "September"|| months == "November"){
  console.log("The totol number of days in this month is 30.");
}
else if(months == "February"){
  console.log("The totol number of days in this month is 28.");
}
else{
  console.log("Invalid Input");
}
console.log("Question 17 solved");