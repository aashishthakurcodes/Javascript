//23. Write a program to check that the number given by the user is a prime number or not.

let enterNumber= prompt("Enter a number");
if (enterNumber === 2) {console.log("This is a prime number");   
}
else if(enterNumber<0){
    console.log("This is a negative number");
} 
//15
for(let x=2; x<enterNumber; x++){ 
    if (enterNumber%x === 0) {
        console.log("This is not a prime number");
        break;
    } else {
        console.log("This is a prime number");
    }
}