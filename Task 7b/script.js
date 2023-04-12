const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");
const termsCheckbox = document.querySelector('input[name="terms"]');
const subscribeCheckbox = document.querySelector('input[name="subscribe"]');
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (!validateName()) {
    displayErrorMessage("Please enter a valid name");
    return;
  }
  
  if (!validateEmail()) {
    displayErrorMessage("Please enter a valid email address");
    return;
  }
  
  if (!validatePassword()) {
    displayErrorMessage("Password must contain at least 8 characters, including uppercase, lowercase, and numbers");
    return;
  }
  
  if (!validateDOB()) {
    displayErrorMessage("Please enter a valid date of birth");
    return;
  }
  
  if (!termsCheckbox.checked) {
    displayErrorMessage("Please agree to the terms and conditions");
    return;
  }
  
  displaySuccessMessage("Form submitted successfully");
});

function validateName() {
  const name = nameInput.value.trim();
  
  if (name === "") {
    return false;
  }
  
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  if (!emailPattern.test(email)) {
    return false;
  }
  
  return true;
}

function validatePassword() {
  const password = passwordInput.value.trim();
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
  if (!passwordPattern.test(password)) {
    return false;
  }
  return true;
}
function validateDOB() {
  const dob = dobInput.value.trim();
  
  if (dob === "") {
    return false;
  }
 
  return true;
}

function displayErrorMessage(message) {
  errorMessage.textContent = message;
  successMessage.textContent = "";
}

function displaySuccessMessage(message) {
  successMessage.textContent = message;
  errorMessage.textContent = "";
}