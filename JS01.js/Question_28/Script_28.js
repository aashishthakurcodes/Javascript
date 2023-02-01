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

if(enterInput==3){
    for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
}
else if(enterInput==4){
    for(let x=1; x<=3; x++){
    let rw="";
    for(let y=1; y<=3; y++){
        rw+="*";
    }
    console.log(rw);
}}

else if(enterInput==5){
    for (let a = 1; a <= 3; a++) {
        let row = "";
        for (let b = 1; b <= 3 - a; b++) {
            row += " ";
        }
        for (let c = 1; c <= 2 * a - 1; c++) {
            row += "*";
        }
        console.log(row);
    }
}
