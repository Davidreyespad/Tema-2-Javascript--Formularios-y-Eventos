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

const validarCampos = () => {
  const inputNombreApellidos = document.querySelector("[name='nombreApellidos']");
  const inputFecha = document.querySelector("[name='fecha']");
  const inputCorreo = document.querySelector("[name='correo']");
  const inputSex = document.querySelectorAll("[name='sexo']");
  const inputHobbies = document.querySelectorAll("[name='aficiones']");
  const inputCiudades = document.querySelector("[name='listaCiudades']");
  const inputMensaje = document.querySelector("[name='mensaje']");
  const divSex = document.querySelector(".divRadio");
  const divHobbies = document.querySelector(".divAficiones");

  let inputSexChecked = (Array.from(inputSex).filter(item=>item.checked)).length;
  let inputHobbiesChecked = (Array.from(inputHobbies).filter(item=>item.checked)).length;

  let esOk=true;
  if(inputNombreApellidos.value===""){
    mostrarError ("Nombre y Apellidos no puede estar vacío", inputNombreApellidos);
    esOk=false;
  }
  else if (!validarNombre (inputNombreApellidos.value)){
    mostrarError("Error en el campo Nombre y Apellidos", inputNombreApellidos);
    esOk=false;
}

return esOk;
};

const verificarFormulario = (e) => {
  if (!validarCampos()) {
    e.preventDefault();
        return false;
  }
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

const inputFullName = document.querySelector("[name='nombreApellidos']");
inputFullName.addEventListener("blur", verificarNombre);
const inputDate = document.querySelector("[name='fecha']");
inputDate.addEventListener("blur", verificarFecha);
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", verificarFormulario);
