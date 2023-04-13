const form = document.querySelector("form");
const num1Input = document.getElementById("number1");
const num2Input = document.getElementById("number2");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  const result = Number(num1Input.value) + Number(num2Input.value);
  console.log(result);
  document.getElementById("result").textContent = result;
});

subButton.addEventListener("click", function (event) {
  event.preventDefault();
  const result = Number(num1Input.value) - Number(num2Input.value);
  console.log(result);
  document.getElementById("result").textContent = result;
});

mulButton.addEventListener("click", function (event) {
  event.preventDefault();
  const result = Number(num1Input.value) * Number(num2Input.value);
  console.log(result);
  document.getElementById("result").textContent = result;
});

divButton.addEventListener("click", function (event) {
  event.preventDefault();
  const result = Number(num1Input.value) / Number(num2Input.value);
  console.log(result);
  document.getElementById("result").textContent = result;
});
