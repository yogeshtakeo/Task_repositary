const form = document.querySelector("#myForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    nameError.textContent = "Please enter your name.";
  } else {
    nameError.textContent = "";
  }

  if (emailInput.value === "") {
    emailError.textContent = "Please enter your email address.";
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }

  if (passwordInput.value === "") {
    passwordError.textContent = "Please enter your password.";
  } else if (!isValidPassword(passwordInput.value)) {
    passwordError.textContent = "Please enter a valid password.";
  } else {
    passwordError.textContent = "";
  }

  if (
    nameError.textContent === "" &&
    emailError.textContent === "" &&
    passwordError.textContent === ""
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
