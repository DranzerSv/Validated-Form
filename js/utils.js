function verify(fieldValue, fieldName, regex, errormessage, id) {
  const parragraph = document.getElementById(id);
  if (parragraph.firstChild) {
    parragraph.removeChild(parragraph.lastChild);
  }
  if (!fieldValue) {
    let text = document.createTextNode(`${fieldName} can't be empty`);
    parragraph.appendChild(text);
    return false;
  } else if (!regex.test(fieldValue)) {
    let text = document.createTextNode(errormessage);
    parragraph.appendChild(text);
    return false;
  }
  return true;
}

function verifyPasswordConfirmation() {
  const password_confirmation = document.getElementById(
    'password_confirmation'
  );
  const parragraphConfirmation = document.getElementById(
    'errorPasswordConfirmation'
  );
  if (parragraphConfirmation.firstChild) {
    parragraphConfirmation.removeChild(parragraphConfirmation.firstChild);
  }
  if (password_confirmation.value != password.value) {
    let text = document.createTextNode(`Password confirmation doesn't match`);
    parragraphConfirmation.appendChild(text);
  }
}

export { verify, verifyPasswordConfirmation };
