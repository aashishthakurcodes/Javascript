// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);

shoppingCart.unshift('Meat')
console.log(shoppingCart); // it add "Meat" at the begining.

shoppingCart.push('Sugar')
console.log(shoppingCart); // it add "Sugar" at the end.

shoppingCart.splice(4,1)
console.log(shoppingCart); // it remove honey

shoppingCart[3]="Green Tea";
console.log(shoppingCart); // it replace "Tea" to "Green Tea"