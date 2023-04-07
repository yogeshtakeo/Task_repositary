// <!-- Write a program in JavaScript that declares and initializes five variables of different data types (string, number, boolean, array, and object) and then performs addition and subtraction operations on the number variable. Finally, log the results of the operations to the console. -->

//string;
const myName = 'Jyoti Raj Dahal'
console.log(myName)

//number;
//sum operation
let sum = (num1, num2) => {
  return `sum of two number is ${num1 + num2}`
}
console.log(sum(12, 23))

//Subtraction operation
let subtract = (num1, num2) => {
  return `sum of two number is ${num1 - num2}`
}
console.log(subtract(12, 23))

// boolean
const num1 = 12
const num2 = 14
console.log('Is It true or false' + num1 > num2)
console.log('Is It true or false' + num1 < num2)

//Array
const arr = ['Apple', 'Ball', 'Cat', 'Dog']
console.log(arr)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

//Objects
const person = {
  name: 'Jyoti Raj Dahal',
  address: 'Dallas',
  gmail: 'jyotidahal1234@gmail.com',
  phone: '6822216008',
  skill: ['html', 'Css', 'Js'],
}
console.log(person)
console.log('Name is ' + person.name)
console.log('Address: ' + person.address)
console.log('Gmail Address: ' + person.gmail)
console.log('Phone Number: ' + person.phone)
console.log(person.skill)
console.log(person.skill[0])
console.log(person.skill[1])
console.log(person.skill[2])
