const creaCheck = () => {
  const body = document.querySelector("body");
  for (let i = 0; i < 100; i++) {
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.classList.add("check");
   /*  let numAleat= Math.floor(Math.random()*100);
    check.textContent= numAleat; */
    body.appendChild(check);
  }
};

const marcar = () => {
  const check = document.querySelectorAll(".check");
  check.forEach((item) => {
    item.checked = true;
  });
};

const desmarcar = () => {
  const check = document.querySelectorAll(".check");
  check.forEach((item) => {
    item.checked = false;
  });
  
};
//Creamos el botón para crear los checkBox
const botonCrear = document.querySelector('[name="creador"]');
botonCrear.addEventListener("click", creaCheck);

//Le añadimos al botón marcar contenido, atributo y el listener
const botonMarcar = document.querySelector('[name="marcar"]');
botonMarcar.textContent = "Marcar los Check Box";
botonMarcar.setAttribute("name", "marcar");
botonMarcar.addEventListener("click", marcar);

//Le añadimos al botón desmarcar contenido, atributo y el listener
const botonDesmarcar = document.querySelector('[name="desmarcar"]');
botonDesmarcar.textContent = "Desmarcar los Check Box";
botonMarcar.setAttribute("name", "desmarcar");
botonDesmarcar.addEventListener("click", desmarcar);
