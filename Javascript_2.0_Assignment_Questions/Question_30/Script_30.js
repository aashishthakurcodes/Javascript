
//30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

// let value1=prompt("Enter 1st value");
// let value2=prompt("Enter 2nd value");

let input=prompt("Select 1 for Addition , 2 for Subtraction , 3 for Multiplication , 4 for Division")

if(input==1){
    let value1=prompt("Enter 1st value");
    let value2=prompt("Enter 2nd value");
    console.log("You choosed for Addition"); 
    console.log(`First value is ${value1} and second value is ${value2} and addition is:-`,value1+value2);
    
}

else if(input==2){
    let value1=prompt("Enter 1st value");
    let value2=prompt("Enter 2nd value"); 
    console.log("You choosed for Subtraction");
    console.log(`First value is ${value1} and second value is ${value2} and subtraction is:-`,value1-value2);
    
}

else if(input==3){
    let value1=prompt("Enter 1st value");
    let value2=prompt("Enter 2nd value"); 
    console.log("You choosed for Multiplication");
    console.log(`First value is ${value1} and second value is ${value2} and multiplication is:-`,value1*value2);
    
}

else if(input==4){
    let value1=prompt("Enter 1st value");
    let value2=prompt("Enter 2nd value");
    console.log("You choosed for Division"); 
    console.log(`First value is ${value1} and second value is ${value2} and division is:-`,value1/value2);
    console.log("You choosed for Division");
    
}
else{
    console.log("Invalid Input");
}
