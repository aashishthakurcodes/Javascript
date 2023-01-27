// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method.

//- Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sort =ages.sort((a,b)=> a-b)  // a and b are parameter a for first element for comparison and b is the second parameter for comparison
console.log(ages);
 
let minage =Math.min(...ages);  
let maxage =Math.max(...ages);
console.log("Maximum age is:-",maxage,'\n',"Minimum age is:-",minage);

//- Find the median age(one middle item or two middle items divided by two)

let median = Math.floor(ages.length/2);
let midvalue =ages[median] + ages[median+1];
console.log(midvalue/2);


//- Find the average age(all items divided by number of items);

let numberofItems=ages.length;
console.log(numberofItems);

let totalitem = ages.reduce((first,second)=> first+second);
console.log(totalitem);

let average=totalitem/numberofItems;
console.log(average);

//     - Find the range of the ages(max minus min)

let range= maxage-minage;
console.log(range);

//     - Compare the value of (min - average) and (max - average), use abs() method.

let minavg=minage-average;
let maxavg=maxage-average;

console.log(Math.abs(minavg));
console.log(Math.abs(maxavg));


console.log("Comaprison", maxavg == minavg);








