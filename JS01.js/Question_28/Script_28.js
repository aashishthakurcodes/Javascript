// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 4 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 5 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****
let enterInput=prompt("Press 3 for traingle , 4 for square , 5 for Pyramid")



// for (let i = 1; i <= 3; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// // 	   ***
// // 	   ***
// // 	   ***
        
for(let x=1; x<=3; x++){
    let rw="";
    for(let y=1; y<=3; y++){
        rw+="*";
    }
    console.log(rw);

}

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}
         