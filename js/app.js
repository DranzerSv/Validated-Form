function validate(e) {
  let validated = true;

  e.preventDefault();

  function verify(fieldValue, fieldName, regex, errormessage, id) {
    let parragraph = document.getElementById(id);
    if (parragraph.firstChild) {
      parragraph.removeChild(parragraph.lastChild);
    }
    if (!fieldValue) {
      validated = false;
      let text = document.createTextNode(`${fieldName} can't be empty`);
      parragraph.appendChild(text);
    } else if (!regex.test(fieldValue)) {
      validated = false;
      let text = document.createTextNode(errormessage);
      parragraph.appendChild(text);
    }
  }

  verify(
    userName.value,
    'Name',
    /^[a-zA-Z]+$/,
    'Name can only contain characters',
    'errorName'
  );
  verify(
    lastName.value,
    'Last name',
    /^[a-zA-Z]+$/,
    'Last name can only contain characters',
    'errorLastName'
  );
  verify(
    email.value,
    'Email',
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    'Email must have a valid format',
    'errorEmail'
  );
  verify(
    password.value,
    'Password',
    /^(?=.*\d)(?=.*[@#$%^&+=_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'Password must include a lowercase, an uppercase,a digit, a special character(@#$%^&+=_) and a minumun of 8 characters',
    'errorPassword'
  );

  verify(
    url.value,
    'URL',
    /^http(s)?:\/\/www\.[a-zA-Z]+\.[a-z]+(\.[a-z]+)?$/,
    'URL should follow a valid format like: http://www.xyz.xyz.xyz https://www.xyz.xyz http://www.xyz.xyz http://www.xyz.xyz http://www.xyz.xyz',
    'errorUrl'
  );
  verify(
    phone.value,
    'Phone',
    /^\d\d\d\d\d\d\d\d$/,
    'Phone must have exactly 8 digits',
    'errorPhone'
  );
  verify(age.value, 'Age', /[0-9]/, 'Age must be a digit', 'errorAge');
  /*-----------------------------------PASSWORD_confirmation --------------------------------------*/
  let parragraphConfirmation = document.getElementById(
    'errorPasswordConfirmation'
  );
  if (parragraphConfirmation.firstChild) {
    parragraphConfirmation.removeChild(parragraphConfirmation.firstChild);
  }
  if (password_confirmation.value != password.value) {
    validated = false;
    let text = document.createTextNode(`Password conformation doesn't match`);
    parragraphConfirmation.appendChild(text);
  }

  /*--------------------------Validated data---------------------------- */
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
  if (validated) console.log(data);
}

form.addEventListener('submit', validate);
