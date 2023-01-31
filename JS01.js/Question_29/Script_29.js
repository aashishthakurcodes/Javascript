// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let fileInput=prompt("Enter file name")
if (fileInput.includes(".")) {
    let searchdot=fileInput.indexOf('.');
 let result=fileInput.slice(searchdot);
 console.log(result);
}
else{
    console.log("File name error");
}


