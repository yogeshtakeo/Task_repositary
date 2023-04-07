const form = document.querySelector('form');
  const number1 = document.querySelector('#number1');
  const number2 = document.querySelector('#number2');
  const addBtn = document.querySelector('#add');
  const subtractBtn = document.querySelector('#subtract');
  const multiplyBtn = document.querySelector('#multiply');
  const divideBtn = document.querySelector('#divide');
  const result = document.querySelector('#result');

  addBtn.addEventListener('click', () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const sum = num1 + num2;
    result.textContent = `Result: ${sum}`;
    console.log(`Addition: ${sum}`);
  });

  subtractBtn.addEventListener('click', () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const difference = num1 - num2;
    result.textContent = `Result: ${difference}`;
    console.log(`Subtraction: ${difference}`);
  });

  multiplyBtn.addEventListener('click', () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const product = num1 * num2;
    result.textContent = `Result: ${product}`;
    console.log(`Multiplication: ${product}`);
  });

  divideBtn.addEventListener('click', () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const quotient = num1 / num2;
    result.textContent = `Result: ${quotient}`;
    console.log(`Division: ${quotient}`);
});