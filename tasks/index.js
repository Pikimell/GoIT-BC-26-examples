let regex = /^\d*$/; // Рядок з Цифр будь якої довжини
let regexEmail = /^[A-Z]*$/;

function isValidate(login) {
  const REGEX_LOGIN = /^[A-Za-z0-9]{3,10}@gmail.(com|ua)/;
  return login == REGEX_LOGIN;
}
