const people = [
  { name: "John", age: 32 },
  { name: "Sarah", age: 27 },
  { name: "Jane", age: 41 },
  { name: "Tom", age: 21 },
  { name: "Mike", age: 18 }
];


people.sort((a, b) => a.age - b.age);


const peopleList = document.createElement("ul");
people.forEach(person => {
  const listItem = document.createElement("li");
  listItem.textContent = `${person.name} (${person.age})`;
  peopleList.appendChild(listItem);
});


const peopleContainer = document.getElementById("people-container");
peopleContainer.appendChild(peopleList);


const totalAge = people.reduce((acc, person) => acc + person.age, 0);
const averageAge = Math.round(totalAge / people.length);
const averageAgeParagraph = document.getElementById("average-age");
averageAgeParagraph.textContent = `Average age: ${averageAge}`;