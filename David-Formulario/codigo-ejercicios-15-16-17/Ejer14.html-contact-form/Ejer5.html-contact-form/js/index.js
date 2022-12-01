let formulario = document.querySelector("#formularioEmail");

let nombre = document.getElementById("nombre");

let input = document.getElementById("email");

let telefono = document.getElementById("telefono");

let affair = document.getElementById("affair");

let mensaje = document.getElementById("mensaje");

let enviar = document.getElementById("enviar");

nombre.addEventListener("blur", function () {
  const expNombre = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/g;

  const esNumero = expNombre.test(nombre.value);

  const largoNombre = nombre.value.length;

  const nombreVacio = "";

  if (largoNombre > 80 || nombre.value == nombreVacio || !esNumero) {
    parrafoNombre.textContent = "Nombre no válido";

    parrafoNombre.style.color = "red";
  } else{
    parrafoNombre.textContent = "Nombre válido";

    parrafoNombre.style.color = "green";
  }
});

const parrafoNombre = document.createElement("p");

nombre.insertAdjacentElement("afterend", parrafoNombre);

input.addEventListener("blur", function () {
  let emailVacio = "";

  const expEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const esEmail = expEmail.test(input.value);

  if (!esEmail || input.value == emailVacio) {
    parrafoEmail.textContent = "Email no válido";

    parrafoEmail.style.color = "red";
  } else{
    parrafoEmail.textContent = "Email válido";

    parrafoEmail.style.color = "green";
  }
});

const parrafoEmail = document.createElement("p");

input.insertAdjacentElement("afterend", parrafoEmail);

telefono.addEventListener("blur", function () {
  let telefonoVacio = "";

  const expTelefono = /^[0-8](?!.*00)\d{8}$/;

  const esTelefono = expTelefono.test(telefono.value);

  if (!esTelefono || telefono.value == telefonoVacio) {
    parrafoTelefono.textContent = "Teléfono no válido";

    parrafoTelefono.style.color = "red";
  } else{
    parrafoTelefono.textContent = "Teléfono válido";

    parrafoTelefono.style.color = "green";
  }
});

const parrafoTelefono = document.createElement("p");

telefono.insertAdjacentElement("afterend", parrafoTelefono);

affair.addEventListener("blur", function () {
  let longuitudAffair = affair.value.length;

  let affairVacio = "";

  const expAffair = /[^ /\ ]/i;

  const esAffair = expAffair.test(affair.value);

  if (longuitudAffair > 120 || !esAffair || affair.value == affairVacio) {
    parraAffair.textContent = "Affair no válido";

    parraAffair.style.color = "red";
  } else{
    parraAffair.textContent = "Affair válido";

    parraAffair.style.color = "green";
  }
});

const parraAffair = document.createElement("p");

affair.insertAdjacentElement("afterend", parraAffair);

mensaje.addEventListener("blur", function () {
  let longuitudMensaje = mensaje.value.length;

  let mensajeVacio = "";

  if (longuitudMensaje > 300 || mensaje.value == mensajeVacio) {
    parrafoMensaje.textContent = "Mensaje no válido";

    parrafoMensaje.style.color = "red";
  } else{
    parrafoMensaje.textContent = "Mensaje válido";

    parrafoMensaje.style.color = "green";
  }
});

const parrafoMensaje = document.createElement("p");

mensaje.insertAdjacentElement("afterend", parrafoMensaje);
