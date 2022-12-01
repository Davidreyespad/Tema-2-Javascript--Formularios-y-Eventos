const validarNombre = (nombre) => {
  let exprUsuario = /[0-9]/;
  if (!exprUsuario.test(nombre)) {
    return true;
  } else {
    return false;
  }
};

const verificarNombre = (e) => {
  let nombre = e.target.value;
  if (!validarNombre(nombre)) {
    mostrarError("Error el Nombre y/o Apellidos", e.target);
    return false;
  }
  return true;
};

const validarFecha = (fecha) => {
  /* está en formato aaaa-mm-dd */
  if (fecha === "") return false;
  let year = parseInt(fecha.substring(0, 4));
  if (year > 2010) {
    return true;
  } else return false;
};

const verificarFecha = (e) => {
  let fecha = e.target.value;
  if (!validarFecha(fecha)) {
    mostrarError("Error en la Fecha", e.target);
    return false;
  }
  return true;
};

const mostrarError = (mensaje, elemento) => {
  let error = document.createElement("p");
  error.textContent = mensaje;
  error.className = "error";
  elemento.insertAdjacentElement("afterend", error);

  setTimeout(() => {
    error.remove();
  }, 3000);
};

const validarCampos = () => {
  const inputFullName = document.querySelector("[name='nombreApellidos']");
  const inputDate = document.querySelector("[name='fecha']");
  const inputEmail = document.querySelector("[name='correo']");
  const inputSexList = document.querySelectorAll("[name='sexo']");
  const inputHobbiesList = document.querySelectorAll("[name='aficiones']");
  const inputCities = document.querySelector("[name='listaCiudades']");
  const inputMessage = document.querySelector("[name='mensaje']");
  const divSex = document.querySelector(".divRadio");
  const divHobbies = document.querySelector(".divAficiones");

  
};

const inputFullName = document.querySelector("[name='nombreApellidos']");
inputFullName.addEventListener("blur", verificarNombre);
const inputDate = document.querySelector("[name='fecha']");
inputDate.addEventListener("blur", verificarFecha);
