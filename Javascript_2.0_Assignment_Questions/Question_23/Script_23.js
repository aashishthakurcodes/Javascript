//23. Write a program to check that the number given by the user is a prime number or not.
// let array=[];
// let enterNumber= prompt("Enter a number");
// array.push(enterNumber);
// console.log(array);

// let prime=array.filter((enterNumber) =>  enterNumber%3!==0 && enterNumber%2!==0 && enterNumber%5!==0 && enterNumber%7!==0 && enterNumber%9!==0 || enterNumber==2 ||enterNumber==3 || enterNumber==5 || enterNumber==7 );

// console.log(prime);

let enterNumber= prompt("Enter a number");

if(enterNumber%3!==0 && enterNumber%2!==0 && enterNumber%5!==0 && enterNumber%7!==0 && enterNumber%9!==0 || enterNumber==2 ||enterNumber==3 || enterNumber==5 || enterNumber==7){
    console.log(`The number ${enterNumber} is a prime number`);
}
else{
    console.log(`The number ${enterNumber} is not a prime number`);
}
