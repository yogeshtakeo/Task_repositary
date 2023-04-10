const people = []
    const Name= textContent.querySelector('#Name').value;
    const Age = Number.querySelector('#Age').value;

  
  people.sort((a, b) => a.age - b.age);
  
  people.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `${person.name}, ${person.age}`;
    peopleList.appendChild(li);
  const AverageAgeBtn = document.querySelector('#find-Age');
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
const avgAge = totalAge / people.length;
console.log (The average age is(avgAge));
}
}