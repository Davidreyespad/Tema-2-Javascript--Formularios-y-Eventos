let bolaPapel = document.querySelector(".bolaPapel");
bolaPapel.draggable = true; //hacemos el elemento arrastrable

let papeleraVacia = document.querySelector(".papeleraVacia");
let papeleraLLena = document.querySelector(".papeleraLLena");


papeleraVacia.addEventListener("dragenter", (e) => {
  console.log("dragenter"); //el elemento draggable empieza a entrar cuanto entra
});
papeleraVacia.addEventListener("dragleave", (e) => {
  console.log("dragleave"); //el elemento draggable empieza a salir cuanto sale el
});
papeleraVacia.addEventListener("dragover", (e) => {
  e.preventDefault(); //para que ejecute el drop
  console.log("dragover");
});
papeleraVacia.addEventListener("drop", (e) => {
  console.log("drop");
  papeleraVacia.appendChild(bolaPapel);
});
bolaPapel.addEventListener("dragstart", (e) => {
  console.log("dragstart");
});
bolaPapel.addEventListener("dragend", (e) => {
    console.log("dragend");
});
bolaPapel.addEventListener("drag", (e) => {
  //este evento se ejecuta constantemente
  console.log("drag");
});
