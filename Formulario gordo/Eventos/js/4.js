"use strict";
//Se asignan e iteran los parrafos para anadirles el evento mouseover
let parrafos = document.getElementsByTagName('p');
for (let element of parrafos) {
 
  element.addEventListener('dblclick', () => {
    element.remove();
  });
 
  element.addEventListener('mouseout', () => {
    element.style.visibility  = "hidden";
  });
}
//Se asigna el boton con la funcionalidad de aparecer elementos ocultos
let button = document.querySelector("button");
button.addEventListener("click", () => {
  let parrafos = document.getElementsByTagName('p');
  for (let element of parrafos) {
    element.style.visibility  = "visible";
  }
});
