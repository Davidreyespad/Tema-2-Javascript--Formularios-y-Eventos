const saludo = () => {
  alert("Hola");
};

const saludar = () => {
  intervaloSaludo = setInterval(saludo, 2000);
};

const pararSaludo = () => {
  clearInterval(intervaloSaludo);
};

const botonComenzar = document.querySelector("#comenzar");
const botonTerminar = document.querySelector("#terminar");

//Si la declaro dentro de la funcion, no funciona
let intervaloSaludo;

botonComenzar.addEventListener("click", saludar);
botonTerminar.addEventListener("click", pararSaludo);
