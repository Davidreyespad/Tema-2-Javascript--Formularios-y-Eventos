const $d = document;
 
var button = $d.getElementById("botonNum");
 
var ulBody = $d.getElementById("lista");
 
button.addEventListener("click", function () {
 
  const num1 = Math.random() * 255;
  const num2 = Math.random() * 255;
  const num3 = Math.random() * 255;
 
  let numAleat = parseInt(Math.random() * 20);
 
  const elementoLi = $d.createElement("li");
 
  const colorElement = elementoLi.setAttribute(
    "style",
    `color:RGB(${num1},${num2},${num3})`
  );
 
  //Insertamos un hijo dentro la etiqueta UL
 
  ulBody.insertAdjacentElement("beforeend", elementoLi);
 
  elementoLi.textContent = numAleat;
});




