let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

add.addEventListener("click", function () {
  const result = Number(num1.value) + Number(num2.value);
  console.log(result);
  document.querySelector(".res").value = result;
});
sub.addEventListener("click", function () {
  const result = Number(num1.value) - Number(num2.value);
  console.log(result);
  document.querySelector(".res").value = result;
});
mul.addEventListener("click", function () {
  const result = Number(num1.value) * Number(num2.value);
  console.log(result);
  document.querySelector(".res").value = result;
});
div.addEventListener("click", function () {
  const result = Number(num1.value) / Number(num2.value);
  console.log(result);
  document.querySelector(".res").value = result;
});
