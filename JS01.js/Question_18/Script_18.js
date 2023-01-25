//18. Write a program which tells the number of days in a month, now consider leap year.

let leapyearMnth = prompt("Enter any month name to find the number of total days in a leap year");
if(leapyearMnth == "January" || leapyearMnth == "March"|| leapyearMnth == "May" || leapyearMnth == "July"|| leapyearMnth == "August"|| leapyearMnth == "October"|| leapyearMnth == "December"){
  console.log("The totol number of days in this month is 31.");
}
else if(leapyearMnth == "April" || leapyearMnth == "June"|| leapyearMnth == "September"|| leapyearMnth == "November"){
  console.log("The totol number of days in this month is 30.");
}
else if(leapyearMnth == "February"){
  console.log("The totol number of days in this month is 29.");
}
else{
  console.log("Invalid Input");
}
console.log("Question 18 solved");
