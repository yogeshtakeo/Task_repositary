jQuery("#inputForm").validate({
  rules: {
    fName: "required",
    uName: "required",
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 8,
    },
    vPassword: {
      required: true,
      minlength: 8,
      equalTo: password,
    },
  },
  messages: {
    fName: "Enter your name",
    uName: "Enter your desired username",
    email: {
      required: "Enter your Email address",
      email: "Enter a valid email address",
    },
    password: {
      required: "Please create a password",
      minlength: "Please enter a password with atleast 8 characters",
    },
    vPassword: {
      required: "Please create a password",
      minlength: "Please enter a password with atleast 8 characters",
      equalTo: "Passwords do not match",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});
