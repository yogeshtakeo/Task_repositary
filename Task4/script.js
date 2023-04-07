/*Write a program in JavaScript that declares and initializes five variables of different 
data types (string, number, boolean, array, and object) and then performs addition and subtraction 
operations on the number variable. Finally, log the results of the operations to the console
*/

const fName = "Sanjay";
const num1 = 10;
const arr1 = [1, 23, "name", "age"];
const isOn = false;
const obj1 = {
  firstname: "sanjay",
  city: "Washington Dc",
  phoneNum: "0000000000",
};
console.log(fName, num1, arr1, isOn, obj1);
//const number1 = prompt("Enter first number");
//const number2 = prompt("Enter second number");

function add(num1, num2) {
  const addition = num1 + num2;
  return "The sum of " + num1 + " and " + num2 + " is " + addition;
}
function sub(num1, num2) {
  const subt = num1 - num2;
  return "The difference of " + num1 + " and " + num2 + " is " + subt;
}
console.log(add(30, 40));
console.log(sub(40, 30));
