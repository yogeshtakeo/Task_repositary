/*HTML, CSS , JS Arrays , JS Objects 

Hint : Use of the methods in array is recommended.

Task :

Create an HTML file with a basic structure that includes a heading, a container for the list of 
people, and a container for the average age.

Style the web page using CSS to make it visually appealing.

Create an array of objects in JavaScript, where each object contains a name and an age property.

Use the sort() method to sort the array of objects based on the age property, in ascending order.

Use the forEach() method to iterate through the sorted array and create an HTML list item for each
 person.
Append the list items to the container for the list of people using the DOM manipulation methods.

Use the reduce() method to calculate the average age of the array of ages.

Create an HTML paragraph element to display the average age.

Append the average age to the container for the average age using the DOM manipulation methods.

Test the web page to make sure that it correctly sorts the list of people and displays the average age.
*/

const person = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Bob",
    age: 24,
  },
  {
    name: "Michelle",
    age: 30,
  },
  {
    name: "Collei",
    age: 18,
  },
];

person.sort(function (a, b) {
  return a.age - b.age;
});

const personlist = document.getElementById("display1");
person.forEach((per) => {
  const li = document.createElement("li");
  li.textContent = per.name + " " + per.age;
  personlist.appendChild(li);
  //console.log(personlist);
});

let averageAge = (arr) => {
  let reducer = (total, currentValue) => total + currentValue;
  let sum = arr.reduce(reducer);
  return sum / arr.length;
};
let ages = person.map((persons) => persons.age);
const average = averageAge(ages);

document.getElementById("display2").value = average;
