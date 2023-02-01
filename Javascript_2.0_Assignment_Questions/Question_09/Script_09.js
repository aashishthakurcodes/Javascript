// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

//1.
let var1="Javascript is very powerful language";
let var2= var1.includes("is")
console.log(var2); //true

let var3= var1.includes("of")
console.log(var3); //true

//2.
let var4="Never Fold Never Break down";
console.log(var4.startsWith("Never")); // true

console.log(var4.startsWith("DOWN")); // False Exact match.

//3.
let var5=895;
console.log(var5>500);
console.log(var5>1500);

console.log("Question 9 solved");