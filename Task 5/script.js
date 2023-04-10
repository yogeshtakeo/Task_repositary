const footballer = [
	{ name: "Mbappe", age: 23 },
	{ name: "Messi", age: 35 },
	{ name: "C7", age: 37 },
	{ name: "NeymarJr.", age: 30 },
	{ name: "Salah", age: 30 },
];

footballer.sort((a, b) => a.age - b.age);

const footballerList = document.getElementById("footballer-list");
footballer.forEach(person => {
	const li = document.createElement("li");
	li.textContent = person.name;
	const span = document.createElement("span");
	span.textContent = person.age;
	li.appendChild(span);
	footballerList.appendChild(li);
});

const totalAge = footballer.reduce((sum, person) => sum + person.age, 0);
const age = totalAge / footballer.length;

const ageElement = document.getElementById("average-age");
ageElement.textContent = `The average age is ${age.toFixed(1)}.`;
