let counterValue = 0;
const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

function incrementCounter() {
  counterValue++;
  counter.textContent = counterValue;
}

function decrementCounter() {
  counterValue--;
  counter.textContent = counterValue;
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);

const resetButton = document.getElementById("reset");
function resetCounter() {
  counterValue = 0;
  counter.textContent = counterValue;
}

resetButton.addEventListener("click", resetCounter);
