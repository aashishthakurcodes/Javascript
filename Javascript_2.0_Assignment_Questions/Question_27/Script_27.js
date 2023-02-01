// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).


let prime=[];
for(let x=2; x<=100; x++){
    prime.push(x);
};

console.log(prime); //it give value from 2 to 100
let func = prime.filter((val) =>  val%3!==0 && val%2!==0 && val%5!==0 && val%7!==0 && val%9!==0 || val==2 ||val==3 || val==5 || val==7 );
console.log(func); // it filter data and return  prome number





