// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).


let even=[];
let odd=[];

for(let x=0;x<=100; x++)
{
    if (x%2==0) {
        even.push(x)
        
    }
    else if(x%2!==0){
        odd.push(x);
        
}

}
console.log(even);
console.log(odd);

console.log("Question 24 Solved");