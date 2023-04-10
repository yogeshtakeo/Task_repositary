const people = [
  { name: "Yogesh", age: 25 },
  { name: "Saroj", age: 21 },
  { name: "Sanjay", age: 23 },
  { name: "kenneth", age: 22 },
  { name: "Jyoti", age: 23 },
];

const peopleList = document.getElementById("people-list");
const averageAge = document.getElementById("average-age");

people.sort((a, b) => a.age - b.age);

people.forEach((person) => {
  const li = document.createElement("li");
  li.textContent = `${person.name}, ${person.age}`;
  peopleList.appendChild(li);
});

const totalAge = people.reduce((sum, person) => sum + person.age, 0);
const avgAge = totalAge / people.length;

averageAge.textContent = `The average age is ${avgAge}`;
