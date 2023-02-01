// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 true     w = wrong prediction   c = correct  prediction
//     - 4 >= 3 false w
//     - 4 < 3 f c
//     - 4 <= 3 f c
//     - 4 == 4 t c
//     - 4 === 4 t c
//     - 4 != 4 f c
//     - 4 !== 4 f c
//     - 4 != '4' t  w   
//     - 4 == '4' t c
//     - 4 === '4' f c
//     - Find the length of python and jargon and make a falsy comparison statement.

console.log(4 == '4'); //true
console.log(4 != '4'); //False
console.log(4 !== 4); //false
console.log(4 != 4); //false
console.log(4 === '4'); //false
console.log(4 >= 4); //true

//Find the length of python and jargon and make a falsy comparison statement.

let pyt="python";
let jrg="jargon";
let pyt1=pyt.length
let jrg1=jrg.length
console.log(pyt1,jrg1);
console.log(pyt1 != jrg1);

console.log("Question 10 Sol");