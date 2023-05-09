import { verify, verifyPasswordConfirmation } from './utils.js';
userName.addEventListener('keyup', () => {
  verify(
    userName.value,
    'Name',
    /^[a-zA-Z]+$/,
    'Name can only contain characters',
    'errorName'
  );
});
lastName.addEventListener('keyup', () => {
  verify(
    lastName.value,
    'Last name',
    /^[a-zA-Z]+$/,
    'Last name can only contain characters',
    'errorLastName'
  );
});
email.addEventListener('keyup', () => {
  verify(
    email.value,
    'Email',
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    'Email must have a valid format',
    'errorEmail'
  );
});
password.addEventListener('keyup', () => {
  verify(
    password.value,
    'Password',
    /^(?=.*\d)(?=.*[@#$%^&+=_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'Password must include a lowercase, an uppercase,a digit, a special character(@#$%^&+=_) and a minumun of 8 characters',
    'errorPassword'
  );
  verifyPasswordConfirmation();
});
url.addEventListener('keyup', () => {
  verify(
    url.value,
    'URL',
    /^http(s)?:\/\/www\.[a-zA-Z]+\.[a-z]+(\.[a-z]+)?$/,
    'URL should follow a valid format like: http://www.xyz.xyz.xyz https://www.xyz.xyz http://www.xyz.xyz http://www.xyz.xyz http://www.xyz.xyz',
    'errorUrl'
  );
});
phone.addEventListener('keyup', () => {
  verify(
    phone.value,
    'Phone',
    /^\d\d\d\d\d\d\d\d$/,
    'Phone must have exactly 8 digits',
    'errorPhone'
  );
});
age.addEventListener('keyup', () => {
  verify(age.value, 'Age', /[0-9]/, 'Age must be a digit', 'errorAge');
});
password_confirmation.addEventListener('keyup', () => {
  verifyPasswordConfirmation();
});
