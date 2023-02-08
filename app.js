/*let userName = document.getElementById("userName");

let lastName = document.getElementById("lastName");

let email = document.getElementById("email");

let password = document.getElementById("password");

let password_confirmation = document.getElementById("password_confirmation");

let phone = document.getElementById("phone");

let age = document.getElementById("age");

let url = document.getElementById("url");

let experience = document.getElementById("experience");

let salary = document.getElementById("salary");

let desktop = document.getElementById("desktop");

let laptop = document.getElementById("laptop");

let tablet = document.getElementById("tablet");

let smartphone = document.getElementById("smartphone");

let form = document.getElementById("form");*/

function validate(e) {
  let errors = [];

  e.preventDefault();

  function verify(fieldValue, fieldName, regex, errormessage) {
    if (!fieldValue) {
      errors.push(`${fieldName} cannot be empty`);
    } else if (!regex.test(fieldValue)) {
      errors.push(errormessage);
    }
  }

  verify(
    userName.value,
    "Name",
    /^[a-zA-Z]+$/,
    "Name can only contain characters"
  );
  verify(
    lastName.value,
    "Last name",
    /^[a-zA-Z]+$/,
    "Last name can only contain characters"
  );
  verify(
    email.value,
    "Email",
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    "Email must have a valid format"
  );
  verify(
    password.value,
    "Password",
    /^(?=.*\d)(?=.*[@#$%^&+=_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    "Password must include a lowercase, an uppercase,a digit, a special character(@#$%^&+=_) and a minumun of 8 characters"
  );
  /*-----------------------------------PASSWORD_confirmation --------------------------------------*/

  if (!password_confirmation.value) {
    errors.push("Password confirmation cannot be empty");
  } else if (password_confirmation.value != password.value) {
    errors.push("Password confirmation doesn't match");
  }
  verify(
    phone.value,
    "Phone",
    /^\d\d\d\d\d\d\d\d$/,
    "Phone must have exactly 8 digits"
  );

  /*-----------------------------------AGE --------------------------------------*/

  if (age.value === "") {
    errors.push("age can't be empty");
    /*one upper, one lower, one selected special character,1 digit,8 character minimun*/
  } else if (!(parseInt(age.value) < 120)) {
    errors.push("age must be numerical and smaller than 120 years");
  }
  /*-----------------------------------URL-------------------------------------*/
  verify(
    url.value,
    "URL",
    /^http(s)?:\/\/www\.[a-zA-Z]+\.[a-z]+(\.[a-z]+)?$/,
    "URL should follow a valid format like http://www.someting.online.dev https://www.douglascoding.online http://www.douglascoding.com http://www.douglas-coding.com http://www.douglascoding123.com"
  );

  /*--------------------------Error list---------------------------- */
  const data = {
    userName: userName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
    phone: phone.value,
    age: age.value,
    url: url.value,
    experience: experience.value,
    salary: salary.value,
    desktop: desktop.checked,
    laptop: laptop.checked,
    tablet: tablet.checked,
    smartphone: smartphone.checked,
  };
  if (errors.length === 0) console.log(data);
  errors_display(errors);
}

form.addEventListener("submit", validate);
/*



let salary = document.getElementById("salary");

let desktop = document.getElementById("desktop");

let laptop = document.getElementById("laptop");

let tablet = document.getElementById("tablet");

let smartphone = document.getElementById("smartphone");

let form = document.getElementById("form");*/
