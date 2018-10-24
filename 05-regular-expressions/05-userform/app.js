const name = document.getElementById('name');
const zip = document.getElementById('zip');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

name.addEventListener('blur', validateName);
zip.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);

function validateName() {
  const re = /^[a-zA-Z]{2,10}$/;
  toggleInvalidClass(name, !re.test(name.value));
}

function validateZip() {
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  toggleInvalidClass(zip, !re.test(zip.value));
}

function validateEmail() {
  const re = /^([\w\-\.]+)@([\w\-\.]+)\.[a-zA-Z]{2,5}$/;
  toggleInvalidClass(email, !re.test(email.value));
}

function validatePhone() {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  toggleInvalidClass(phone, !re.test(phone.value));
}

function toggleInvalidClass(el, isInvalid) {
  if (isInvalid) {
    el.classList.add('is-invalid');
  } else {
    el.classList.remove('is-invalid');
  }
}
