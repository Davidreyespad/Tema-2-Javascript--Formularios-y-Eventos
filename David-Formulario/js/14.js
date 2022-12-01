const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
const CURRENT_YEAR = new Date().getFullYear()

const validateDate = (birthDate) => {
    
  /* Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31 */
  if (!birthDate.match(DATE_REGEX)) {
    return false
  }
  
  /* Comprobar los días del mes */
  const day = parseInt(birthDate.split('/')[0])
  const month = parseInt(birthDate.split('/')[1])
  const year = parseInt(birthDate.split('/')[2])
  const monthDays = new Date(year, month, 0).getDate()
  if (day > monthDays) {
    return false
  }
  
  /* Comprobar que el año no sea superior al actual*/
  if (year > CURRENT_YEAR) {
    return false
  }
  return true

}

const validateForm = event => {
  event.preventDefault();
  const date = document.querySelector('.input').value;
  const validationMessage = document.querySelector('.validation-message');
  if(validateDate(date)) {
    validationMessage.classList.add("success");
    validationMessage.innerHTML='¡Fecha válida!';
  } else {
    validationMessage.classList.add("error");
    validationMessage.innerHTML='¡Fecha  no válida!';
  }
}


document.querySelector(".form").addEventListener('submit', validateForm);