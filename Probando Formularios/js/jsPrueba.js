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

const validarFecha = (fecha) => {/* está en formato aaaa-mm-dd */

};

const verificarFecha = (e) => {};

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
