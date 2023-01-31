// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

//Input from user
let weightInput = prompt("Enter your weight in kg");
let heightinput = prompt("Enter your height in cm");

//Height =height*height in mm
let heightinMM = heightinput / 100; 
let height = (heightinMM * heightinMM).toFixed(2); 

//BMI formula = Weight/height;
let BMI = (weightInput/height); 

if (BMI < 18.5) {
  console.log( "BMI :-",BMI.toFixed(1)+" kg/mm"+  " You are Underweight, Take Proper Diet");

} else if (BMI > 18.5 && BMI < 24.9) {
  console.log("BMI :-",BMI.toFixed(1)+" kg/mm"+" Congrats your weight is normal",);

} else if ((BMI ==25 && BMI < 29.9)) {
  console.log("BMI:-",BMI.toFixed(1)+" kg/mm"+" You are overweight.You have to go gym daily");

} else if (BMI > 29.9) {
  console.log("BMI:-",BMI.toFixed(2)+" kg/mm"+" Obese");
}
