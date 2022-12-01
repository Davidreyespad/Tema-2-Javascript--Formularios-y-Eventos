"use strict";
 
let number = 100;
 
//Crear checkboxes
let div = document.getElementById("container");
 
while (number > 0) {
  let n = document.createElement("label");
  n.textContent = number;
 
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
 
  div.appendChild(n);
  div.appendChild(checkbox);
  number--;
}
 
 
//Botones
let marcar = document.getElementById("marcar");
let desmarcar = document.getElementById("desmarcar");
 
marcar.addEventListener("click", () => {
  let boxes = document.getElementById("container");
 
  for (let element of boxes.children) {
    element.checked = true;
  }
 
})
 
desmarcar.addEventListener("click", () => {
  let boxes = document.getElementById("container");
 
  for (let element of boxes.children) {
    element.checked = false;
  }
})
