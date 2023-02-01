// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let dte=new Date()
 let years=(dte.getFullYear());
 let month=(dte.getMonth());
 let date=(dte.getDate());
 let hours=(dte.getHours());
 let minutes=(dte.getMinutes());

 //YYYY-MM-DD HH:mm
  console.log(years,"-",month,"-",date, " ",hours,":",minutes);

//DD-MM-YYYY HH:mm
console.log(date,"-",month,"-",years, " ",hours,":",minutes);

//DD/MM/YYYY HH:mm
console.log(date,"/",month,"/",years, " ",hours,":",minutes);

console.log("Question 12 solved");
