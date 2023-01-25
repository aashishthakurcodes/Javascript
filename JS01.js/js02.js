// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);

shoppingCart.unshift('Meat')
console.log(shoppingCart);

shoppingCart.push('Sugar')
console.log(shoppingCart);

shoppingCart.splice(4,1)
console.log(shoppingCart);

shoppingCart[3]="Green Tea";
console.log(shoppingCart);


// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


let countryNames = ["Russia ","Canada ","United States of America","China","Brazil","Australia","Switzerland","Singapore","Dubai"];
 console.log(countryNames);

 if (countryNames.includes("India")){
    console.log(" India is not there ");
    
 } else {
    countryNames.push("India")
 }
 console.log(countryNames);