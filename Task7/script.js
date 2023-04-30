let loginForm = document.getElementById("login");
let passwordField = document.getElementById("password");
let showPasswordCheckbox = document.getElementById("show-password");

showPasswordCheckbox.addEventListener("change", (e) => {
  if (showPasswordCheckbox.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let password = passwordField;
  let email = document.getElementById("email");
  let conformPassword = document.getElementById("conform password");

  if (
    name.value == "" ||
    password.value == "" ||
    email.value == "" ||
    conformPassword.value === ""
  ) {
    alert("Ensure you input a value in both fields!");
  } else if (password.value !== conformPassword.value) {
    alert("Password and Confirm Password do not match!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${name.value}, password of ${password.value}, email of ${email.value}, and conform password of ${conformPassword.value}`
    );
    name.value = "";
    password.value = "";
    email.value = "";
    conformPassword.value = "";
  }
});
