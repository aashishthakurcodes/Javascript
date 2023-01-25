//21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries=["INDIA","AMERICA","CANADA","BRAZIL","SWITZERLAND"]
console.log(countries);

if (countries.includes("ETHIOPIA")) {
    console.log("ETHIOPIA");
    
} else {
    countries.push("ETHIOPIA")
}
console.log(countries);
console.log("Question 21 solved");