const form = document.querySelector("#myForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const termsCheckbox = document.querySelector("#terms");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const termsError = document.querySelector("#termsError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
  } else {
    nameError.textContent = "";
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email address.";
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }

  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Please enter your password.";
  } else if (!isValidPassword(passwordInput.value.trim())) {
    passwordError.textContent = "Please enter a valid password.";
  } else {
    passwordError.textContent = "";
  }

  if (!termsCheckbox.checked) {
    termsError.textContent = "Please agree to the terms and conditions.";
  } else {
    termsError.textContent = "";
  }

  if (
    nameError.textContent === "" &&
    emailError.textContent === "" &&
    passwordError.textContent === "" &&
    termsError.textContent === ""
  ) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
  const regEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regEx.test(password);
}
